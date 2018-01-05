const router = require('express').Router()
const passport = require('passport')

//auth login
router.get('/login', (req, res) => {
    res.render('login')
})

//lgout
router.get('/logout', (req, res) => {
    //handle with passport
    res.send('logout')
})

//auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}))
//callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    //handle with passport
    res.send({
        confirmation: "success",
        message: "you reached the call back uri"
    })
})

module.exports = router