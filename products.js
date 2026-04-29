const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.json([
        {id:1, name: 'Laptop', price: 1299},
        {id:2, name: 'Mouse', price: 50},
    ])
}) 

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    const products = [
        {id:1, name: 'Laptop', price: 1299},
        {id:2, name: 'Mouse', price: 50},
    ]

    const requestedProduct = products.find((p) => p.id === id) 
    res.json(requestedProduct);
})