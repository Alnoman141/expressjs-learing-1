const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('this is home page via get method')
})

app.post('/', (req, res) => {
    res.send('this is home page via post method')
})

app.listen(3000, () => {
    console.log('app is listening on port 3000')
})