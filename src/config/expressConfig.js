const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use((req, res, next) => {
    req.io = io;
    return next();
});
app.use(cors());
app.use(express.static('./pasta a ser compartilhada'));
// app.use(function(req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	next();
// });
app.use(bodyParser.json());

consign({ cwd: 'src' })
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app)

module.exports = app;