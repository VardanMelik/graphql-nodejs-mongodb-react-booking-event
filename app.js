const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

// MiddleWare Function
app.get('/', (req, res, next) => {
    res.send('Hello ')
})

app.listen(3000, () => {
    console.log('Server is running')
})