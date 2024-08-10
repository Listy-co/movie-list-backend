const router = require("express").Router()
const moviesRoute = require("./movieroutes")

router.use('/movies', moviesRoute)

module.exports = router
