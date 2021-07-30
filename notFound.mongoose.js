const { NotFound } = require("./Models");
const fnTemplate = async () =>
  await new Promise(async (resolve, reject) => {
    try {
      return true;
    } catch (e) {
      console.error(e);
      throw Error("Error while fnTemplate catch => notFound.mongoose");
    }
  });

const create = async (data) =>
  await new Promise(async (resolve, reject) => {
    try {
      const createMongooseRes = await NotFound.create(data);
      resolve(createMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while create catch => notFound.mongoose");
    }
  });

const updateWithQuery = async (updateQuery, data) =>
  await new Promise(async (resolve, reject) => {
    try {
      const updateMongooseRes = await NotFound.updateOne(updateQuery, data);
      resolve(updateMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error(
        "Error while fnTemplate wpdateWithQuery => notFound.mongoose"
      );
    }
  });

const updateById = async (data) =>
  await new Promise(async (resolve, reject) => {
    try {
      const updateMongooseRes = await NotFound.findByIdAndUpdate(
        { _id: data.id || data._id },
        data
      );
      resolve(updateMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while updatebyId catch => notFound.mongoose");
    }
  });

const createAndUpdate = async (data) =>
  await new Promise(async (resolve, reject) => {
    try {
      const updateMongooseRes = await NotFound.findOneAndUpdate(
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
      throw Error("Error while createAndUpdate catch => notFound.mongoose");
    }
  });

const deleteById = async (_id) =>
  await new Promise(async (resolve, reject) => {
    try {
      const deleteMongooseRes = await NotFound.findByIdAndDelete({ _id: _id });
      resolve(deleteMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while deleteById catch => notFound.mongoose");
    }
  });

const deleteWithQuery = async (deleteQuery) =>
  await new Promise(async (resolve, reject) => {
    try {
      const deleteMongooseRes = await NotFound.deleteOne(deleteQuery);
      resolve(deleteMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while deleteWithQuery catch => notFound.mongoose");
    }
  });

const deleteManyWithQuery = async (deleteQuery) =>
  await new Promise(async (resolve, reject) => {
    try {
      const deleteMongooseRes = await NotFound.deleteMany(deleteQuery);
      resolve(deleteMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while deleteManyWithQuery catch => notFound.mongoose");
    }
  });

const findById = async (_id) =>
  await new Promise(async (resolve, reject) => {
    try {
      const findMongooseRes = await NotFound.findOne({
        _id: _id,
      });
      resolve(findMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while findById catch => notFound.mongoose");
    }
  });

const findAllWithQuery = async (findQuery) =>
  await new Promise(async (resolve, reject) => {
    try {
      const findMongooseRes = await NotFound.find(findQuery);
      resolve(findMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while findAllWithQuery catch => notFound.mongoose");
    }
  });

const findOneWithQuery = async (findQuery) =>
  await new Promise(async (resolve, reject) => {
    try {
      const findMongooseRes = await NotFound.findOne(findQuery);
      resolve(findMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while findAllWithQuery catch => dateSet.mongoose");
    }
  });

const findAll = async () =>
  await new Promise(async (resolve, reject) => {
    try {
      const findMongooseRes = await NotFound.findOne({});
      resolve(findMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while findAll catch => notFound.mongoose");
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
      const findMongooseRes = await NotFound.paginate(options);
      resolve(findMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while findWithPage catch => notFound.mongoose");
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
