const passport = require('passport')
const router = require('express').Router()
require('./users/googleAuth')

router.get('/failed',(req,res)=>res.send('Failed'))
router.get('/success',(req,res)=>res.send('Successfully Login'))

router.get('/auth/google', passport.authenticate('google', { scope: ['profile , email'] }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/failed' }),
  (req, res) =>{
    // Successful authentication, redirect home.
    res.redirect('/success');
  });

  module.exports=router