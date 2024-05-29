const express = require("express");
const Users = require("../models/user.model.js");

const pingUsers = (req, res) => {
  res.status(200).json({ message: "Ping!" });
};
const getUsers = async (req, res) => {
  try {
    const users = await Users.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await Users.findById(id);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const users = await Users.create(req.body);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findByIdAndDelete(id);

    res.status(200).json({ message: "Users deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  pingUsers,
  loginUser,
};
