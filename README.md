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

<section id="profile"><h1 id="user-profile">User Profile</h1>
    <p>When authenticating using a third-party service such as Facebook or Twitter,
        user profile information will often be available. Each service tends to have
        a different way of encoding this information. To make integration easier,
        Passport normalizes profile information to the extent possible.</p>
    <p>Normalized profile information conforms to the <a href="http://portablecontacts.net/draft-spec.html#schema">contact
        schema</a>
        established by <a href="http://portablecontacts.net/">Portable Contacts</a>. The common
        fields available are outlined in the following table.</p>
    <dl>
               <dt><code>provider</code> {String}
        <dt>
        <dd>The provider with which the user authenticated (<code>facebook</code>, <code>twitter</code>, etc.).</dd>
                <dt><code>id</code> {String}
        <dt>
        <dd>A unique identifier for the user, as generated by the service provider.</dd>
                <dt><code>displayName</code> {String}
        <dt>
        <dd>The name of this user, suitable for display.</dd>
                <dt><code>name</code> {Object}
        <dt>
        <dd>
            <dl>
                <dt><code>familyName</code> {String}
                <dt>
         <dd>The family name of this user, or &quot;last name&quot; in most Western languages.</dd>
                <dt><code>givenName</code> {String}
                <dt>
         <dd>The given name of this user, or &quot;first name&quot; in most Western languages.</dd>
                <dt><code>middleName</code> {String}
                <dt>
         <dd>The middle name of this user.</dd>
            </dl>
        </dd>
                <dt><code>emails</code> {Array} [n]
        <dt>
        <dd>
            <dl>
                <dt><code>value</code> {String}
                <dt>
         <dd>The actual email address.</dd>
                <dt><code>type</code> {String}
                <dt>
         <dd>The type of email address (home, work, etc.).</dd>
            </dl>
        </dd>6
                <dt><code>photos</code> {Array} [n]
        <dt>
        <dd>
            <dl>
                <dt><code>value</code> {String}
                <dt>
          <dd>The URL of the image.</dd>
            </dl>
        </dd>
    </dl>

    Note that not all of the above fields are available from every service provider.
    Some providers may contain additional information not described here. Consult
    the provider-specific documentation for further details.
</section>
----------------------------------------------------------------------------------------------------------------------------------------

<article class="markdown-body entry-content" itemprop="text"><h1><a id="user-content-passport-facebook" class="anchor" href="#passport-facebook" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>passport-facebook</h1>

    <p><a href="https://travis-ci.org/jaredhanson/passport-facebook"><img src="https://camo.githubusercontent.com/acdb3c926ce4f26658f8303f3fe7ee17b44e9571/68747470733a2f2f696d672e736869656c64732e696f2f7472617669732f6a6172656468616e736f6e2f70617373706f72742d66616365626f6f6b2e737667" alt="Build" data-canonical-src="https://img.shields.io/travis/jaredhanson/passport-facebook.svg" style="max-width:100%;"></a>
        <a href="https://coveralls.io/r/jaredhanson/passport-facebook"><img src="https://camo.githubusercontent.com/467039f44cb7676222de8d233e2b8dc4197c96fb/68747470733a2f2f696d672e736869656c64732e696f2f636f766572616c6c732f6a6172656468616e736f6e2f70617373706f72742d66616365626f6f6b2e737667" alt="Coverage" data-canonical-src="https://img.shields.io/coveralls/jaredhanson/passport-facebook.svg" style="max-width:100%;"></a>
        <a href="https://codeclimate.com/github/jaredhanson/passport-facebook"><img src="https://camo.githubusercontent.com/8fd8f7d3d3609b3036b70635bb248c3fbea3f469/68747470733a2f2f696d672e736869656c64732e696f2f636f6465636c696d6174652f6769746875622f6a6172656468616e736f6e2f70617373706f72742d66616365626f6f6b2e7376673f6c6162656c3d7175616c697479" alt="Quality" data-canonical-src="https://img.shields.io/codeclimate/github/jaredhanson/passport-facebook.svg?label=quality" style="max-width:100%;"></a>
        <a href="https://david-dm.org/jaredhanson/passport-facebook"><img src="https://camo.githubusercontent.com/bbac6144e7e7db4c93bc306c26699b9e0adf3b86/68747470733a2f2f696d672e736869656c64732e696f2f64617669642f6a6172656468616e736f6e2f70617373706f72742d66616365626f6f6b2e737667" alt="Dependencies" data-canonical-src="https://img.shields.io/david/jaredhanson/passport-facebook.svg" style="max-width:100%;"></a></p>

    <p><a href="http://passportjs.org/">Passport</a> strategy for authenticating with <a href="http://www.facebook.com/">Facebook</a>
        using the OAuth 2.0 API.</p>

    <p>This module lets you authenticate using Facebook in your Node.js applications.
        By plugging into Passport, Facebook authentication can be easily and
        unobtrusively integrated into any application or framework that supports
        <a href="http://www.senchalabs.org/connect/">Connect</a>-style middleware, including
        <a href="http://expressjs.com/">Express</a>.</p>

    <h2><a id="user-content-install" class="anchor" href="#install" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h2>

    <pre><code>$ npm install passport-facebook
