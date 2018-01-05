const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./keys')
const User = require('../models/User')

passport.use(
    new GoogleStrategy({
        //options for google strategy
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        //passport callback function

        //check if user exist
        User.findOne({
            googleId: profile.id
        }).then((currentUser) => {
            if (currentUser) {
                //the user is already registered
                console.log('user already register, user is: ' + currentUser)
            } else {
                //create user in our db
                new User({
                    username: profile.displayName,
                    googleId: profile.id
                }).save().then((newUser) => {
                    console.log('new user created: ' + newUser)
                })
            }
        })
    })
)