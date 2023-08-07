const router = require('express').Router();
const products = require('../controllers/products');
const verifyToken = require('../middleware/verifyToken');

router.get("/", products.getStatus);
router.get("/id/:productId", products.getProductById);
router.get("/all", products.getAll);

router.use(verifyToken);

router.post("/", products.create);
router.delete("/:id", products.remove);
router.put("/:id", products.update);

module.exports = router;