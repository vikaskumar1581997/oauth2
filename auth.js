const passport=require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// require('dotenv').config()


passport.use(new GoogleStrategy({
    clientID: '450325183388-bed0uvo1v3spetfp09l2i4mvi3b077nr.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    cb(null,profile)
  }
));

passport.serializeUser((user,cb)=>{
    cb(null,user)
})

passport.deserializeUser((user,cb)=>{
    cb(null,user)
})

