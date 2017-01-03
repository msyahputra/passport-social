# Passport-social

<div class="markdown-body entry-content" itemprop="text"><p><a href="http://passportjs.org"><img
        src="https://camo.githubusercontent.com/662ee2f98b69b0894d0a1d9117a9c5fb4dfc40aa/687474703a2f2f63646e2e61757468302e636f6d2f696d672f70617373706f72742d62616e6e65722d6769746875622e706e67"
        alt="passport banner" data-canonical-src="http://cdn.auth0.com/img/passport-banner-github.png"
        style="max-width:100%;"></a></p>
        
        <p>This is the folder structure of the source code of the library passport.</p>
    <pre><code class="language-markup">
    --- bin
    ------ www   &lt;!-- here place port localhost --&gt;
    --- config
    ------ config.js  &lt;!-- will hold our database connection settings and all our client secret keys (facebook, google, twitter -&gt;
    ------ pass.js  &lt;!-- configuring the strategies for passport --&gt;
    --- models
    ------ users.js  &lt;!-- our user model --&gt;
    --- routes.js  
    ------ index.js  &lt;!-- this script used for see images , posts and pagesliked from facebook  --&gt;
    ------ social.js  &lt;!-- all the routes for our application --&gt;
     - views
    ------ index.ejs    &lt;!-- show our home page with login links --&gt;
    ------ albums.ejs    &lt;!-- show our album form (only needed for album) --&gt;
    ------ images.ejs   &lt;!-- show our Image form (only needed for Image) --&gt;
    ------ profile.ejs  &lt;!-- after a user logs in, they will see their profile --&gt;
     - package.json      &lt;!-- handle our npm packages --&gt;
     - app.js         &lt;!-- setup our application --&gt;
    </code>
    </pre>

    <h1><a id="user-content-passport" class="anchor" href="#passport" aria-hidden="true">
        <svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16">
            <path fill-rule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
        </svg>
    </a>Passport
    </h1>

    <p><a href="https://travis-ci.org/jaredhanson/passport"><img
            src="https://camo.githubusercontent.com/617e8dacc9d60ee36ed1e9fda455a6cbf2419f2c/68747470733a2f2f7472617669732d63692e6f72672f6a6172656468616e736f6e2f70617373706f72742e7376673f6272616e63683d6d6173746572"
            alt="Build" data-canonical-src="https://travis-ci.org/jaredhanson/passport.svg?branch=master"
            style="max-width:100%;"></a>
        <a href="https://coveralls.io/r/jaredhanson/passport"><img
                src="https://camo.githubusercontent.com/43ed2ac04bb493c7fc8b9c60eb543342767de0c0/68747470733a2f2f636f766572616c6c732e696f2f7265706f732f6a6172656468616e736f6e2f70617373706f72742f62616467652e7376673f6272616e63683d6d6173746572"
                alt="Coverage" data-canonical-src="https://coveralls.io/repos/jaredhanson/passport/badge.svg?branch=master"
                style="max-width:100%;"></a>
        <a href="https://codeclimate.com/github/jaredhanson/passport"><img
                src="https://camo.githubusercontent.com/74b85cdabac90f0f2ecc03ab450d93553d516b92/68747470733a2f2f636f6465636c696d6174652e636f6d2f6769746875622f6a6172656468616e736f6e2f70617373706f72742f6261646765732f6770612e737667"
                alt="Quality" data-canonical-src="https://codeclimate.com/github/jaredhanson/passport/badges/gpa.svg"
                style="max-width:100%;"></a>
        <a href="https://david-dm.org/jaredhanson/passport"><img
                src="https://camo.githubusercontent.com/1ec7388e26b82b530717ecd24e7fb82bd1178fe8/68747470733a2f2f64617669642d646d2e6f72672f6a6172656468616e736f6e2f70617373706f72742e737667"
                alt="Dependencies" data-canonical-src="https://david-dm.org/jaredhanson/passport.svg"
                style="max-width:100%;"></a>
        <a href="https://gratipay.com/jaredhanson/"><img
                src="https://camo.githubusercontent.com/761f99d7a2d73a28505b0aa4021467365c508ee5/68747470733a2f2f696d672e736869656c64732e696f2f67726174697061792f6a6172656468616e736f6e2e737667"
                alt="Tips" data-canonical-src="https://img.shields.io/gratipay/jaredhanson.svg" style="max-width:100%;"></a>
    </p>

    <p>Passport is <a href="http://expressjs.com/">Express</a>-compatible authentication
        middleware for <a href="http://nodejs.org/">Node.js</a>.</p>

    <p>Passport's sole purpose is to authenticate requests, which it does through an
        extensible set of plugins known as <em>strategies</em>. Passport does not mount
        routes or assume any particular database schema, which maximizes flexibility and
        allows application-level decisions to be made by the developer. The API is
        simple: you provide Passport a request to authenticate, and Passport provides
        hooks for controlling what occurs when authentication succeeds or fails.</p>
    </div>

----------------------------------------------------------------------------------------------------------------------------------------

</section><section id="facebook"><h1 id="facebook">Facebook</h1>
<p>The Facebook strategy allows users to log in to a web application using their
Facebook account.  Internally, Facebook authentication works using OAuth 2.0.</p>
<p>Support for Facebook is implemented by the <a href="https://github.com/jaredhanson/passport-facebook">passport-facebook</a>
module.</p>
<h2 id="install">Install</h2>
<pre><code class="lang-bash">$ npm install passport-facebook
</code></pre>
<h2 id="configuration">Configuration</h2>
<p>In order to use Facebook authentication, you must first create an app at
<a href="https://developers.facebook.com/">Facebook Developers</a>.  When created, an
app is assigned an App ID and App Secret.  Your application must also implement
a redirect URL, to which Facebook will redirect users after they have approved
access for your application.</p>
<pre><code class="lang-javascript">var passport = require(&#39;passport&#39;)
  , FacebookStrategy = require(&#39;passport-facebook&#39;).Strategy;

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: &quot;http://www.example.com/auth/facebook/callback&quot;
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate(..., function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));
</code></pre>
<p>The verify callback for Facebook authentication accepts <code>accessToken</code>,
<code>refreshToken</code>, and <code>profile</code> arguments.  <code>profile</code> will contain user profile
information provided by Facebook; refer to <a href="/guide/profile/">User Profile</a>
for additional information.</p>
<p>Note: For security reasons, the redirection URL must reside on the same host
that is registered with Facebook.</p>
<h2 id="routes">Routes</h2>
<p>Two routes are required for Facebook authentication.  The first route redirects
the user to Facebook.  The second route is the URL to which Facebook will
redirect the user after they have logged in.</p>
<pre><code class="lang-javascript">// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
app.get(&#39;/auth/facebook&#39;, passport.authenticate(&#39;facebook&#39;));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
app.get(&#39;/auth/facebook/callback&#39;,
  passport.authenticate(&#39;facebook&#39;, { successRedirect: &#39;/&#39;,
                                      failureRedirect: &#39;/login&#39; }));
</code></pre>
<p>Note that the URL of the callback route matches that of the <code>callbackURL</code> option
specified when configuring the strategy.</p>
<h2 id="permissions">Permissions</h2>
<p>If your application needs extended permissions, they can be requested by setting
the <code>scope</code> option.</p>
<pre><code class="lang-javascript">app.get(&#39;/auth/facebook&#39;,
  passport.authenticate(&#39;facebook&#39;, { scope: &#39;read_stream&#39; })
);
</code></pre>
<p>Multiple permissions can be specified as an array.</p>
<pre><code class="lang-javascript">app.get(&#39;/auth/facebook&#39;,
  passport.authenticate(&#39;facebook&#39;, { scope: [&#39;read_stream&#39;, &#39;publish_actions&#39;] })
);
</code></pre>
<h2 id="link">Link</h2>
<p>A link or button can be placed on a web page, allowing one-click login with
Facebook.</p>
<pre><code class="lang-xml">&lt;a href=&quot;/auth/facebook&quot;&gt;Login with Facebook&lt;/a&gt;
</code></pre>
----------------------------------------------------------------------------------------------------------------------------------------

</section><section id="twitter"><h1 id="twitter">Twitter</h1>
<p>The Twitter strategy allows users to sign in to a web application using their
Twitter account.  Internally, Twitter authentication works using OAuth 1.0a.</p>
<p>Support for Twitter is implemented by the <a href="https://github.com/jaredhanson/passport-twitter">passport-twitter</a>
module.</p>
<h2 id="install">Install</h2>
<pre><code class="lang-bash">$ npm install passport-twitter
</code></pre>
<h2 id="configuration">Configuration</h2>
<p>In order to use Twitter authentication, you must first create an application at
<a href="https://dev.twitter.com/">Twitter Developers</a>.  When created, an application is
assigned a consumer key and consumer secret.  Your application must also
implement a callback URL, to which Twitter will redirect users after they have
approved access for your application.</p>
<pre><code class="lang-javascript">var passport = require(&#39;passport&#39;)
  , TwitterStrategy = require(&#39;passport-twitter&#39;).Strategy;

passport.use(new TwitterStrategy({
    consumerKey: TWITTER_CONSUMER_KEY,
    consumerSecret: TWITTER_CONSUMER_SECRET,
    callbackURL: &quot;http://www.example.com/auth/twitter/callback&quot;
  },
  function(token, tokenSecret, profile, done) {
    User.findOrCreate(..., function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));
</code></pre>
<p>The verify callback for Twitter authentication accepts <code>token</code>, <code>tokenSecret</code>,
and <code>profile</code> arguments.  <code>profile</code> will contain user profile information
provided by Twitter; refer to <a href="/guide/profile/">User Profile</a> for additional
information.</p>
<h2 id="routes">Routes</h2>
<p>Two routes are required for Twitter authentication.  The first route initiates
an OAuth transaction and redirects the user to Twitter.  The second route is the
URL to which Twitter will redirect the user after they have signed in.</p>
<pre><code class="lang-javascript">// Redirect the user to Twitter for authentication.  When complete, Twitter
// will redirect the user back to the application at
//   /auth/twitter/callback
app.get(&#39;/auth/twitter&#39;, passport.authenticate(&#39;twitter&#39;));

// Twitter will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
app.get(&#39;/auth/twitter/callback&#39;,
  passport.authenticate(&#39;twitter&#39;, { successRedirect: &#39;/&#39;,
                                     failureRedirect: &#39;/login&#39; }));
</code></pre>
<p>Note that the URL of the callback route matches that of the <code>callbackURL</code> option
specified when configuring the strategy.</p>
<h2 id="link">Link</h2>
<p>A link or button can be placed on a web page, allowing one-click sign in with
Twitter.</p>
<pre><code class="lang-xml">&lt;a href=&quot;/auth/twitter&quot;&gt;Sign in with Twitter&lt;/a&gt;
</code></pre>
----------------------------------------------------------------------------------------------------------------------------------------

</section><section id="google"><h1 id="google">Google</h1>
<p>The Google strategy allows users to sign in to a web application using their
Google account.  Google <a href="https://developers.google.com/identity/protocols/OpenID2Migration#shutdown-timetable">used to support OpenID internally</a>, but it now works based on <a href="https://developers.google.com/identity/protocols/OpenIDConnect">OpenID Connect</a> and supports oAuth 1.0 and oAuth 2.0.</p>
<p>Support for Google is implemented by the <a href="https://github.com/jaredhanson/passport-google-oauth">passport-google-oauth</a>
module.</p>
<h2 id="install">Install</h2>
<pre><code class="lang-bash">$ npm install passport-google-oauth
</code></pre>
<h2 id="configuration">Configuration</h2>
<p>The Client Id and Client Secret needed to authenticate with Google can be set up from the <a href="https://console.developers.google.com">Google Developers Console</a>. You may also need to enable Google+ API in the developer console, otherwise user profile data may not be fetched. Google supports authentication with both oAuth 1.0 and oAuth 2.0.</p>
<h3 id="oauth-1-0">oAuth 1.0</h3>
<p>The Google OAuth 1.0 authentication strategy authenticates users using a Google account and OAuth tokens. The strategy requires a <code>verify</code> callback, which accepts these credentials and calls <code>done</code> providing a user, as well as <code>options</code> specifying a consumer key, consumer secret, and callback URL.</p>
<h4 id="configuration">Configuration</h4>
<pre><code class="lang-javascript">var passport = require(&#39;passport&#39;);
var GoogleStrategy = require(&#39;passport-google-oauth&#39;).OAuthStrategy;

// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.
passport.use(new GoogleStrategy({
    consumerKey: GOOGLE_CONSUMER_KEY,
    consumerSecret: GOOGLE_CONSUMER_SECRET,
    callbackURL: &quot;http://www.example.com/auth/google/callback&quot;
  },
  function(token, tokenSecret, profile, done) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return done(err, user);
      });
  }
));
</code></pre>
<h4 id="routes">Routes</h4>
<p>Use passport.authenticate(), specifying the &#39;google&#39; strategy, to authenticate requests. Authentication with Google requires an extra <code>scope</code> parameter. For information, go <a href="https://developers.google.com/identity/protocols/OpenIDConnect#scope-param">here</a>.</p>
<pre><code class="lang-javascript">// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve redirecting
//   the user to google.com.  After authorization, Google will redirect the user
//   back to this application at /auth/google/callback
app.get(&#39;/auth/google&#39;,
  passport.authenticate(&#39;google&#39;, { scope: &#39;https://www.google.com/m8/feeds&#39; });

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get(&#39;/auth/google/callback&#39;, 
  passport.authenticate(&#39;google&#39;, { failureRedirect: &#39;/login&#39; }),
  function(req, res) {
    res.redirect(&#39;/&#39;);
  });
</code></pre>

