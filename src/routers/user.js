const express = require("express");
const User = require("../models/user");

const router = new express.Router();

router.post("/create-user", async (req, res) => {
  const user = new User({
    ...req.body,
  });

  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send();
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send("");
  }
});

module.exports = router;
