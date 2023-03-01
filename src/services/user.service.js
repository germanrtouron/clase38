import { userManager } from "../models/index.js";

export class userService {
  static async getUsers() {
    return await userManager.getAll();
  }
  static async getUser(id) {
    return await userManager.getById(id);
  }
  static async saveUser(body){
    return await userManager.save(body);
  }
}
