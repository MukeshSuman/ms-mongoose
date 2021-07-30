const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    feedback: { type: String, unique: true, required: true },
    feedbackBy: { type: Schema.Types.ObjectId, ref: "User" },
    isBlock: { type: Boolean, default: false },
    isDelete: { type: Boolean, default: false },
    replay: { type: String, default: "" },
    createdDate: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
    strict: false,
  }
);
schema.plugin(mongoosePaginate);
schema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Feedback", schema);
