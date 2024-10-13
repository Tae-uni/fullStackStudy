import express from 'express';
import routes from "./routes/index.mjs";
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());

// cookieParser uses a `Secret Key` to enable the signed option for cookies.
// It is crucial for preventing clients from tampering with cookies. Normally, an array of keys is set in `.env` files.
app.use(cookieParser('helloValue'));
app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

// Root router handler
app.get("/", (request, response) => {
  response.cookie("hello", "value", { maxAge: 10000, signed: true });
  // response.send("Hello, World!");
  response.status(201).send({ msg: 'HI' });
});
