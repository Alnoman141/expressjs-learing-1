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

/**
 * explore request object in express4 doc end
 */

/**
 * explore response object in express4 doc start
 */

// properties
// req.app will return the main app instance\

// res.headersSent will return true or false depends on header sent or not
// app.get('/', (req, res) => {
//     console.log(res.headersSent) // it will log false because header is not sent yet
//     res.send('hello world');
//     console.log(res.headersSent) // it will log true because header was already sent
// })

// res.locals will set local variables in our application. we can use those variables in view or template part

// app.set('view engine', 'ejs');
// app.get('/about', (req, res) => {
//     res.render('pages/about', {
//         name: 'Bangladesh'
//     })
// })


// methods
// resizeBy.cookie() by this method we can set cookie
// app.get('/', (req, res) => {
//     res.cookie('name', 'Noman')
//     res.end()
// })

// res.clearCookie() by this method we can clear our previously set cookies
// app.get('/', (req, res) => {
//     res.clearCookie('name')
//     res.end()
// })

// res.end() by this method we can end our response
// app.get('/', (req, res) => {
//     res.end()
// })


// res.send() by this method we can end our responsw with data.
// app.get('/', (req, res) => {
//     res.send('hellow world')
// })

// res.json() by this method we can send response as a json object
// app.get('/', (req, res) => {
//     res.json({
//         name: 'bangladesh'
//     })
// })

// res.status() by this method we can send status without end the response
// app.get('/', (req, res) => {
//     res.status(200)
//     res.end()
// })


// res.sendStatus by this method we can send response and a status code and end the response
// app.get('/', (req, res) => {
//     res.sendStatus(404)
// })


// res.render will render our view or templete for frontend
// app.set('view engine', 'ejs');
// app.get('/about', (req, res) => {
//     res.render('pages/about')
// })

// res.format() will format response by the request header (req.accepts())
// app.set('view engine', 'ejs');
// app.get('/about', (req, res) => {
//     res.format({
//         'text/plain' : () => {
//             res.send('Hello')
//         },
//         'text/html': () => {
//             res.render('pages/about', {
//                 name: 'Noman'
//             })
//         },
//         'application/json': () => {
//             res.json({
//                 name: 'Noman'
//             })
//         },
//         default: () => {
//             res.sendStatus(406)
//         }
//     })
// })

// res.location() will set a header named location in the response
// app.get('/', (req, res) => {
//     res.location('/about');
//     res.send('hello world');
// })

// res.redirect() will redirect where we want
// app.get('/', (req, res) => {
//     res.redirect('/contact')
// })

// app.get('/contact', (req, res) => {
//     res.send('hello fron contact page')
// })

// res.set() by this method we can set http header when response will send
// app.get('/', (req, res) => {
//     res.set('name', 'noman14')
//     res.send('hello world')
// })

// res.get() by this method we can get http header like res.header('content-type')
// app.get('/', (req, res) => {
//     res.set('name', 'noman1416')
//     res.send(res.get('name'));
// })

/**
 * explore response object in express4 doc end
 */

 /**
 * explore middleware concept in express 4 start
 */

//  simple application lebel middleware example

// const myMiddleware = (req, res, next) => {
//     console.log('You are passed by myMiddleware')
//     next()
// }

// const demoMiddleware = (req, res, next) => {
//     console.log('you are passed my demo middleware!')
//     next();
// }

// app.use(myMiddleware);
// app.use(demoMiddleware);

// const logger = (req, res, next) => {
//     console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.protocol} - ${req.originalUrl} - ${req.ip}` )
//     // next('hello') // it means it's an error
//     next() // it means it's successful
// }

// app.use(logger);

// app.get('/about', (req, res) => {
//     res.send('I am in homepage')
// })

// router lebel middleware

// const adminRoutes = express.Router();
// app.use('/admin', adminRoutes);

