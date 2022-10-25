const express = require("express");
const adminRoute = express.Router();

adminRoute.get("/", (req, res) => {
  res.send("Welcome to admin dashboard!");
});

adminRoute.get("/login", (req, res) => {
  res.send("Welcome to admin login!");
});

// adminRoute.param('user', (req, res, next, id) => {
//     console.log('I am called once')
//     res.user = id === '1' ? 'Admin' : 'Anonymous'
//     next()
// })

// adminRoute.get('/:user', (req, res, next) => {
//     console.log('I am also matched')
//     next()
// })

adminRoute.param((param,option) => (req, res, next, val) => {
    if(option === val){
        next()
    } else {
        res.status(403).send('unauthenticated')
    }
})

adminRoute.param('user', '1416')

adminRoute.get("/:user", (req, res) => {
    res.send(`Welcome Admin!`);
  });

module.exports = adminRoute;
