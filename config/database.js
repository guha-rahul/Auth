const mongoose = require("mongoose");

const MONGODB_URL = "mongodb://127.0.0.1:27017/authlco";

exports.connect = () => {
  mongoose
    .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log("Success!!"))
    .catch((err) => {
      console.log("Db connection Failed");
      console.log(err);
      process.exit(1);
    });
};
