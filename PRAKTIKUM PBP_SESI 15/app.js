require('dotenv').config();

const express = require('express');

console.log("JWT SECRET:", process.env.JWT_SECRET);

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ message: "JWT Starter API Ready" });
});

app.use('/auth', authRoutes);
app.use('/api', productRoutes);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});