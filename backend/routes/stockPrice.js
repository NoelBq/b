import express from 'express';
import stockPrice from '../models/stock-price.js';

const router = express.Router();

router.get('/:sku', (req, res) => {
    const sku = req.params.sku;
    const data = stockPrice[sku];

    if (data) {
        res.json(data);
    } else {
        res.status(404).json({ error: 'SKU not found' });
    }
});

export default router;
