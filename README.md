# Passport-social

<div class="markdown-body entry-content" itemprop="text"><p><a href="http://passportjs.org"><img
        src="https://camo.githubusercontent.com/662ee2f98b69b0894d0a1d9117a9c5fb4dfc40aa/687474703a2f2f63646e2e61757468302e636f6d2f696d672f70617373706f72742d62616e6e65722d6769746875622e706e67"
        alt="passport banner" data-canonical-src="http://cdn.auth0.com/img/passport-banner-github.png"
        style="max-width:100%;"></a></p>

    <p>This is the folder structure of the source code of the library passport.</p>
    <pre><code class="language-markup">
    
    --- bin
    ------ www            &lt;!-- here place port localhost --&gt;
    --- config
    ------ config.js      &lt;!-- will hold our database connection settings and all our client secret keys (facebook, google, twitter -&gt;
    ------ pass.js        &lt;!-- configuring the strategies for passport --&gt;
    --- models
    ------ users.js       &lt;!-- our user model --&gt;
    --- routes.js  
    ------ index.js       &lt;!-- this script used for see images , posts and pagesliked from facebook  --&gt;
    ------ social.js      &lt;!-- all the routes for our application --&gt;
     - views
    ------ index.ejs      &lt;!-- show our home page with login links --&gt;
    ------ albums.ejs     &lt;!-- show our album form (only needed for album) --&gt;
    ------ images.ejs     &lt;!-- show our Image form (only needed for Image) --&gt;
    ------ profile.ejs    &lt;!-- after a user logs in, they will see their profile --&gt;
     - package.json       &lt;!-- handle our npm packages --&gt;
     - app.js             &lt;!-- setup our application --&gt;
    </code>
    </pre>
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
                alt="Coverage"
                data-canonical-src="https://coveralls.io/repos/jaredhanson/passport/badge.svg?branch=master"
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
