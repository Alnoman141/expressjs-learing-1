const express = require('express');

const publicRoutes = express.Router();

// const logger = (req, res, next) => {
//     console.log('I am logging something!')
//     next()
// }

// publicRoutes.all('*', logger);

// publicRoutes.get('/', (req, res) => {
//     res.send('I am in homepage!')
// })

// publicRoutes.get('/about', (req, res) => {
//     res.send('I am in aboutpage!')
// })

publicRoutes.route('/user')
    .all((req, res, next) => {
        console.log('I am logging')
        next()
    })
    .get((req, res) => {
        res.send('Get')
    })
    .post((req, res) => {
        res.send('post')
    })
    .put((req, res) => {
        res.send('put')
    })
    .delete((req, res) => {
        res.send('delete')
    })

module.exports = publicRoutes;