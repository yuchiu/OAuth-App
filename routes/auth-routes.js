const router = require('express').Router()
const passport = require('passport')

//auth login
router.get('/login', (req, res, err) => {
    res.send('login')
})

//lgout
router.get('/logout', (req, res, err) => {
    //handle with passport
    res.send('logout')
})

//auth with google
router.get('/google', passport.authenticate('google'))

module.exports = router