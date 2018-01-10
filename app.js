const express = require('express')
const authRoutes = require('./routes/auth-routes')
const passportSetup = require('./config/passport-setup')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const cookieSession = require('cookie-session')
const passport = require('passport')


//connect to mongoDB
mongoose.connect(keys.mongodb.dbURI, function (err, res) {
    if (err) {
        console.log('DB Connection failed:' + err)
    } else {
        console.log('DB Connection Success')
    }
})


const app = express()

//set up view engine
app.set('view engine', 'ejs')

//initialize cookie
app.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys: [keys.session.cookieKey]
}))

//initialize passport
app.use(passport.initialize())
app.use(passport.session())

//create route
app.get('/', (req, res) => {
    res.render('home')
})

//set up routes
app.use('/auth', authRoutes)

app.listen(5000, () => {
    console.log('app now listening for request on port 5000')
})