const router = require('express').Router();

const productController = require('../controllers/product');

router.get('/health', (req, res) => {
    res.send('Health Checked!');
});
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProduct);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;