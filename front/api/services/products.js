const axios = require('axios');

class ProductsService {
    async getAllProducts() {
        return await axios.get('http://localhost:9999/api/products')
            .then(response => response.data)
            .catch(error => {
                console.log(error);
                return error;
            });
    }

    async postAProduct(product) {
        return await axios.post('http://localhost:9999/api/products', product)
            .then(response => response.data)
            .catch(error => {
                console.log(error);
                return error;
            });
    }

    async updateProduct(id, product) {
        return await axios.put(`http://localhost:9999/api/products/${id}`, product)
            .then(response => response.data)
            .catch(error => {
                console.log(error);
                return error;
            });
    }

    async deleteProduct(id) {
        return await axios.delete('http://localhost:9999/api/products/' + id)
            .then(response => response.data)
            .catch(error => {
                console.log(error);
                return error;
            });
    }

}

module.exports = new ProductsService();