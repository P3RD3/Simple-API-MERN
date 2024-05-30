const express = require("express");
const Users = require("../../models/user.model.js");

const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await Users.findByIdAndDelete(id);
  
      res.status(200).json({ message: "Users deleted successfully!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  module.exports = deleteUser;