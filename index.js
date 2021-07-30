var UserMongoose = require("./user.mongoose");
var FeedbackMongoose = require("./feedback.mongoose");
var FoundMongoose = require("./found.mongoose");
var NotFoundMongoose = require("./notFound.mongoose");
var LogMongoose = require("./log.mongoose");
var WorkingInfoMongoose = require("./workingInfo.mongoose");
var DateSetMongoose = require("./dateSet.mongoose");
var UserSetMongoose = require("./userSet.mongoose");
var ErrorFoundMongoose = require("./errorFound.mongoose");
var InitMongoose = require("./init");

module.exports = {
  InitMongoose: InitMongoose,
  UserMongoose: { ...UserMongoose },
  FeedbackMongoose: { ...FeedbackMongoose },
  FoundMongoose: { ...FoundMongoose },
  NotFoundMongoose: { ...NotFoundMongoose },
  LogMongoose: { ...LogMongoose },
  WorkingInfoMongoose: { ...WorkingInfoMongoose },
  DateSetMongoose: { ...DateSetMongoose },
  UserSetMongoose: { ...UserSetMongoose },
  ErrorFoundMongoose: { ...ErrorFoundMongoose },
};
