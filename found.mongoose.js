const Model = require("./Models");
const fnTemplate = async () =>
  await new Promise(async (resolve, reject) => {
    try {
      return true;
    } catch (e) {
      console.error(e);
      throw Error("Error while found catch");
    }
  });

const createFound = async (data) =>
  await new Promise(async (resolve, reject) => {
    try {
      let found = await Model.Found.findOneAndUpdate(
        { userid: data.userid },
        data,
        {
          new: true,
          upsert: true, // Make this update into an upsert
        }
      );
      resolve(found);
    } catch (e) {
      console.error(e);
      throw Error("Error while create found catch");
    }
  });

const findById = async (_id) =>
  await new Promise(async (resolve, reject) => {
    try {
      const found = await Model.Found.findOne({
        _id: _id,
      });
      resolve(found);
    } catch (e) {
      console.error(e);
      throw Error("Error while Found findById catch");
    }
  });

const findByUserid = async (userid) =>
  await new Promise(async (resolve, reject) => {
    try {
      const found = await Model.Found.findOne({
        userid: userid,
      });
      resolve(found);
    } catch (e) {
      console.error(e);
      throw Error("Error while Found findByUserid catch");
    }
  });

const findAllFound = async () =>
  await new Promise(async (resolve, reject) => {
    try {
      const found = await Model.Found.find({});
      resolve(found);
    } catch (e) {
      console.error(e);
      throw Error("Error while found findAllFound catch");
    }
  });

const findFound = async (page, perPage) =>
  await new Promise(async (resolve, reject) => {
    try {
      const options = {
        page: parseInt(page) || 1,
        limit: parseInt(perPage) || 10,
        sort: {
          createdAt: -1,
        },
      };
      const found = await Model.Found.paginate(options);
      resolve(found);
    } catch (e) {
      console.error(e);
      throw Error("Error while found findAllFound catch");
    }
  });

module.exports = {
  fnTemplate,
  createFound,
  findById,
  findAllFound,
  findByUserid,
  findFound,
};
