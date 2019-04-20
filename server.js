const express = require('express')
const server = express()
const port = 3003
const GroceryItems = [
    {
        name : "tamaoes",
        quantity : 1,
        amount :  20
    },
    {
        name : "potatoes",
        quantity : 2,
        amount :  40
    },
    {
        name : "potatoes",
        quantity : 1,
        amount :  50
    },
    {
        name : "Brockle",
        quantity : 1,
        amount :  80
    },
    {
        name : "Corn Flackes",
        quantity : 2,
        amount :  40
    }
]

server.get('/', (req, res) => res.send('Hello World!'))

server.get('/api/itemList', (req, res) => res.send(GroceryItems))

server.listen(port, () => console.log(`Example app listening on port ${port}!`))