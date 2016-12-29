module.exports = function (app, passport) {

    // route for showing the profile page
    app.get('/profile', isLoggedIn, function (req, res) {
        res.render('profile.ejs', {
            user: req.user // get the user out of session and pass to template
        });
    });

    // route for facebook authentication and login
    app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email', 'user_posts', 'user_likes', 'user_photos']}));

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));

    // route for google authentication and login
    app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

    // handle the callback after google has authenticated the user
    app.get('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));

    // route for twitter authentication and login
    app.get('/auth/twitter', passport.authenticate('twitter', {scope: ['profile', 'email']}));

    // handle the callback after twitter has authenticated the user
    app.get('/auth/twitter/callback',
        passport.authenticate('twitter', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));

    app.get('/connect/facebook', passport.authorize('facebook', {scope: ['email', 'user_posts', 'user_likes', 'user_photos']}));
    app.get('/connect/google', passport.authorize('google', { scope: ['profile', 'email'] }));
    app.get('/connect/twitter', passport.authorize('twitter', {scope: ['emial']}));


    app.get('/unlink/facebook', function(req, res){
        var user = req.user;

        user.facebook.token = null;

        user.save(function(err){
            if(err)
                throw err;
            res.redirect('/profile');
        })
    });

    app.get('/unlink/google', function(req, res){
        var user = req.user;
        user.google.token = null;

        user.save(function(err){
            if(err)
                throw err;
            res.redirect('/profile');
        });
    });

    app.get('/unlink/twitter', function(req, res){
        var user = req.user;
        user.twitter.token = null;

        user.save(function(err){
            if(err)
                throw err;
            res.redirect('/profile');
        });
    });

    // route for logging out
    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
