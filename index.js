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


/**
 * explore request object in express4 doc start
 */
// properties
// req.baseUrl
// req.baseUrl will return the path where our sub-app will mount

// app.get('/user', (req, res) => {
//     console.log(req.baseUrl) // it will log empty because we are in main route. here we hava no sub app
//     res.send('We are in user page')
// })

// const adminRoute = express.Router();
// app.use('/admin', adminRoute);

// adminRoute.get('/dashboard', (req, res) => {
//     console.log(req.baseUrl) // it will log /admin because our sub app mounted on /admin route
//     res.send('We are in admin page');
// })


// req.originalUrl
// req.originalUrl will return everythig except hostname and port
// if we request http://localhost:3000/user?name=noman then req.originalUrl will return /user?name=noman


// req.url
// req.url will also return like req.originalUrl but req.url will modify when we use sub app

// req.path
// req.path will return the path name
// let our request route is http://localhost:3000/user/3?name=noman. so req.path will return /user/3
// let we have sub app and sub app url is admin and route is http://localhost:3000/admin/dashboard so req.path will return /admin/dashboard


// req.hostname
// req.host name will return the hostname
// let say our request route is http://localhost:3000/user/3?name=noman. so req.hostname will return localhost

// req.ip
// req.ip will return the host ip
// let say our request route is http://localhost:3000/user/3?name=noman. so req.hostname will return 127.0.0.1

// req.method
// req.ip will return the request http verb like POST, GET, PUT etc

// req.protocol
// req.protocol will return the requests protocol like http or https

// req.params
// req.params will return our parameter as a object
// suppose our requested url is http://localhost:3000/user/3 and route is
// app.get('user/:id', (req, res) => {
//     console.log(req.params) // will return { id: '3' }
// })

// req.body
// req.body will return the things that will send with request by form or json.

// req.cookies
// our http client sometimes send some cookies with the request. req.cookies will return those cookies
// for parse cookie we need to install cookie-parser npm package and use it


// req.signedCookies
// if we use more secure cookies like cripto cookies then we will the the cookies by req.signedCookies

// req.secure
// if we request with http protocol req.secure will return false.
// if we request with https protocol req.secure will return true.

// req.app
// when we will work with module system in the module file sometimes we need the app Object by the req.app we can access the app object easyly

// req.route
// req.route will return hole the router instance  

// methods
// req.accept() method will return the client's accepted things only. if client accept 'application/json' the res.accept() will return application/json
// app.get('user', (req, res) => {
//     if(req.accepts('html')){
//         res.render(index)
//     } else if (req.accepts('json')){
//         res.send({name: 'bangladesh'})
//     } else {
//         console.log('hello world')
//     }
// })

// req.get() method will use for find any headers value
// suppose req.get('content-type')

app.listen(3000, () => {
    console.log('app is listening on port 3000')

})