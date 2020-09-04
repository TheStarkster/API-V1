const router = require('express').Router()
const Requesthandlers = require('../../../functions/users/index')

router.get('/', (req,res)=>Requesthandlers.handleGet(req,res))
router.post('/signup', (req,res)=>Requesthandlers.handlePost(req,res))
router.delete('/profile/:userId',(req,res)=>Requesthandlers.handleDelete(req,res))
router.put('/profile/:type/:userId',(req,res)=>Requesthandlers.handleUpdate(req,res))
module.exports = router