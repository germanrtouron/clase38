import mongoose from "mongoose";

class MongoContainer {
  constructor(model) {
    this.model = model;
  }

  async getById(id) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return {
          message: `Cast to ObjectId failed for value ${id} (type string).`,
          error: true,
        };
      }
      const object = await this.model.findById(id);
      if (!object) {
        return {
          message: `The object with the specified ID (${id}) does not exist. Please verify that the ID is correct.`,
          error: true,
        };
      } else {
        return { object, error: false };
      }
    } catch (error) {
      return { message: error, error: true };
    }
  }

  async getAll() {
    try {
      const objects = await this.model.find();
      return { objects, error: false };
    } catch (error) {
      return { message: error, error: true };
    }
  }

  async save(body) {
    try {
      const object = await this.model.create(body);
      return {
        message: `The new object has been saved successfully. The object ID is ${object._id}.`,
        error: false,
      };
    } catch (error) {
      return { message: error, error: true };
    }
  }

  async updateById(body, id) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return {
          message: `Cast to ObjectId failed for value ${id} (type string).`,
          error: true,
        };
      }
      const response = await this.model.findByIdAndUpdate(id, body, {
        new: true,
      });
      if (response === null) {
        return {
          message: `The object with the specified ID (${id}) does not exist. Please verify that the ID is correct.`,
          error: true,
        };
      }
      return { message: `The object with ID ${id} has been successfully updated.`, error: false };
    } catch (error) {
      return { message: error, error: true };
    }
  }

  async deleteById(id) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return {
          message: `Cast to ObjectId failed for value ${id} (type string).`,
          error: true,
        };
      }
      const response = await this.model.findByIdAndDelete(id);
      if (response === null) {
        return {
          message: `The object with the specified ID (${id}) does not exist. Please verify that the ID is correct.`,
          error: true,
        };
      }
      return { message: `The object with ID ${id} has been successfully deleted.`, error: false };
    } catch (error) {
      return { message: error, error: true };
    }
  }

  async deleteAll() {
    try {
      await this.model.delete({});
      return { message: "All objects from the collection have been successfully deleted.", error: false };
    } catch (error) {
      return { message: error, error: true };
    }
  }
}

export { MongoContainer };
