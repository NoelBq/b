import products from "../models/products.js";
import stockPrices from "../models/stock-price.js";

export default class ProductService {
  static getAllProducts() {
    try {
      if (products && products.length > 0) {
        return products;
      } else {
        return { message: "No products found" };
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      return { message: "Internal Server Error" };
    }
  }
  static getAllStockPrices() {
    try {
      if (stockPrices) {
        return stockPrices;
      } else {
        return { message: "No stock prices found" };
      }
    } catch (error) {
      console.error("Error fetching stock prices:", error);
      return { message: "Internal Server Error" };
    }
  }
}
