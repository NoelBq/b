import ProductService from "../service/ProductService.js";

export default class ProductController {
  static getAllProducts(transformCallback) {
    try {
      const productsDTO = ProductService.getAllProducts();
      const stockPrices = ProductService.getAllStockPrices();
      if (transformCallback) {
        return transformCallback(productsDTO, stockPrices);
      }
      return productsDTO;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error({ message: "Internal Server Error" });
    }
  }
}
