const passport = require('passport')
const router = require('express').Router()
require('./users/facebookLogin')

router.get('/failed',(req,res)=>res.send('Failed'))
router.get('/success',(req,res)=>res.send('Successfully Login'))

router.get('/auth/facebook',
  passport.authenticate('facebook'));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/failure' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/success');
  });

module.exports=router