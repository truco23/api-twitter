const http = require('http');
const app = require('./config/expressConfig');
// const cors = require('cors');

// const server = require('http').Server(app);
// const io = require('socket.io')(server);

// app.use((req, res, next) => {
//     req.io = io;
//     return next();
// });
// app.use(cors());

require('./config/mongooseConfig')('localhost/treinamento-twitter');

http
    .createServer(app)
    .listen(3001, () => {
        console.log('Servidor rodando na porta 3001');
})

//     server
//         .listen(3001, () => {
//             console.log('Servidor rodando na porta 3001');
// })

//aula10

//https://rocketseat.com.br/week-5/aulas#day-05