</code></pre>

    <h2><a id="user-content-usage" class="anchor" href="#usage" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>

    <h4><a id="user-content-create-an-application" class="anchor" href="#create-an-application" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Create an Application</h4>

    <p>Before using <code>passport-facebook</code>, you must register an application with
        Facebook.  If you have not already done so, a new application can be created at
        <a href="https://developers.facebook.com/">Facebook Developers</a>.  Your application will
        be issued an app ID and app secret, which need to be provided to the strategy.
        You will also need to configure a redirect URI which matches the route in your
        application.</p>

    <h4><a id="user-content-configure-strategy" class="anchor" href="#configure-strategy" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Configure Strategy</h4>

    <p>The Facebook authentication strategy authenticates users using a Facebook
        account and OAuth 2.0 tokens.  The app ID and secret obtained when creating an
        application are supplied as options when creating the strategy.  The strategy
        also requires a <code>verify</code> callback, which receives the access token and optional
        refresh token, as well as <code>profile</code> which contains the authenticated user's
        Facebook profile.  The <code>verify</code> callback must call <code>cb</code> providing a user to
        complete authentication.</p>

    <div class="highlight highlight-source-js"><pre><span class="pl-smi">passport</span>.<span class="pl-en">use</span>(<span class="pl-k">new</span> <span class="pl-en">FacebookStrategy</span>({
    clientID<span class="pl-k">:</span> <span class="pl-c1">FACEBOOK_APP_ID</span>,
    clientSecret<span class="pl-k">:</span> <span class="pl-c1">FACEBOOK_APP_SECRET</span>,
    callbackURL<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>http://localhost:3000/auth/facebook/callback<span class="pl-pds">"</span></span>
  },
  <span class="pl-k">function</span>(<span class="pl-smi">accessToken</span>, <span class="pl-smi">refreshToken</span>, <span class="pl-smi">profile</span>, <span class="pl-smi">cb</span>) {
    <span class="pl-smi">User</span>.<span class="pl-en">findOrCreate</span>({ facebookId<span class="pl-k">:</span> <span class="pl-smi">profile</span>.<span class="pl-c1">id</span> }, <span class="pl-k">function</span> (<span class="pl-smi">err</span>, <span class="pl-smi">user</span>) {
      <span class="pl-k">return</span> <span class="pl-en">cb</span>(err, user);
    });
  }
));</pre></div>

    <h4><a id="user-content-authenticate-requests" class="anchor" href="#authenticate-requests" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Authenticate Requests</h4>

    <p>Use <code>passport.authenticate()</code>, specifying the <code>'facebook'</code> strategy, to
        authenticate requests.</p>

    <p>For example, as route middleware in an <a href="http://expressjs.com/">Express</a>
        application:</p>

    <div class="highlight highlight-source-js"><pre><span class="pl-smi">app</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>/auth/facebook<span class="pl-pds">'</span></span>,
  <span class="pl-smi">passport</span>.<span class="pl-en">authenticate</span>(<span class="pl-s"><span class="pl-pds">'</span>facebook<span class="pl-pds">'</span></span>));

