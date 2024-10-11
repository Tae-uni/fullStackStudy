import express from 'express';
import { query, validationResult, matchedData, checkSchema } from 'express-validator';
import { createUserValidationSchema } from './utils/validationSchemas.mjs';

const app = express();

app.use(express.json());

const loggingMiddleware = (req, res, next) => {
  console.log(`${req.method} - ${req.url}`);
  next();
};

const resolveIndexByUserId = (request, response, next) => {
  const {
    params: { id },
  } = request;

  const parsedId = parseInt(id);
  if (isNaN(parsedId)) {
    return response.sendStatus(400);
  }

  const findUserIndex = mockUsers.findIndex((user) => user.id === parsedId);

  if (findUserIndex === -1) {
    return response.sendStatus(404);
  }
  request.findUserIndex = findUserIndex;
  next();
};

// Apply the Middleware globally
// app.use(loggingMiddleware);

const PORT = process.env.PORT || 3000;

const mockUsers = [
  { id: 1, username: "ans", displayName: "Ans" },
  { id: 2, username: "jack", displayName: "Jack" },
  { id: 3, username: "adam", displayName: "Adam" },
  { id: 4, username: "tina", displayName: "Tina" },
  { id: 5, username: "jason", displayName: "Jason" },
  { id: 6, username: "henry", displayName: "Henry" },
  { id: 7, username: "Marilyn", displayName: "Marilyn" },
];

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

// Route to get the list of all users
app.get(
  '/api/users',
  query('filter')
    .isString()
    .notEmpty().withMessage('Must not be empty')
    .isLength({ min: 3, max: 10 }).withMessage('Must be at least 3-10 characters'),
  (request, response) => {
    const result = validationResult(request);
    console.log(result);
    const {
      query: { filter, value },
    } = request;

    if (filter && value) {
      return response.send(
        mockUsers.filter((user) => user[filter].includes(value))
      );
    }
    return response.send(mockUsers);
  });

// The order is matter.
app.use(loggingMiddleware, (request, response, next) => {
  console.log("Finished Logging...");
  next();
});

app.post(
  '/api/users', checkSchema(createUserValidationSchema), (request, response) => {
    const result = validationResult(request);
    console.log(result);

    if (!result.isEmpty()) {
      return response.status(400).send({ errors: result.array() });
    }

    const data = matchedData(request);

    const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...data };
    mockUsers.push(newUser);
    return response.status(201).send(newUser);
  });

// Route Parameters
// To get specific user by ID
app.get('/api/users/:id', resolveIndexByUserId, (request, response) => {
  const { findUserIndex } = request;
  const findUser = mockUsers[findUserIndex];
  if (!findUser) {
    return response.sendStatus(404)
  };
  return response.send(findUser);
});

app.get('/api/products', (request, response) => {
  response.send([
    { id: 123, name: "Chicken breast", price: 12.99 }
  ]);
});

// Put method: updating the whole information
app.put('/api/users/:id', resolveIndexByUserId, (request, response) => {
  const { body, findUserIndex } = request;

  mockUsers[findUserIndex] = { id: mockUsers[findUserIndex].id, ...body };
  return response.sendStatus(200);
});

// Patch method: updating the partial information
app.patch('/api/users/:id', resolveIndexByUserId, (request, response) => {
  const { body, findUserIndex } = request;

  mockUsers[findUserIndex] = { ...mockUsers[findUserIndex], ...body };
  return response.sendStatus(200);
});

app.delete('/api/users/:id', resolveIndexByUserId, (request, response) => {
  const { findUserIndex } = request;

  mockUsers.splice(findUserIndex, 1);
  return response.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});