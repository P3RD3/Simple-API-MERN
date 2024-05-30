const Users = require("../../models/user.model.js");

const getUsers = async (req, res) => {
    try {
      const users = await Users.find({});
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  module.exports = getUsers;