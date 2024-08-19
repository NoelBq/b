import express from 'express';
import cors from 'cors';
import productsRoute from './routes/products.js';
import stockPriceRoute from './routes/stockPrice.js';

const app = express();
const PORT = 8000;


const corsOptions = {
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/products', productsRoute);
app.use('/api/stock-price', stockPriceRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
