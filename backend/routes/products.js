import express from "express";
const router = express.Router();
import ProductController from "../controllers/ProductController.js";

router.get("/", (req, res) => {
  try {
    const response = ProductController.getAllProducts(
      (productsDTO, stockPrices) => {
        return productsDTO.map((product) => ({
          ...product,
          brandId: product.brand.toLowerCase().trim().replace(/\s+/g, "-"),
          prices: product.skus.map((sku) => {
            const stockPrice = stockPrices[sku.code];
            return {
              sku: sku?.code,
              price: stockPrice?.price,
            };
          }),
        }));
      }
    );
    res.json(response);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
