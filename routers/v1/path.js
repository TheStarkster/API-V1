const router= require("express").Router()

//user handlers...
router.use('/user', require('./users/profile'))

module.exports = router