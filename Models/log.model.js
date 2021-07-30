const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    serverName: { type: String, required: true },
    server: { type: String },
    logType: { type: String },
    workingInfo: { type: Object },
  },
  {
    timestamps: true,
    strict: false,
  }
);
schema.plugin(mongoosePaginate);
schema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Log", schema);
