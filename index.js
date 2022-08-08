const express   = require('express');
const passport = require('passport');
const { googleClientSecret } = require('./config/key');
const app = express()
const port = 3000
const GoogleStrategy = require('passport-google-oauth20').Strategy
const key =require('./config/key');

passport.use(
  new GoogleStrategy({
  clientID: key.googleClientID,
  ClientSecret: key.googleClientSecret, 
  callbackURL: '/auth/google/callback',
  }, (accesstoken) =>{
    console.log(accesstoken);
  })

);
app.get(
  '/auth/google',
passport.authenticate('google',{
  scope: ['profile','email']
 })
);

  //ClientID 1099486538368-k1ikogouos2e612vh6g5v5akh1dhtuph.apps.googleusercontent.com
//ClientSecret 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

const PORT =process.env.PORT || 5001;
app.listen(PORT, () => {

})





