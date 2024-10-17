import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';

// import "./strategies/local-strategy.mjs";
import "./strategies/discord-strategy.mjs";
import routes from "./routes/index.mjs";

const app = express();

mongoose
  .connect('mongodb://localhost/express_practice')
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(`Error: ${err}`));

app.use(express.json());

// cookieParser uses a `Secret Key` to enable the signed option for cookies.
// It is crucial for preventing clients from tampering with cookies. Normally, an array of keys is set in `.env` files.
app.use(cookieParser('helloValue'));
app.use(
  session({
    secret: "tseiohvdafiodafe",
    saveUninitialized: false, // If it's true, every single time when user hit the API saves info in Session.
    resave: false, // If it's true, when user hit the API, expires date will refresh.
    cookie: {
      maxAge: 60000 * 60,
    },
    // Session Stores
    store: MongoStore.create({
      client: mongoose.connection.getClient(),
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

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

// app.post('/api/auth', passport.authenticate('local'), (req, res) => { res.sendStatus(200) });

app.get('/api/auth/status', (req, res) => {
  console.log(`Inside /auth/status endpoint`);
  console.log(req.user);
  console.log(req.session);
  return req.user ? res.send(req.user) : res.sendStatus(401);
});

app.post('/api/auth/logout', (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  req.logout((err) => {
    if (err) {
      return res.sendStatus(400);
    }
    res.sendStatus(200);
  });
});

app.get('/api/auth/discord', passport.authenticate('discord'));
app.get(
  '/api/auth/discord/redirect',
  passport.authenticate('discord'),
  (request, response) => {
    console.log(request.session);
    console.log(request.user);
    response.sendStatus(200);
  }
);