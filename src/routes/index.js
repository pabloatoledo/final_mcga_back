const express = require("express");
const router = express.Router();

const productsRoutes = require("./products");

router.use("/final_mcga/products", productsRoutes);

module.exports = router;