<span class="pl-smi">app</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>/auth/facebook/callback<span class="pl-pds">'</span></span>,
  <span class="pl-smi">passport</span>.<span class="pl-en">authenticate</span>(<span class="pl-s"><span class="pl-pds">'</span>facebook<span class="pl-pds">'</span></span>, { failureRedirect<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>/login<span class="pl-pds">'</span></span> }),
  <span class="pl-k">function</span>(<span class="pl-smi">req</span>, <span class="pl-smi">res</span>) {
    <span class="pl-c"><span class="pl-c">//</span> Successful authentication, redirect home.</span>
    <span class="pl-smi">res</span>.<span class="pl-en">redirect</span>(<span class="pl-s"><span class="pl-pds">'</span>/<span class="pl-pds">'</span></span>);
  });</pre></div>

    <h2><a id="user-content-examples" class="anchor" href="#examples" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>

    <p>Developers using the popular <a href="http://expressjs.com/">Express</a> web framework can
        refer to an <a href="https://github.com/passport/express-4.x-facebook-example">example</a>
        as a starting point for their own web applications.</p>

    <h2><a id="user-content-faq" class="anchor" href="#faq" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>FAQ</h2>

    <h5><a id="user-content-how-do-i-ask-a-user-for-additional-permissions" class="anchor" href="#how-do-i-ask-a-user-for-additional-permissions" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do I ask a user for additional permissions?</h5>

    <p>If you need additional permissions from the user, the permissions can be
        requested via the <code>scope</code> option to <code>passport.authenticate()</code>.</p>

    <div class="highlight highlight-source-js"><pre><span class="pl-smi">app</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>/auth/facebook<span class="pl-pds">'</span></span>,
  <span class="pl-smi">passport</span>.<span class="pl-en">authenticate</span>(<span class="pl-s"><span class="pl-pds">'</span>facebook<span class="pl-pds">'</span></span>, { scope<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>user_friends<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>manage_pages<span class="pl-pds">'</span></span>] }));</pre></div>

    <p>Refer to <a href="https://developers.facebook.com/docs/facebook-login/permissions/overview">permissions with Facebook Login</a>
        for further details.</p>

    <h5><a id="user-content-how-do-i-re-ask-for-for-declined-permissions" class="anchor" href="#how-do-i-re-ask-for-for-declined-permissions" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do I re-ask for for declined permissions?</h5>

    <p>Set the <code>authType</code> option to <code>rerequest</code> when authenticating.</p>

    <div class="highlight highlight-source-js"><pre><span class="pl-smi">app</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>/auth/facebook<span class="pl-pds">'</span></span>,
  <span class="pl-smi">passport</span>.<span class="pl-en">authenticate</span>(<span class="pl-s"><span class="pl-pds">'</span>facebook<span class="pl-pds">'</span></span>, { authType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>rerequest<span class="pl-pds">'</span></span>, scope<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>user_friends<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>manage_pages<span class="pl-pds">'</span></span>] }));</pre></div>

    <p>Refer to <a href="https://developers.facebook.com/docs/facebook-login/web#re-asking-declined-permissions">re-asking for declined permissions</a>
        for further details.</p>

    <h5><a id="user-content-how-do-i-obtain-a-user-profile-with-specific-fields" class="anchor" href="#how-do-i-obtain-a-user-profile-with-specific-fields" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do I obtain a user profile with specific fields?</h5>

    <p>The Facebook profile contains a lot of information about a user.  By default,
        not all the fields in a profile are returned.  The fields need by an application
        can be indicated by setting the <code>profileFields</code> option.</p>

    <div class="highlight highlight-source-js"><pre><span class="pl-k">new</span> <span class="pl-en">FacebookStrategy</span>({
  clientID<span class="pl-k">:</span> <span class="pl-c1">FACEBOOK_APP_ID</span>,
  clientSecret<span class="pl-k">:</span> <span class="pl-c1">FACEBOOK_APP_SECRET</span>,
  callbackURL<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>http://localhost:8080/auth/facebook/callback<span class="pl-pds">"</span></span>,
  profileFields<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>id<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>displayName<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>photos<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>email<span class="pl-pds">'</span></span>]
}), <span class="pl-k">...</span>)</pre></div>

    <p>Refer to the <a href="https://developers.facebook.com/docs/graph-api/reference/v2.5/user">User</a>
        section of the Graph API Reference for the complete set of available fields.</p>

    <h5><a id="user-content-how-do-i-include-app-secret-proof-in-api-requests" class="anchor" href="#how-do-i-include-app-secret-proof-in-api-requests" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do I include app secret proof in API requests?</h5>

    <p>Set the <code>enableProof</code> option when creating the strategy.</p>

    <div class="highlight highlight-source-js"><pre><span class="pl-k">new</span> <span class="pl-en">FacebookStrategy</span>({
  clientID<span class="pl-k">:</span> <span class="pl-c1">FACEBOOK_APP_ID</span>,
  clientSecret<span class="pl-k">:</span> <span class="pl-c1">FACEBOOK_APP_SECRET</span>,
  callbackURL<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>http://localhost:8080/auth/facebook/callback<span class="pl-pds">"</span></span>,
  enableProof<span class="pl-k">:</span> <span class="pl-c1">true</span>
}, <span class="pl-k">...</span>)</pre></div>

    <p>As detailed in <a href="https://developers.facebook.com/docs/graph-api/securing-requests#appsecret_proof">securing graph API requests</a>,
        requiring the app secret for server API requests helps prevent use of tokens
        stolen by malicous software or man in the middle attacks.</p>

    <h5><a id="user-content-why-is-__-appended-to-the-redirect-uri" class="anchor" href="#why-is-__-appended-to-the-redirect-uri" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why is #_=_ appended to the redirect URI?</h5>

    <p>This behavior is "by design" according to Facebook's response to a <a href="https://developers.facebook.com/bugs/318390728250352">bug</a>
        filed regarding this issue.</p>

    <p>Fragment identifiers are not supplied in requests made to a server, and as such
        this strategy is not aware that this behavior is exhibited and is not affected
        by it.  If desired, this fragment can be removed on the client side.  Refer to
        this <a href="http://stackoverflow.com/questions/7131909/facebook-callback-appends-to-return-url">discussion</a> on
        Stack Overflow for recommendations on how to accomplish such removal.</p>
