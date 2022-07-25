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
  origin: '*',
  methods: ['GET', 'POST']
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


app.get('/api/query/generic/:generic_name', (req, res) => {
  const generic_name = req.params.generic_name;

  pool.query(`SELECT product.product_name, product.generic_name, product.form, product.ndc_product_code, struct.mrdef, lab.assigned_entity, active_ingredient.quantity, active_ingredient.unit
  FROM public.product AS product
  INNER JOIN public.prd2label AS plabel ON plabel.ndc_product_code = product.ndc_product_code 
  INNER JOIN public.label AS lab ON lab.id = plabel.label_id
  INNER JOIN public.active_ingredient AS active_ingredient ON active_ingredient.ndc_product_code = product.ndc_product_code
  INNER JOIN public.structures AS struct ON struct.id = active_ingredient.struct_id
  WHERE generic_name like '%'||$1||'%'
  ORDER BY lab.assigned_entity ASC`, [generic_name], (error, results) => {
      res.set({'Content-Type':'application/json'}).status(200).json(results.rows);
    });
  
});

module.exports = app

