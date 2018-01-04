const router = require('express').Router()

//auth login
router.get('/login', (req, res, err) => {
    res.send('login')
})

//auth with google
router.get('/google', (req, res, err) => {
    res.send('google')
})

//lgout
router.get('/logout', (req, res, err) => {
    res.send('logout')
})

module.exports = router