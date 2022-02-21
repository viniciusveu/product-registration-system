const router = require('express').Router();

const productsController = require('../controllers/products');

router.get('/home', productsController.getAllProducts);
router.post('/save', productsController.postAProduct);
router.post('/update/:id', productsController.updateProduct);
router.get('/delete/:id', productsController.deleteProduct);

module.exports = router;