module.exports = function(end) {

    var mongoose = require('mongoose');

    mongoose.connect('mongodb://' + end, { useNewUrlParser: true });

    mongoose.connection.on('connected', function(){

        console.log('Conectado ao Mongo');
    });

    mongoose.connection.on('error', function(erro) {
    
        console.log('Erro na conecção ' + erro);
    });

    mongoose.connection.on('disconnected', function(){

        console.log('Desconectado do Mongo');
    });

    process.on('SIGINT', function () {
        
        mongoose.connection.close(function () {
        
            console.log('Conexão finalizada pelo terminado da aplicação');
            process.exit(0);
        });
    });
};