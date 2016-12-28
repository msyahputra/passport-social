# passport-social
Expres-passport-social


Facebook

The Facebook strategy allows users to log in to a web application using their Facebook account. Internally, Facebook authentication works using OAuth 2.0.

Support for Facebook is implemented by the passport-facebook module.

Install

$ npm install passport-facebook
Configuration

In order to use Facebook authentication, you must first create an app at Facebook Developers. When created, an app is assigned an App ID and App Secret. Your application must also implement a redirect URL, to which Facebook will redirect users after they have approved access for your application.

var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://www.example.com/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate(..., function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));
The verify callback for Facebook authentication accepts accessToken, refreshToken, and profile arguments. profile will contain user profile information provided by Facebook; refer to User Profile for additional information.

Note: For security reasons, the redirection URL must reside on the same host that is registered with Facebook.

Routes

Two routes are required for Facebook authentication. The first route redirects the user to Facebook. The second route is the URL to which Facebook will redirect the user after they have logged in.

// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
app.get('/auth/facebook', passport.authenticate('facebook'));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/login' }));
Note that the URL of the callback route matches that of the callbackURL option specified when configuring the strategy.

Permissions

If your application needs extended permissions, they can be requested by setting the scope option.

app.get('/auth/facebook',
  passport.authenticate('facebook', { scope: 'read_stream' })
);
Multiple permissions can be specified as an array.

app.get('/auth/facebook',
  passport.authenticate('facebook', { scope: ['read_stream', 'publish_actions'] })
);
Link

A link or button can be placed on a web page, allowing one-click login with Facebook.

<a href="/auth/facebook">Login with Facebook</a> .

Google

The Google strategy allows users to sign in to a web application using their Google account. Google used to support OpenID internally, but it now works based on OpenID Connect and supports oAuth 1.0 and oAuth 2.0.

Support for Google is implemented by the passport-google-oauth module.

Install

$ npm install passport-google-oauth
Configuration

The Client Id and Client Secret needed to authenticate with Google can be set up from the Google Developers Console. You may also need to enable Google+ API in the developer console, otherwise user profile data may not be fetched. Google supports authentication with both oAuth 1.0 and oAuth 2.0.
oAuth 2.0

The Google OAuth 2.0 authentication strategy authenticates users using a Google account and OAuth 2.0 tokens. The strategy requires a verify callback, which accepts these credentials and calls done providing a user, as well as options specifying a client ID, client secret, and callback URL.

Configuration

var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
       User.findOrCreate({ googleId: profile.id }, function (err, user) {
         return done(err, user);
       });
  }
));
Routes

Use passport.authenticate(), specifying the 'google' strategy, to authenticate requests. Authentication with Google requires an extra scope parameter. For information, go here.

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });
Link

A link or button can be placed on a web page, allowing one-click sign in with Google.

<a href="/auth/google">Sign In with Google</a> .


Twitter

The Twitter strategy allows users to sign in to a web application using their Twitter account. Internally, Twitter authentication works using OAuth 1.0a.

Support for Twitter is implemented by the passport-twitter module.

Install

$ npm install passport-twitter
Configuration

In order to use Twitter authentication, you must first create an application at Twitter Developers. When created, an application is assigned a consumer key and consumer secret. Your application must also implement a callback URL, to which Twitter will redirect users after they have approved access for your application.

var passport = require('passport')
  , TwitterStrategy = require('passport-twitter').Strategy;

passport.use(new TwitterStrategy({
    consumerKey: TWITTER_CONSUMER_KEY,
    consumerSecret: TWITTER_CONSUMER_SECRET,
    callbackURL: "http://www.example.com/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, done) {
    User.findOrCreate(..., function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));
The verify callback for Twitter authentication accepts token, tokenSecret, and profile arguments. profile will contain user profile information provided by Twitter; refer to User Profile for additional information.

Routes

Two routes are required for Twitter authentication. The first route initiates an OAuth transaction and redirects the user to Twitter. The second route is the URL to which Twitter will redirect the user after they have signed in.

// Redirect the user to Twitter for authentication.  When complete, Twitter
// will redirect the user back to the application at
//   /auth/twitter/callback
app.get('/auth/twitter', passport.authenticate('twitter'));

// Twitter will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
app.get('/auth/twitter/callback',
  passport.authenticate('twitter', { successRedirect: '/',
                                     failureRedirect: '/login' }));
Note that the URL of the callback route matches that of the callbackURL option specified when configuring the strategy.

Link

A link or button can be placed on a web page, allowing one-click sign in with Twitter.

<a href="/auth/twitter">Sign in with Twitter</a>

Thanks !!!
