const express = require("express");
const router = express.Router();

const productsRoutes = require("./products");

router.use("/exam_01_mcga/products", productsRoutes);

module.exports = router;