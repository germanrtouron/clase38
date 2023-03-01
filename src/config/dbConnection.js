import mongoose from "mongoose";
import { options } from "./config.js";
import { logger } from "../logs/logger.js";

export const connectMongoDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(options.mongo.url);
    logger.info(
      "Successful connection to MongoDB database. You may now begin querying and updating information."
    );
  } catch (error) {
    logger.error(error);
  }
};
