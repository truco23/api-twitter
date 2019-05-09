const likeController = require('../controllers/likeController');

module.exports = function(app) {

    app
        .route('/like/:id')
        .post(likeController.liker)
}