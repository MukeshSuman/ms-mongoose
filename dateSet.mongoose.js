const { DateSet } = require("./Models");
const fnTemplate = async () =>
  await new Promise(async (resolve, reject) => {
    try {
      return true;
    } catch (e) {
      console.error(e);
      throw Error("Error while fnTemplate catch => dateSet.mongoose");
    }
  });

const create = async (data) =>
  await new Promise(async (resolve, reject) => {
    try {
      const createMongooseRes = await DateSet.create(data);
      resolve(createMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while create catch => dateSet.mongoose");
    }
  });

const updateWithQuery = async (updateQuery, data) =>
  await new Promise(async (resolve, reject) => {
    try {
      const updateMongooseRes = await DateSet.updateOne(updateQuery, data);
      resolve(updateMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while fnTemplate wpdateWithQuery => dateSet.mongoose");
    }
  });

const updateById = async (data) =>
  await new Promise(async (resolve, reject) => {
    try {
      const updateMongooseRes = await DateSet.findByIdAndUpdate(
        { _id: data.id || data._id },
        data
      );
      resolve(updateMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while updatebyId catch => dateSet.mongoose");
    }
  });

const createAndUpdate = async (data) =>
  await new Promise(async (resolve, reject) => {
    try {
      const updateMongooseRes = await DateSet.findOneAndUpdate(
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
      throw Error("Error while createAndUpdate catch => dateSet.mongoose");
    }
  });

const deleteById = async (_id) =>
  await new Promise(async (resolve, reject) => {
    try {
      const deleteMongooseRes = await DateSet.findByIdAndDelete({
        _id: _id,
      });
      resolve(deleteMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while deleteById catch => dateSet.mongoose");
    }
  });

const deleteWithQuery = async (deleteQuery) =>
  await new Promise(async (resolve, reject) => {
    try {
      const deleteMongooseRes = await DateSet.deleteOne(deleteQuery);
      resolve(deleteMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while deleteWithQuery catch => dateSet.mongoose");
    }
  });

const deleteManyWithQuery = async (deleteQuery) =>
  await new Promise(async (resolve, reject) => {
    try {
      const deleteMongooseRes = await DateSet.deleteMany(deleteQuery);
      resolve(deleteMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while deleteManyWithQuery catch => dateSet.mongoose");
    }
  });

const findById = async (_id) =>
  await new Promise(async (resolve, reject) => {
    try {
      const findMongooseRes = await DateSet.findOne({
        _id: _id,
      });
      resolve(findMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while findById catch => dateSet.mongoose");
    }
  });

const findAllWithQuery = async (findQuery) =>
  await new Promise(async (resolve, reject) => {
    try {
      const findMongooseRes = await DateSet.find(findQuery);
      resolve(findMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while findAllWithQuery catch => dateSet.mongoose");
    }
  });

const findOneWithQuery = async (findQuery) =>
  await new Promise(async (resolve, reject) => {
    try {
      const findMongooseRes = await DateSet.findOne(findQuery);
      resolve(findMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while findAllWithQuery catch => dateSet.mongoose");
    }
  });

const findAll = async () =>
  await new Promise(async (resolve, reject) => {
    try {
      const findMongooseRes = await DateSet.findOne({});
      resolve(findMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while findAll catch => dateSet.mongoose");
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
      const findMongooseRes = await DateSet.paginate(options);
      resolve(findMongooseRes);
    } catch (e) {
      console.error(e);
      throw Error("Error while findWithPage catch => dateSet.mongoose");
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
