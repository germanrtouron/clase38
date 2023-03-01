import { productManager } from "../models/index.js";

export class productService {
  static async getProducts() {
    return await productManager.getAll();
  }
  static async getProduct(id) {
    return await productManager.getById(id);
  }
  static async saveProduct(body) {
    return await productManager.save(body);
  }
  static async updateProduct(body, id) {
    return await productManager.updateById(body, id);
  }
  static async deleteProduct(id) {
    return await productManager.deleteById(id);
  }
  static async deleteProducts() {
    return await productManager.deleteAll();
  }
}
