const Users = require("../../models/user.model.js");

const createUser = async (req, res) => {
    try {
      const users = await Users.create(req.body);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  module.exports = createUser;
