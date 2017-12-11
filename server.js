var express = require('express');
var app = express();
var port = process.env.PORT||8080;
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var routers = require('./app/routes/API')(router);
var path = require('path');

app.use(morgan('dev'));//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(__dirname + '/public'));
app.use('/API',routers);

mongoose.connect('mongodb://localhost:27017/ieee');//database connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log("success");
});


app.get('*',function(req,res){
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
})

app.listen(port,function(){
    console.log("Running on port "+ port);
});//port connection