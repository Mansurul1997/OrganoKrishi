const express = require('express');
const cors = require('cors');
const products = require('./data/products');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((item) => item.id === Number(req.params.id));
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

app.post('/api/order', (req, res) => {
  const { items, total } = req.body;
  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'কার্ট খালি বা ভুল ডাটা' });
  }
  res.json({
    message: 'অর্ডার সফলভাবে গৃহীত হয়েছে!',
    order: {
      items,
      total,
      createdAt: new Date().toISOString()
    }
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
