require('dotenv').config();
require('express-async-errors');
// async errors

const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const notFoundMiddleWare = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const products = require('./routes/products');

//middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('<h1>Store API</h1> <a href="/api/v1/products">products route</a>');
});

app.use('/api/v1/products', products);

// products route

app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleware);

// server start
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening at port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