----------------------------------------------------------------------------------------------------------------------------------------   
      <article class="markdown-body entry-content" itemprop="text"><h1><a id="user-content-passport-twitter" class="anchor" href="#passport-twitter" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>passport-twitter</h1>

<p><a href="https://travis-ci.org/jaredhanson/passport-twitter"><img src="https://camo.githubusercontent.com/21707ff95ad1f612b689a16c4ced1e40a4daa08b/68747470733a2f2f696d672e736869656c64732e696f2f7472617669732f6a6172656468616e736f6e2f70617373706f72742d747769747465722e737667" alt="Build" data-canonical-src="https://img.shields.io/travis/jaredhanson/passport-twitter.svg" style="max-width:100%;"></a>
<a href="https://coveralls.io/r/jaredhanson/passport-twitter"><img src="https://camo.githubusercontent.com/bac47751e2107cebc8d5b5a076a758e5f1614664/68747470733a2f2f696d672e736869656c64732e696f2f636f766572616c6c732f6a6172656468616e736f6e2f70617373706f72742d747769747465722e737667" alt="Coverage" data-canonical-src="https://img.shields.io/coveralls/jaredhanson/passport-twitter.svg" style="max-width:100%;"></a>
<a href="https://codeclimate.com/github/jaredhanson/passport-twitter"><img src="https://camo.githubusercontent.com/d0faba4281216a26a962fa3bfa63cdc2e3962b07/68747470733a2f2f696d672e736869656c64732e696f2f636f6465636c696d6174652f6769746875622f6a6172656468616e736f6e2f70617373706f72742d747769747465722e7376673f6c6162656c3d7175616c697479" alt="Quality" data-canonical-src="https://img.shields.io/codeclimate/github/jaredhanson/passport-twitter.svg?label=quality" style="max-width:100%;"></a>
<a href="https://david-dm.org/jaredhanson/passport-twitter"><img src="https://camo.githubusercontent.com/4e5ce30c42b470f4bf15362652f12e81c97371b9/68747470733a2f2f696d672e736869656c64732e696f2f64617669642f6a6172656468616e736f6e2f70617373706f72742d747769747465722e737667" alt="Dependencies" data-canonical-src="https://img.shields.io/david/jaredhanson/passport-twitter.svg" style="max-width:100%;"></a></p>

