const express = require('express');

const app = express();
/**
 * explore express section in express4 doc start
 */

// express.json() parse body content as json. It takes content-type: application/json
// app.use(express.json())

// express.raw() and content-type: application/octet-stream will return buffer. We need to make it string for use.
// app.use(express.raw())

// express.text() and content-type: text/plain will return normal text.
// app.use(express.text())

// express.urlencoded() and application/x-www-form-urlencoded will return javascript object. We mostly use for send data from html form.
// app.use(express.urlencoded())


// express.static()- by this method we can define our static forder name for load static content like image, video or text file.
// app.use(express.static(__dirname + '/public'))
// we also can define custom index file by passing value in the second parameter
// app.use(express.static(__dirname+'/public/', {
//     index: 'about.html'
// }))

// by express.router we can make router instance for our applicaion. we also can create many router instance by express.router() like admin router, public router etc
// const router = express.Router();

// by default express.Router() is caseInSensitive. we can make it caseSensitive by passing options
// const router = express.Router({
//     caseSensitive: true,
// })

// app.use(router);

/**
 * explore express section in express4 doc end
 */



router.get('/', (req, res) => {
    res.send('this is home page via get method')
})

router.post('/', (req, res) => {
    res.send(req.body)
})

app.listen(3000, () => {
    console.log('app is listening on port 3000')

})