const { WorkingInfo } = require("./Models");
const fnTemplate = async () =>
  await new Promise(async (resolve, reject) => {
    try {
      return true;
    } catch (e) {
      console.error(e);
      throw Error("Error while fnTemplate catch => workingInfo.mongoose");
    }
  });

const create = async (data) =>
  await new Promise(async (resolve, reject) => {
    try {
      const createMongooseRes = await WorkingInfo.create(data);
      resolve(createMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while create catch => workingInfo.mongoose");
    }
  });

const updateWithQuery = async (updateQuery, data) =>
  await new Promise(async (resolve, reject) => {
    try {
      const updateMongooseRes = await WorkingInfo.updateOne(updateQuery, data);
      resolve(updateMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error(
        "Error while fnTemplate wpdateWithQuery => workingInfo.mongoose"
      );
    }
  });

const updateById = async (data) =>
  await new Promise(async (resolve, reject) => {
    try {
      const updateMongooseRes = await WorkingInfo.findByIdAndUpdate(
        { _id: data.id || data._id },
        data
      );
      resolve(updateMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while updatebyId catch => workingInfo.mongoose");
    }
  });

const createAndUpdate = async (data) =>
  await new Promise(async (resolve, reject) => {
    try {
      const updateMongooseRes = await WorkingInfo.findOneAndUpdate(
        { userSet: data.userSet },
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
      throw Error("Error while createAndUpdate catch => workingInfo.mongoose");
    }
  });

const deleteById = async (_id) =>
  await new Promise(async (resolve, reject) => {
    try {
      const deleteMongooseRes = await WorkingInfo.findByIdAndDelete({
        _id: _id,
      });
      resolve(deleteMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while deleteById catch => workingInfo.mongoose");
    }
  });

const deleteWithQuery = async (deleteQuery) =>
  await new Promise(async (resolve, reject) => {
    try {
      const deleteMongooseRes = await WorkingInfo.deleteOne(deleteQuery);
      resolve(deleteMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while deleteWithQuery catch => workingInfo.mongoose");
    }
  });

const deleteManyWithQuery = async (deleteQuery) =>
  await new Promise(async (resolve, reject) => {
    try {
      const deleteMongooseRes = await WorkingInfo.deleteMany(deleteQuery);
      resolve(deleteMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error(
        "Error while deleteManyWithQuery catch => workingInfo.mongoose"
      );
    }
  });

const findById = async (_id) =>
  await new Promise(async (resolve, reject) => {
    try {
      const findMongooseRes = await WorkingInfo.findOne({
        _id: _id,
      });
      resolve(findMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while findById catch => workingInfo.mongoose");
    }
  });

const findAllWithQuery = async (findQuery) =>
  await new Promise(async (resolve, reject) => {
    try {
      const findMongooseRes = await WorkingInfo.find(findQuery);
      resolve(findMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while findAllWithQuery catch => workingInfo.mongoose");
    }
  });

const findOneWithQuery = async (findQuery) =>
  await new Promise(async (resolve, reject) => {
    try {
      const findMongooseRes = await WorkingInfo.findOne(findQuery);
      resolve(findMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while findAllWithQuery catch => dateSet.mongoose");
    }
  });

const findAll = async () =>
  await new Promise(async (resolve, reject) => {
    try {
      const findMongooseRes = await WorkingInfo.findOne({});
      resolve(findMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while findAll catch => workingInfo.mongoose");
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
      const findMongooseRes = await WorkingInfo.paginate(options);
      resolve(findMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while findWithPage catch => workingInfo.mongoose");
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
