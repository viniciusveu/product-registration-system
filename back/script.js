const axios = require('axios');

const products = [
    {
        name: 'Banana',
        brand: 'DaFazenda',
        description: "Banana nanica",
        price: '8,00',
    },
    {
        name: 'Maça',
        brand: 'DaFazenda',
        description: "Maça nanica",
        price: '10,00',
    },
    {
        name: 'Laranja',
        brand: 'DaFazenda',
        description: "Laranja nanica",
        price: '12,00',
    },
    {
        name: 'Abacaxi',
        brand: 'DaFazenda',
        price: '15,00',
    },
    {
        name: 'Uva',
        brand: 'DaFazenda',
        description: "Uva nanica",
        price: '20,00',
    },
    {
        name: 'Melancia',
        brand: 'DaFazenda',
        description: "Melancia nanica",
        price: '25,00',
    },
    {
        name: 'Pêra',
        brand: 'DaFazenda',
        description: "Pêra nanica",
        price: '30,00',
    },
    {
        name: 'Acerola',
        brand: 'DaFazenda',
        description: "Acerola nanica",
        price: '35,00',
    },
];

(products => {
    products.forEach(async product => {
        await axios.post('http://localhost:9999/api/products', product)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    });
})(products);