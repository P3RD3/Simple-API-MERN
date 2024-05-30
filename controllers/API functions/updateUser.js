const Users = require("../../models/user.model.js");

const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const users = await Users.findByIdAndUpdate(id, req.body);
  
      if (!users) {
        return res.status(404).json({ nessage: "Users not found" });
      }
  
      const updateUser = await Users.findById(id);
      res.status(200).json(updateUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  module.exports = updateUser;