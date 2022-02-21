const productService = require('../services/product');

class ProductController {

    async getAllProducts(req, res) {
        const products = await productService.getAllProducts();
        if (products) res.status(200).json(products);
        else res.status(500).json({ message: 'Failed to get all products' });
    }

    async getProduct(req, res) {
        const product = await productService.getProduct(req.params.id);
        if (product) res.status(200).json(product);
        else res.status(500).json({ message: 'Failed to get product' });
    }

    async createProduct(req, res) {
        const product = {
            name: req.body.name,
            brand: req.body.brand,
            description: req.body.description,
            price: req.body.price,
        }; 
        const productCreated = await productService.createProduct(product);
        if (productCreated) res.status(201).json(productCreated);
        else res.status(500).json({ message: 'Failed to create product' });
    }

    async updateProduct(req, res) {
        const product = {
            name: req.body.name,
            brand: req.body.brand,
            description: req.body.description,
            price: req.body.price,
        };
        const productUpdated = await productService.updateProduct(req.params.id, product);
        if (productUpdated) res.status(200).json(productUpdated);
        else res.status(500).json({ message: 'Failed to update product' });
    }

    async deleteProduct(req, res) {
        const productDeleted = await productService.deleteProduct(req.params.id);
        if (productDeleted) res.status(200).json(productDeleted);
        else res.status(500).json({ message: 'Failed to delete product' });
    }

}

module.exports = new ProductController();