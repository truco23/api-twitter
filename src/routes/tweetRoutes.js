const twitterController = require('../controllers/twitterController');

module.exports = function(app) {

    // var twitterController = app.controllers.twitterController;

    app.get('/', (req, res) => {
        res.send('Bem-vindo a nossa aplicação do Twiiter')
    });

    app
        .route('/tweets')
        .get(twitterController.list);

    app
        .route('/tweets/:id')
        .get(twitterController.search)
        .delete(twitterController.remove);

    app
        .route('/tweet/add')
        .post(twitterController.new);

};
