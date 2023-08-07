const router = require('express').Router();
const products = require('../controllers/products');
const verifyToken = require('../middleware/verifyToken');

router.get("/", products.getStatus);
router.get("/id/:productId", products.getProductById);
router.get("/all", products.getAll);

router.post("/", verifyToken, products.create);
router.delete("/:id", verifyToken, products.remove);
router.put("/:id", verifyToken, products.update);

module.exports = router;