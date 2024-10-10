import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

const mockUsers = [
  { id: 1, username: "anson", displayname: "Anson" },
  { id: 2, username: "jack", displayname: "Jack" },
  { id: 3, username: "adam", displayname: "Adam" },
]

// Root router handler
app.get("/", (request, response) => {
  // response.send("Hello, World!");
  response.status(201).send({ msg: 'HI' });
});

// Route to get the list of all users
app.get('/api/users', (request, response) => {
  response.send(mockUsers);
});

// Route Parameters
// To get specific user by ID
app.get('/api/users/:id', (request, response) => {
  console.log(request.params);
  const parsedId = parseInt(request.params.id);
  console.log(parsedId);

  // Checks if the id is not a number
  if (isNaN(parsedId)) {
    return response.status(400).send({ msg: "Bad Request. Invalid ID." });
  }

  // Finds user by the id
  const findUser = mockUsers.find((user) => user.id === parsedId);
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

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});