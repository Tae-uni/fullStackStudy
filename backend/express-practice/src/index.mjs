import express from 'express';
import routes from "./routes/index.mjs";

const app = express();

app.use(express.json());

// Router
app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

// Root router handler
app.get("/",
  (request, response, next) => {
    console.log("Base URL");
    next();
  },
  (request, response) => {
    // response.send("Hello, World!");
    response.status(201).send({ msg: 'HI' });
  });
