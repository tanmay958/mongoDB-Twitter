const mongoose = require("mongoose");

const connect = async () => {
  console.log("reaches here");
  await mongoose.connect("mongodb://127.0.0.1/twitter");
};
module.exports = connect;
