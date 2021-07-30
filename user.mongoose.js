const Model = require("./Models");
const fnTemplate = async () =>
  await new Promise(async (resolve, reject) => {
    try {
      return true;
    } catch (e) {
      console.error(e);
      throw Error("Error while xmlParser catch");
    }
  });

const addUser = async (data) =>
  await new Promise(async (resolve, reject) => {
    try {
      let user = await Model.User.findOneAndUpdate(
        { userid: data.userid },
        data,
        {
          new: true,
          upsert: true, // Make this update into an upsert
        }
      );
      resolve(user);
    } catch (e) {
      console.error(e);
      throw Error("Error while xmlParser catch");
    }
  });

const updateUser = async (data) =>
  await new Promise(async (resolve, reject) => {
    try {
      let user = await Model.User.findOneAndUpdate(
        { userid: data.userid },
        data,
        {
          new: true,
          upsert: true, // Make this update into an upsert
        }
      );
      resolve(user);
    } catch (e) {
      console.error(e);
      throw Error("Error while xmlParser catch");
    }
  });

const selectKeys = {
  confData: false,
  pdfUrls: false,
  "date_of_birth_(dd/mmm/yyyy)": false,
  "pdfDataList.date_of_birth": false,
  "pdfDataList.pdfStr": false,
};

const findById = async (id) =>
  await new Promise(async (resolve, reject) => {
    try {
      let user = await Model.User.findOne({
        _id: id,
      }).select(selectKeys);
      resolve(user);
    } catch (e) {
      console.error(e);
      throw Error("Error while xmlParser catch");
    }
  });

const findUser = async (userid, password) =>
  await new Promise(async (resolve, reject) => {
    try {
      let user = await Model.User.findOne({
        userid: userid,
        confData: password,
      }).select(selectKeys);
      resolve(user);
    } catch (e) {
      console.error(e);
      throw Error("Error while xmlParser catch");
    }
  });

const findUserWithPdf = async (userid, password) =>
  await new Promise(async (resolve, reject) => {
    try {
      let user = await Model.User.findOne({
        userid: userid,
        confData: password,
        pdfDataList: { $exists: true, $ne: null },
      }).select(selectKeys);
      resolve(user);
    } catch (e) {
      console.error(e);
      throw Error("Error while xmlParser catch");
    }
  });

const findAllUserWithPdf = async (page, perPage) =>
  await new Promise(async (resolve, reject) => {
    try {
      const options = {
        page: parseInt(page) || 1,
        limit: parseInt(perPage) || 10,
        select: selectKeys,
        sort: {
          createdAt: -1,
        },
      };
      let user = await Model.User.paginate(
        {
          pdfIdentifier: { $ne: null },
        },
        options
      );
      // .select(selectKeys);
      // let user = await Model.User.find({ pdfIdentifier: { $ne: null } }).select(
      //   selectKeys
      // );
      resolve(user);
    } catch (e) {
      console.error(e);
      throw Error("Error while xmlParser catch");
    }
  });

const isUserExists = async (_id) =>
  await new Promise(async (resolve, reject) => {
    try {
      let user = await Model.User.findOne({
        _id: _id,
      })
        .select("_id")
        .lean();
      resolve(user);
    } catch (e) {
      console.error(e);
      throw Error("Error while xmlParser catch");
    }
  });

module.exports = {
  fnTemplate,
  addUser,
  updateUser,
  findUser,
  findAllUserWithPdf,
  findById,
  isUserExists,
  findUserWithPdf,
};
