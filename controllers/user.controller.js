const getUsers = require("./API functions/getUsers.js");
const getUser = require("./API functions/getUser.js");
const createUser = require("./API functions/createUser.js");
const updateUser = require("./API functions/updateUser.js");
const deleteUser = require("./API functions/deleteUser.js");
const pingUsers = require("./API functions/pingUsers.js");
const loginUser = require("./API functions/loginUser.js");

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  pingUsers,
  loginUser,
};
