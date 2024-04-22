const express = require("express");
const Product = require("../models/user.model.js");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  pingProducts,

} = require("../controllers/user.controller.js");

router.get("/", getProducts);

router.get("/:id", getProduct);

router.post("/createProduct", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

router.get("/api/ping", pingProducts);

module.exports = router;
