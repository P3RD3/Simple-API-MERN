const Users = require("../../models/user.model.js");


const getUser = async (req, res) => {
    try {
      const { id } = req.params;
      const users = await Users.findById(id);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  module.exports = getUser;
