const express = require('express')

const path = require('path')  // connect filename and directories

 

const indexRoutes = require('./routes/index')

 

const app = express() // Create our server! 

 

// configure app to use Handlebars to create HTML pages 

app.set('view engine', 'hbs')

app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'));
 

app.use('/', indexRoutes)  // all requests handled by code in indexRoutes 

 

const server = app.listen(process.env.PORT || 3000, () => {

    console.log('Server running on port', server.address().port)

})