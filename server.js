// Read env variables
require('dotenv').config();
// Webpack for compress files > optimization
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
// Express for http request API
var express = require('express')
// Http will use express to create a server
var http = require('http');
// Open url in browser
const opn = require('opn');
// create the app
var app = new (express)()

// Compile client files
var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

// Deliver static folder for static files like pictures
app.use(express.static('webapp/static'));


// All request go to index
app.get("*", function(req, res) {
  res.sendFile(__dirname + '/webapp/main/index.html')
})

// Create the HTTP server
var httpServer = http.createServer(app);
var port = process.env.PORT || 8081;
httpServer.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎 [HTTP] Open up http://localhost:"+port+"/ in your browser.");
    opn("http://localhost:"+port+"/");
  }
});
