const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const Pool = require('pg').Pool;
const cors = require('cors');

const pool = new Pool({
  user: 'drugman',
  host: 'unmtid-dbs.net',
  database: 'drugcentral',
  password: 'dosage',
  port: 5433
});

app.use(express.json());

app.use(cors({
  origin: '*'
}))

app.listen(port, () => {
  console.log(`API Running on port ${port}`);
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

  app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/', (req, res) => {
    res.status(200).json(inMemoryResponse);
});

app.get('/api/query/product/:ndc_product_code', (req, res) => {
    const ndc_product_code = req.params.ndc_product_code;
    pool.query("SELECT generic_name, product_name, form FROM public.product WHERE ndc_product_code = $1", [ndc_product_code], (error, results) => {
        res.status(200).json(results.rows);
      });
});

module.exports = app

