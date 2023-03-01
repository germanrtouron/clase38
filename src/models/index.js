import { MongoContainer } from "./managers/mongo.manager.js";
import { userModel } from "./mongo/user.model.js";
import { productModel } from "./mongo/product.model.js";

export const userManager = new MongoContainer(userModel);
export const productManager = new MongoContainer(productModel);
