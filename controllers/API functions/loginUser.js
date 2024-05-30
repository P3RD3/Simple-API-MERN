const express = require("express");
const Users = require("../../models/user.model.js");

const loginUser = async (req, res) => {
    try {
      const providedUsername = req.body.username;
      const providedPassword = req.body.password;
  
      if (!providedPassword || !providedUsername) {
        return res.status(400).json({ message: "Username/Password cannot be empty" });
      }
  
      const user = await Users.findOne({ username: `${providedUsername}` });
      if (!user) {
        return res.status(404).json({ message: "No such user found" });
      }
  
      if (providedPassword === user.password) {
        return res.status(200).json({ message: "User logged-in" });
      } else {
        return res.status(401).json({ message: "Invalid password" });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = loginUser;