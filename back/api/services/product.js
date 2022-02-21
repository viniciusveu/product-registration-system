const Product = require('../models/Product');

class ProductService {
    async getAllProducts() {
        return await Product.find({})
            .then(products => products)
            .catch(err => {
                console.log(err);
            });
    }

    async createProduct(product) {
        const newProduct = new Product(product);
        return await newProduct.save()
            .then(product => product)
            .catch(err => {
                console.log(err);
                return err;
            });
    }

    async getProduct(id) {
        return await Product.findById(id)
            .then(product => product)
            .catch(err => {
                console.log(err);
                return err;
            });
    }

    async updateProduct(id, product) {
        return await Product.findByIdAndUpdate(id, product, { new: true })
            .then(product => product)
            .catch(err => {
                console.log(err);
                return err;
            });
    }

    async deleteProduct(id) {
        return await Product.findByIdAndDelete(id)
            .then(product => product)
            .catch(err => {
                console.log(err);
                return err;
            });
    }

}

module.exports = new ProductService();