<p><a href="http://passportjs.org/">Passport</a> strategy for authenticating with <a href="http://twitter.com/">Twitter</a>
using the OAuth 1.0a API.</p>

<p>This module lets you authenticate using Twitter in your Node.js applications.
By plugging into Passport, Twitter authentication can be easily and
unobtrusively integrated into any application or framework that supports
<a href="http://www.senchalabs.org/connect/">Connect</a>-style middleware, including
<a href="http://expressjs.com/">Express</a>.</p>

<h2><a id="user-content-install" class="anchor" href="#install" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h2>

<div class="highlight highlight-source-shell"><pre>$ npm install passport-twitter</pre></div>

<h2><a id="user-content-usage" class="anchor" href="#usage" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>

<h4><a id="user-content-create-an-application" class="anchor" href="#create-an-application" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Create an Application</h4>

<p>Before using <code>passport-twitter</code>, you must register an application with Twitter.
If you have not already done so, a new application can be created at
<a href="https://apps.twitter.com/">Twitter Application Management</a>.  Your application
will be issued a consumer key (API Key) and consumer secret (API Secret), which
need to be provided to the strategy.  You will also need to configure a callback
URL which matches the route in your application.</p>

<h4><a id="user-content-configure-strategy" class="anchor" href="#configure-strategy" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Configure Strategy</h4>

<p>The Twitter authentication strategy authenticates users using a Twitter account
and OAuth tokens.  The consumer key and consumer secret obtained when creating
an application are supplied as options when creating the strategy.  The strategy
also requires a <code>verify</code> callback, which receives the access token and
corresponding secret as arguments, as well as <code>profile</code> which contains the
authenticated user's Twitter profile.   The <code>verify</code> callback must call <code>cb</code>
providing a user to complete authentication.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">passport</span>.<span class="pl-en">use</span>(<span class="pl-k">new</span> <span class="pl-en">TwitterStrategy</span>({
    consumerKey<span class="pl-k">:</span> <span class="pl-c1">TWITTER_CONSUMER_KEY</span>,
    consumerSecret<span class="pl-k">:</span> <span class="pl-c1">TWITTER_CONSUMER_SECRET</span>,
    callbackURL<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>http://127.0.0.1:8080/auth/twitter/callback<span class="pl-pds">"</span></span>
  },
  <span class="pl-k">function</span>(<span class="pl-smi">token</span>, <span class="pl-smi">tokenSecret</span>, <span class="pl-smi">profile</span>, <span class="pl-smi">cb</span>) {
    <span class="pl-smi">User</span>.<span class="pl-en">findOrCreate</span>({ twitterId<span class="pl-k">:</span> <span class="pl-smi">profile</span>.<span class="pl-c1">id</span> }, <span class="pl-k">function</span> (<span class="pl-smi">err</span>, <span class="pl-smi">user</span>) {
      <span class="pl-k">return</span> <span class="pl-en">cb</span>(err, user);
    });
  }
));</pre></div>

