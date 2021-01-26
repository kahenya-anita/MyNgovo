const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((value) => {
    console.log("connectedd...");
  })
  .catch((err) => {
    console.log("error %%%%%%%%%%%%%%%%%%%%");
  });
