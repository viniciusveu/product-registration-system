const productsService = require('../services/products');

class ProductsController {
    async getAllProducts(req, res) {
        const products = await productsService.getAllProducts();
        res.render('index', { products });
    }

    async postAProduct(req, res) {
        const product = {
            name: req.body.name,
            brand: req.body.brand,
            description: req.body.description,
            price: req.body.price,
        }
        const newProduct = await productsService.postAProduct(product);
        console.log(newProduct);
        res.redirect('/home');
    }

    async updateProduct(req, res) {
        const id = req.params.id;
        const product = {
            name: req.body.name,
            brand: req.body.brand,
            description: req.body.description,
            price: req.body.price,
        }
        const updatedProduct = await productsService.updateProduct(id, product);
        console.log(updatedProduct);
        res.redirect('/home');
    }

    async deleteProduct(req, res) {
        const productDeleted = await productsService.deleteProduct(req.params.id);
        res.redirect('/home');
    }
}

module.exports = new ProductsController();