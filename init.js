var mongoose = require("mongoose");

const connect = (mongoURI, options) => {
  mongoose.connect(mongoURI, options);

  // CONNECTION EVENTS
  // When successfully connected
  mongoose.connection.on("connected", function () {
    console.log("Mongoose default connection open");
  });

  // If the connection throws an error
  mongoose.connection.on("error", function (err) {
    console.log("Mongoose default connection error: " + err);
  });

  // When the connection is disconnected
  mongoose.connection.on("disconnected", function () {
    console.log("Mongoose default connection disconnected");
  });
};

module.exports = connect;
