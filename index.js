const express = require('express');

const app = express();
/**
 * explore express object in express 4 doc start
 */

// methods
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
 * explore express object in express 4 doc end
 */

/**
 * explore application object in express4 doc start
 */

// properties
// app.locals helps us to declar local variable in our application
// app.locals.title = 'My App'

// app.mountpath property contains one or more path patterns on which a sub-app was mounted.

// subapp
// const admin = express();
// app.use('/admin', admin);

// admin.get('/dashboard', (req, res) => {
//     console.log(app.mountpath) // will return /admin because our sub app admin was mounted on path /admin
//     console.log('welcome to admin dashboard');
// })


// event
// mount event is fired on a sub-app, when it is mounted on a parent app. The parent app is passed to the callback function
// const admin = express();
// app.use('/admin', admin);

// admin.on('mount', (parent) => {
//     console.log('Admin Mounted')
//     console.log(parent) // refers to the parent app
// })

// admin.get('/dashboard', (req, res) => {
//     console.log('Welcome to the admin page')
// })

// methods

// app.all()  except all HTTP verbs like post, get, put, delete etc.
// app.all('/hello', (req, res) => {
//     res.send('hello world');
// }) 

// app.delete() except only DELETE HTTP verb.
// app.delete('/delete-something', (req, res) => {
//     res.send('somethis was deleted successfully');
// })

// app.get except only GET HTTP verb.
// router.get('/', (req, res) => {
//     res.send('this is home page via get method')
// })

// app.post except only POST HTTP verb.
// router.post('/', (req, res) => {
//     res.send(req.body)
// })

// app.put except only PUT HTTP verb.
// router.put('/', (req, res) => {
//     res.send(req.body)
// })

// app.enable() & app.disable makes something enable or disable from app setting table
// app.enable('case sensitive routing'); // by default route path is case insenditive. by enabling case sensitive routing we make it case sensitive
// app.disable('case sensitive routing') // we can disbale previous enabled route case sansivity by app.disable();

// app.enabled() & app.disabled() will return true or false
// app.enabled('case sensitive routing') // if we enable route case sensitivity then it will return true
// app.disable('case sensitive routing') // if we enable route case sensitivity then it will return false

// app.set() will set our custom settings
// app.set('appName', 'Sample APP')

// app.get() will return our custom seted settings
// app.get('appName') // it will return 'Sample APP'

// app.listen() is used for start server on a port
// app.listen(3000, () => {
//     console.log('app is listening on port 3000')

// })

// app.method() will return our http varb which was used to send the request
// router.put('/', (req, res) => {
//      console.log(app.method()) // will return PUT
//     res.send(req.body)
// })

// app.params return route parameters as a javascript object
// if requsted route has any id parameter then it will call this function and call the callback function. by this web may do anything before the route call
// app.param('id', (req, res, next, id) => {
//     next(); // by the next() method my may go for the next step
// })
// app.get('user/:id', (req, res) => {
//     res.send('hello word');
// }) 

// app.path() will return the request path only
// const blog = express()
// const blogAdmin = express()
// app.use('/blog', blog)
// blog.use('/admin', blogAdmin)
// console.dir(app.path()) // ''
// console.dir(blog.path()) // '/blog'
// console.dir(blogAdmin.path()) // '/blog/admin'


// app.route() help route group
// app.route('about/mission')
//     .get('/', (req, res) => {
//         console.log('about mission page get')
//     })
//     .post('/', (req, res) => {
//         console.log('about mission page post')
//     })

// app.engine() will return view
// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//     res.render('index');
// })

/**
 * explore application object in express4 doc end
 */

app.listen(3000, () => {
    console.log('app is listening on port 3000')

})