const router= require("express").Router()

//user handlers...
router.use('/user', require('./users/profile'))
<<<<<<< HEAD
router.use('/user',require('./path-oAuth'))
router.use('/user',require('./path-fb'))
=======
>>>>>>> 4110ed2b8e3a6cb6bc0ac09ba99712dabd0807ff

module.exports = router