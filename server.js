const http = require('http');
const express = require('express');
const bodyParsed = require('body-parser');
const app = require("./app");
const port = process.env.PORT || 8080;
const server = http.createServer(app);

app.use(express.static('assets')); 
app.set('views','./views');
app.set('view engine', 'jade');
app.use(bodyParsed.urlencoded({
    extended:true
}));

server.listen(port, function(){
    console.log('Chat server running');
});