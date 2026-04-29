const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.json(
        {message: "Hi this is a sample about value"}
    )
})