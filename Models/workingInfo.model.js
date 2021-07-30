const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const Schema = mongoose.Schema;

const speedSchema = new Schema(
  {
    arrChunk: { type: Number, default: 36 },
    concurrency: { type: Number, default: 4 },
    startApiHitDelay: { type: Number, default: 700 },
    runProgramDelay: { type: Number, default: 3000 },
  },
  { _id: false }
);

const schema = new Schema(
  {
    serverName: { type: String, required: true },
    server: { type: String },
    found: { type: Number, default: 0 },
    error: { type: Number, default: 0 },
    notFound: { type: Number, default: 0 },
    userIdsIndex: { type: Number, default: 0 },
    totaluserIds: { type: Number, default: 0 },
    totalApiHit: { type: Number, default: 0 },
    currentFound: { type: Number, default: 0 },
    lastTotalApiHit: { type: Number, default: 0 },
    oldTotalApiHit: { type: Number, default: 0 },
    oldTotalApiHitA: { type: Number, default: 0 },
    tokenNumber: { type: Number, default: 123457, required: true },
    lastWorkingId: { type: String, default: "" },
    workingStatus: { type: String, default: "" },
    userSet: { type: String, default: "" },
    dateSet: { type: String, default: "" },
    lastUpdate: { type: String, default: "" },
    startTime: { type: String, default: "" },
    cpDateSet: [{ type: String }],
    cpuserSet: [{ type: String }],
    speed: {
      arrChunk: { type: Number, default: 36, required: true },
      concurrency: { type: Number, default: 4, required: true },
      startApiHitDelay: { type: Number, default: 700, required: true },
      runProgramDelay: { type: Number, default: 3000, required: true },
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);
schema.plugin(mongoosePaginate);
schema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("WorkingInfo", schema);
