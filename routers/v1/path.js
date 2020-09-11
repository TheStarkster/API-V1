const router= require("express").Router()

//user handlers...
router.use('/user', require('./users/profile'))
router.use('/user',require('./path-oAuth'))
router.use('/user',require('./path-fb'))

module.exports = router