const { UserSet } = require("./Models");
const fnTemplate = async () =>
  await new Promise(async (resolve, reject) => {
    try {
      return true;
    } catch (e) {
      console.error(e);
      throw Error("Error while fnTemplate catch => userSet.mongoose");
    }
  });

const create = async (data) =>
  await new Promise(async (resolve, reject) => {
    try {
      const createMongooseRes = await UserSet.create(data);
      resolve(createMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while create catch => userSet.mongoose");
    }
  });

const updateWithQuery = async (updateQuery, data) =>
  await new Promise(async (resolve, reject) => {
    try {
      const updateMongooseRes = await UserSet.updateOne(updateQuery, data);
      resolve(updateMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while fnTemplate wpdateWithQuery => userSet.mongoose");
    }
  });

const updateById = async (data) =>
  await new Promise(async (resolve, reject) => {
    try {
      const updateMongooseRes = await UserSet.findByIdAndUpdate(
        { _id: data.id || data._id },
        data
      );
      resolve(updateMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while updatebyId catch => userSet.mongoose");
    }
  });

const createAndUpdate = async (data) =>
  await new Promise(async (resolve, reject) => {
    try {
      const updateMongooseRes = await UserSet.findOneAndUpdate(
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
      throw Error("Error while createAndUpdate catch => userSet.mongoose");
    }
  });

const deleteById = async (_id) =>
  await new Promise(async (resolve, reject) => {
    try {
      const deleteMongooseRes = await UserSet.findByIdAndDelete({
        _id: _id,
      });
      resolve(deleteMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while deleteById catch => userSet.mongoose");
    }
  });

const deleteWithQuery = async (deleteQuery) =>
  await new Promise(async (resolve, reject) => {
    try {
      const deleteMongooseRes = await UserSet.deleteOne(deleteQuery);
      resolve(deleteMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while deleteWithQuery catch => userSet.mongoose");
    }
  });

const deleteManyWithQuery = async (deleteQuery) =>
  await new Promise(async (resolve, reject) => {
    try {
      const deleteMongooseRes = await UserSet.deleteMany(deleteQuery);
      resolve(deleteMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while deleteManyWithQuery catch => userSet.mongoose");
    }
  });

const findById = async (_id) =>
  await new Promise(async (resolve, reject) => {
    try {
      const findMongooseRes = await UserSet.findOne({
        _id: _id,
      });
      resolve(findMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while findById catch => userSet.mongoose");
    }
  });

const findAllWithQuery = async (findQuery) =>
  await new Promise(async (resolve, reject) => {
    try {
      const findMongooseRes = await UserSet.find(findQuery);
      resolve(findMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while findAllWithQuery catch => userSet.mongoose");
    }
  });

const findOneWithQuery = async (findQuery) =>
  await new Promise(async (resolve, reject) => {
    try {
      const findMongooseRes = await UserSet.findOne(findQuery);
      resolve(findMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while findAllWithQuery catch => dateSet.mongoose");
    }
  });

const findAll = async () =>
  await new Promise(async (resolve, reject) => {
    try {
      const findMongooseRes = await UserSet.findOne({});
      resolve(findMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while findAll catch => userSet.mongoose");
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
      const findMongooseRes = await UserSet.paginate(options);
      resolve(findMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while findWithPage catch => userSet.mongoose");
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
