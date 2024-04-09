const express = require('express'); 
const app = express();

const PORT = 8080;
const API_URL = "/api/v1";
const pets = [
  {id: 1, name: "Spot", owner: "Billaby", species: "lizard"},
  {id: 2, name: "Scooby", owner: "Shaggy", species: "dog"},
  {id: 4, name: "Meowsy", owner: "Gloria", species: "cat"},
];
const voidling = {id: "???", name: "Voidling", owner: "none", species: "null"};

app.get('/', (req, res) => { res.send(`Home Page!\nUse paths ${API_URL}(/pets, /pets/:name, or /pets/owner?name="CHECK_NAME") to see more!`); });

app.get(API_URL + '/pets', (req, res) => { res.send(pets); });

app.get(API_URL + '/pets/owner', (req, res) => {
  console.log(req.query);
  res.send(pets.find(pet => pet.owner === req.query.name) ?? voidling);
});

app.get(API_URL + '/pets/:name', (req, res) => {
  res.send(pets.find(pet => pet.name === req.params.name) ?? voidling);
});

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });