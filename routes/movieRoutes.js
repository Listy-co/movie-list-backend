const router = require('express').Router();
const { moviesCtrl } = require('../controllers')

router.get('/', moviesCtrl.getMovies)
router.post('/', moviesCtrl.createMovies)
router.put('/:id', moviesCtrl.updateMovie)
router.delete('/:id', moviesCtrl.deleteMovie)

module.exports = router;