// const adminMiddleware  = (req, res, next) => {
//     console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.protocol} - ${req.originalUrl} - ${req.ip}` )
//     next()
// }

// adminRoutes.use(adminMiddleware);

// adminRoutes.get('/', (req, res) => {
//     res.send('Welcome to admin dashboard!')
// })

// app.get('/', (req, res) => {
//     res.send('I am in homepage')
// })

// third party middleware

// const cookieParser = require('cookie-parser');

// app.use(cookieParser()) // cookie-parser is a third pary liabrary that works as a middleware. So we called it a third party middleware


// built-in middleware
// app.use(express.json()) // express.json() is works as a built-in middleware

// error handleing middleware

// const appMiddleware = (req, res, next) => {
//     console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.protocol} - ${req.originalUrl} - ${req.ip}` )
//     throw new Error('This is an error!')
// }

// app.use(appMiddleware);

// const errorMiddleware = (err, req, res, next) => {
//     res.status(500).send(err.message)
// }

// app.use(errorMiddleware);

// app.get('/', (req, res) => {
//     res.send('I am in homepage!')
// })


// configureable middleware

// const configureableMiddleware = (options) => {
//     return (req, res, next) => {
//         if(options.log){
//             console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.protocol} - ${req.originalUrl} - ${req.ip}` )
//             next()
//         } else {
//             throw new Error('this is a server side error. Log failed!')
//         }
//     }
// }

// const errorMiddleware = (err, req, res, next) => {
//     res.status(500).send(err.message)
// }

// app.use(configureableMiddleware({ log: true }))
// app.use(errorMiddleware)

// app.get('/', (req, res) => {
//     res.send('I am in homepage!')
// })

 /**
 * explore middleware concept in express 4 end
 */


/**
 * explore router concept in express 4 start
 */

// const adminRoute = require('./routes/adminRoutes');
// const publicRoutes = require('./routes/publicRoutes');

// app.use('/admin',adminRoute)
// app.use('/',publicRoutes)

/**
 * explore router concept in express 4 end
 */


/**
 * explore error handling concept in express 4 start
 */

// Error handling for synchronous codes

// by default express synchronous codes error. but we can change those types of error
// app.get('/', (req, res, next) => {
//     // throw new Error('This is an error!')
//     // res.send(a)
//     // for stream & buffer data
//     for(let i = 0; i <= 10; i++){
//         if(i > 5){
//             next('Some error happence!')
//         } else {
//             res.write('a')
//         }
//     }
//     res.end()
// })

// // handle 404 page not found error
// app.use((req, res, next) => {
//     // res.status(404).send('Page not found!')
//     next({message: 'Requested route not found!'})
// })

// // handle error
// app.use((err, req, res, next) => {
//     if(res.headersSent){
//         next('Error')
//     } else {
//         if(err.message){
//             res.status(500).send(err.message)
//         } else {
//             res.status(500).send('This is an error!')
//         }
//     }
// })

// Error handling for asynchronous codes

const fs = require('fs')

// app.get('/', (req, res, next) => {
//     fs.readFile('./public/hello.txt', (err, data) => {
//         if(err) {
//             next(err.message)
//         } else {
//             res.send(data)
//         }
//     })
// })

// app.get('/', (req, res, next) => {
//     setTimeout(() => {
//         try {
//             console.log(a)
//         } catch (err) { 
//             next(err)
//         }
//     }, 100)
// })

// asynchronous codes error handling in synchronous way
app.get('/', [
    (req, res) => {
        fs.readFile('./hello.html', (err, data) => {
            console.log(data)
            next(err)
        })
    },
    (req, res, next) => {
        console.log(data.property)
    }
])

app.use((err, req, res, next) => {
    if(res.headersSent){
        next('Error')
    } else {
        if(err.message){
            res.status(500).send(err.message)
        } else {
            res.status(500).send('This is an error!')
        }
    }
})

app.listen(3000, () => {
    console.log('app is listening on port 3000')

})