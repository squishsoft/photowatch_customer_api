import express from 'express';
const app = express();

const CUSTOMERS = [
  {
    id: 'baadslkfjalsdfkj',
    first_name: 'Jerry',
    last_name: 'Springer'
  },
  {
    id: 'adklsjfhadsjhfsd',
    first_name: 'Carl',
    last_name: 'Stratfield'
  }
];

app.get('/customer_list', (req, res) => res.json(CUSTOMERS));

export default app;