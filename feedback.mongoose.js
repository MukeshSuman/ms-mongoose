const Model = require("./Models");
const fnTemplate = async () =>
  await new Promise(async (resolve, reject) => {
    try {
      return true;
    } catch (e) {
      console.error(e);
      throw Error("Error while feedback catch");
    }
  });

const createFeedback = async (data) =>
  await new Promise(async (resolve, reject) => {
    try {
      console.log("createFeedback", data);
      const feedback = await Model.Feedback.create({
        feedbackBy: data.user_id,
        feedback: data.feedback,
      });
      resolve(feedback);
    } catch (e) {
      console.error(e);
      throw Error("Error while feedback catch");
    }
  });

const updateFeedback = async (data) =>
  await new Promise(async (resolve, reject) => {
    try {
      console.log("data", data);
      const feedback = await Model.Feedback.updateOne(
        { _id: data._id, feedbackBy: data.user_id },
        {
          feedback: data.feedback,
        }
      );
      resolve(feedback);
    } catch (e) {
      console.error(e);
      throw Error("Error while feedback catch");
    }
  });

const deleteFeedback = async (data) =>
  await new Promise(async (resolve, reject) => {
    try {
      const feedback = await Model.Feedback.updateOne(
        { _id: data._id },
        {
          isDelete: true,
        }
      );
      resolve(feedback);
    } catch (e) {
      console.error(e);
      throw Error("Error while feedback catch");
    }
  });

const blockFeedback = async (data) =>
  await new Promise(async (resolve, reject) => {
    try {
      const feedback = await Model.Feedback.updateOne(
        { _id: data._id },
        {
          isBlock: true,
        }
      );
      resolve(feedback);
    } catch (e) {
      console.error(e);
      throw Error("Error while feedback catch");
    }
  });

const findById = async (_id) =>
  await new Promise(async (resolve, reject) => {
    try {
      const feedback = await Model.Feedback.findOne({
        _id: _id,
      });
      resolve(feedback);
    } catch (e) {
      console.error(e);
      throw Error("Error while feedback catch");
    }
  });

const findAllFeedback = async (page, perPage) =>
  await new Promise(async (resolve, reject) => {
    try {
      const options = {
        page: parseInt(page) || 1,
        limit: parseInt(perPage) || 10,
        sort: {
          createdAt: -1,
        },
      };
      const feedback = await Model.Feedback.paginate(
        { isBlock: false, isDelete: false },
        options
      );
      resolve(feedback);
    } catch (e) {
      console.error(e);
      throw Error("Error while feedback catch");
    }
  });

module.exports = {
  fnTemplate,
  createFeedback,
  updateFeedback,
  findById,
  findAllFeedback,
  deleteFeedback,
  blockFeedback,
};
