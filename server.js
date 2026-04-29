const cors = require('cors')
const express = require('express');
const productsRouter = require('./products');
const aboutRouter = require('./about');
const app = express();


//Middle ware declaration
app.use(cors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500']
}))

app.use(express.json());

app.use('/products', productsRouter)
app.use('/about', aboutRouter);

app.get('/', (req, res) => {
    res.send('Hello from express')
})

app.get('/api/courses', (req, res) => {
    
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
});


app.get('/message', (req, res) => {
    res.json({message: "This is a Json message"})
})


app.post('/message', (req, res) => {
    const { name, message} = req.body

    console.log('New Message: ', name, message);

    res.json({message: `Hi ${name}, ${message}`})
})
app.listen(3000, () => {
    console.log('The server is running')
})