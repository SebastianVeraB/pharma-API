const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());

app.listen(port, () => {
  console.log(`API Running on ${port}.`);
});

const inMemoryResponse = [
    {
      name: 'Neurontin',
      lab: 'Pfizer',
      active_ingredient: 'Gabapentin',
      strength: '300',
      Form: 'Capsules',
    }
  ];

app.get('/api/', (req, res) => {
    res.status(200).json(inMemoryResponse);
});

module.exports = app

