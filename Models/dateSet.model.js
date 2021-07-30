const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    dateSetName: { type: String, unique: true, required: true },
    dates: [{ type: String }],
  },
  {
    timestamps: true,
    strict: false,
  }
);
schema.plugin(mongoosePaginate);
schema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("DateSet", schema);
