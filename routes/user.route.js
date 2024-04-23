const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  pingUsers,
  loginUser,

} = require("../controllers/user.controller.js");

router.get("/users", getUsers);

router.get("/:id", getUser);

router.post("/createUser", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

router.get("/", pingUsers);

router.post("/login", loginUser);

module.exports = router;
