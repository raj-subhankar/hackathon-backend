//Dependencies
var express   = require('express')
var mongoose    = require('mongoose');
var logger    = require('morgan')
var bodyParser  = require('body-parser');

var app = express()

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(logger('dev'))

app.use('/static', express.static(__dirname+ '/public'));

//MongoDB
mongoose.connect('mongodb://localhost/hackathon-test');

//Routes
app.use('/', require('./routes/index'));

app.listen(3000)
