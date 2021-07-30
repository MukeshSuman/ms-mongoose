const { ErrorFound } = require("./Models");
const fnTemplate = async () =>
  await new Promise(async (resolve, reject) => {
    try {
      return true;
    } catch (e) {
      console.error(e);
      throw Error("Error while fnTemplate catch => errorFound.mongoose");
    }
  });

const create = async (data) =>
  await new Promise(async (resolve, reject) => {
    try {
      const createMongooseRes = await ErrorFound.create(data);
      resolve(createMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while create catch => errorFound.mongoose");
    }
  });

const updateWithQuery = async (updateQuery, data) =>
  await new Promise(async (resolve, reject) => {
    try {
      const updateMongooseRes = await ErrorFound.updateOne(updateQuery, data);
      resolve(updateMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error(
        "Error while fnTemplate wpdateWithQuery => errorFound.mongoose"
      );
    }
  });

const updateById = async (data) =>
  await new Promise(async (resolve, reject) => {
    try {
      const updateMongooseRes = await ErrorFound.findByIdAndUpdate(
        { _id: data.id || data._id },
        data
      );
      resolve(updateMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while updatebyId catch => errorFound.mongoose");
    }
  });

const createAndUpdate = async (data) =>
  await new Promise(async (resolve, reject) => {
    try {
      const updateMongooseRes = await ErrorFound.findOneAndUpdate(
        { userSetName: data.userSetName },
        data,
        {
          new: true,
          upsert: true, // Make this update into an upsert
          returnOriginal: false,
        }
      );
      resolve(updateMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while createAndUpdate catch => errorFound.mongoose");
    }
  });

const deleteById = async (_id) =>
  await new Promise(async (resolve, reject) => {
    try {
      const deleteMongooseRes = await ErrorFound.findByIdAndDelete({
        _id: _id,
      });
      resolve(deleteMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while deleteById catch => errorFound.mongoose");
    }
  });

const deleteWithQuery = async (deleteQuery) =>
  await new Promise(async (resolve, reject) => {
    try {
      const deleteMongooseRes = await ErrorFound.deleteOne(deleteQuery);
      resolve(deleteMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while deleteWithQuery catch => errorFound.mongoose");
    }
  });

const deleteManyWithQuery = async (deleteQuery) =>
  await new Promise(async (resolve, reject) => {
    try {
      const deleteMongooseRes = await ErrorFound.deleteMany(deleteQuery);
      resolve(deleteMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error(
        "Error while deleteManyWithQuery catch => errorFound.mongoose"
      );
    }
  });

const findById = async (_id) =>
  await new Promise(async (resolve, reject) => {
    try {
      const findMongooseRes = await ErrorFound.findOne({
        _id: _id,
      });
      resolve(findMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while findById catch => errorFound.mongoose");
    }
  });

const findAllWithQuery = async (findQuery) =>
  await new Promise(async (resolve, reject) => {
    try {
      const findMongooseRes = await ErrorFound.find(findQuery);
      resolve(findMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while findAllWithQuery catch => errorFound.mongoose");
    }
  });

const findOneWithQuery = async (findQuery) =>
  await new Promise(async (resolve, reject) => {
    try {
      const findMongooseRes = await ErrorFound.findOne(findQuery);
      resolve(findMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while findAllWithQuery catch => dateSet.mongoose");
    }
  });

const findAll = async () =>
  await new Promise(async (resolve, reject) => {
    try {
      const findMongooseRes = await ErrorFound.findOne({});
      resolve(findMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while findAll catch => errorFound.mongoose");
    }
  });

const findWithPage = async (page, perPage) =>
  await new Promise(async (resolve, reject) => {
    try {
      const options = {
        page: parseInt(page) || 1,
        limit: parseInt(perPage) || 10,
        sort: {
          createdAt: -1,
        },
      };
      const findMongooseRes = await ErrorFound.paginate(options);
      resolve(findMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while findWithPage catch => errorFound.mongoose");
    }
  });

module.exports = {
  fnTemplate,
  create,
  createAndUpdate,
  updateWithQuery,
  updateById,
  deleteById,
  deleteWithQuery,
  deleteManyWithQuery,
  findAllWithQuery,
  findOneWithQuery,
  findById,
  findAll,
  findWithPage,
};