<h4><a id="user-content-authenticate-requests" class="anchor" href="#authenticate-requests" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Authenticate Requests</h4>

<p>Use <code>passport.authenticate()</code>, specifying the <code>'twitter'</code> strategy, to
authenticate requests.</p>

<p>For example, as route middleware in an <a href="http://expressjs.com/">Express</a>
application:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">app</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>/auth/twitter<span class="pl-pds">'</span></span>,
  <span class="pl-smi">passport</span>.<span class="pl-en">authenticate</span>(<span class="pl-s"><span class="pl-pds">'</span>twitter<span class="pl-pds">'</span></span>));

<span class="pl-smi">app</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>/auth/twitter/callback<span class="pl-pds">'</span></span>, 
  <span class="pl-smi">passport</span>.<span class="pl-en">authenticate</span>(<span class="pl-s"><span class="pl-pds">'</span>twitter<span class="pl-pds">'</span></span>, { failureRedirect<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>/login<span class="pl-pds">'</span></span> }),
  <span class="pl-k">function</span>(<span class="pl-smi">req</span>, <span class="pl-smi">res</span>) {
    <span class="pl-c"><span class="pl-c">//</span> Successful authentication, redirect home.</span>
    <span class="pl-smi">res</span>.<span class="pl-en">redirect</span>(<span class="pl-s"><span class="pl-pds">'</span>/<span class="pl-pds">'</span></span>);
  });</pre></div>

<h2><a id="user-content-examples" class="anchor" href="#examples" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>

<p>Developers using the popular <a href="http://expressjs.com/">Express</a> web framework can
refer to an <a href="https://github.com/passport/express-4.x-twitter-example">example</a>
as a starting point for their own web applications.</p>
----------------------------------------------------------------------------------------------------------------------------------------

<section id="google"><h1 id="gogle">Google</h1>
    <p>The Google strategy allows users to sign in to a web application using their
        Google account. Google <a
                href="https://developers.google.com/identity/protocols/OpenID2Migration#shutdown-timetable">used to
            support OpenID internally</a>, but it now works based on <a
                href="https://developers.google.com/identity/protocols/OpenIDConnect">OpenID Connect</a> and supports
        oAuth 1.0 and oAuth 2.0.</p>
    <p>Support for Google is implemented by the <a href="https://github.com/jaredhanson/passport-google-oauth">passport-google-oauth</a>
        module.</p>
    <h2 id="install">Install</h2>
    <pre><code class="lang-bash">$ npm install passport-google-oauth
</code></pre>
    <h2 id="configuration-google">Configuration</h2>
    <p>The Client Id and Client Secret needed to authenticate with Google can be set up from the <a
            href="https://console.developers.google.com">Google Developers Console</a>. You may also need to enable
        Google+ API in the developer console, otherwise user profile data may not be fetched. Google supports
        authentication with both oAuth 1.0 and oAuth 2.0.</p>
    <h3 id="oauth-1-0">oAuth 1.0</h3>
    <p>The Google OAuth 1.0 authentication strategy authenticates users using a Google account and OAuth tokens. The
        strategy requires a <code>verify</code> callback, which accepts these credentials and calls <code>done</code>
        providing a user, as well as <code>options</code> specifying a consumer key, consumer secret, and callback URL.
    </p>
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
    <h4 id="routes-google">Routes</h4>
    <p>Use passport.authenticate(), specifying the &#39;google&#39; strategy, to authenticate requests. Authentication
        with Google requires an extra <code>scope</code> parameter. For information, go <a
                href="https://developers.google.com/identity/protocols/OpenIDConnect#scope-param">here</a>.</p>
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

