const express = require("express");
require("./db/mongoose");
const cors = require("cors");

const userRouter = require("./routers/user");

const app = express();
app.use(express.json());

app.use(cors());

const port = process.env.PORT || 5000;

//register routers
app.use(userRouter);
app.get("/novak", (req, res) => {
  console.log("******");
  res.send("Hi");
});

const User = require("./models/user");

app.listen(port, () => {
  console.log("server is up on port" + port);
});
