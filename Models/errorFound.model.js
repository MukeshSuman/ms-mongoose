const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    userSetName: { type: String, unique: true, required: true },
    userids: [{ type: String, unique: true }],
  },
  {
    timestamps: true,
    strict: false,
  }
);
schema.plugin(mongoosePaginate);
schema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("ErrorFound", schema);
