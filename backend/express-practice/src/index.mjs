import express from 'express';
import routes from "./routes/index.mjs";
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { mockUsers } from './utils/constants.mjs';

const app = express();

app.use(express.json());

// cookieParser uses a `Secret Key` to enable the signed option for cookies.
// It is crucial for preventing clients from tampering with cookies. Normally, an array of keys is set in `.env` files.
app.use(cookieParser('helloValue'));
app.use(
  session({
    secret: "tseiohvdafiodafe",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 60000 * 60,
    },
  })
);

app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

// Root router handler
app.get("/", (request, response) => {
  console.log(request.session);
  console.log(request.session.id);
  request.session.visited = true;
  response.cookie("hello", "value", { maxAge: 30000, signed: true });
  response.status(201).send({ msg: 'HI' });
});

app.post('/api/auth', (request, response) => {
  const {
    body: { username, password },
  } = request;
  const findUser = mockUsers.find((user) => user.username === username);

  if (!findUser || findUser.password !== password) {
    return response.status(401).send({ msg: "Bad Credentials" });
  } else {
    request.session.user = findUser;
    return response.status(200).send(findUser);
  }
});

app.get('/api/auth/status', (request, response) => {
  request.sessionStore.get(request.sessionID, (err, session) => {
    console.log(session);
  });
  return request.session.user
    ? response.status(200).send(request.session.user)
    : response.status(401).send({ msg: "Not Authenticated" });
});

app.post('/api/cart', (request, response) => {
  if (!request.session.user) {
    return response.sendStatus(401);
  }

  const { body: item } = request;
  const { cart } = request.session;

  if (cart) {
    cart.push(item);
  } else {
    request.session.cart = [item];
  }
  return response.status(201).send(item);
});

app.get('/api/cart', (request, response) => {
  if (!request.session.user) {
    return response.sendStatus(401);
  }
  return response.send(request.session.cart ?? []);
});