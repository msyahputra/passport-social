var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;

var User = require('../models/users');
var configAuth = require('./config');

module.exports = function (passport) {

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    passport.use(new FacebookStrategy({
            clientID: configAuth.facebook.clientID,
            clientSecret: configAuth.facebook.clientSecret,
            callbackURL: configAuth.facebook.callbackURL,
            profileFields: ['id', 'displayName', 'email'],
            passReqToCallback: true
        },
        function (req, token, refreshToken, profile, done) {
            process.nextTick(function () {

                // if(!req.user)  below process runs else directly using session data +++++
                if (!req.user) {
                    User.findOne({fb_Id: profile.id}, function (err, user) {
                        if (err) {
                            return done(err);
                        }
                        if (user) {
                            if (!user.facebook.token) {
                                user.facebook.token = token;
                                user.facebook.fb_Id = profile.id;
                                user.facebook.email = profile.emails[0].value;
                                user.save(function (err) {
                                    if (err)
                                        throw err;
                                })
                            }
                            return done(null, user);
                        }
                        else {
                            var newUser = new User();
                            newUser.facebook.fb_Id = profile.id;
                            newUser.facebook.token = token;
                            newUser.facebook.username = profile.displayName;
                            newUser.facebook.email = profile.emails[0].value;

                            newUser.save(function (err) {
                                if (err) {
                                    throw new Error(err);
                                }
                                return done(null, newUser);
                            });
                        }
                    });
                    // if(req.user) fetching data from req.user and +++++++ lines
                } else {
                    var user = req.user;
                    user.facebook.fb_Id = profile.id;
                    user.facebook.token = token;
                    user.facebook.username = profile.displayName;
                    user.facebook.email = profile.emails[0].value;


                    user.save(function (err) {
                        if (err)
                            throw err;
                        return done(null, user);
                    })
                }

            });
        }
    ));

    passport.use(new GoogleStrategy({
            clientID: configAuth.google.clientID,
            clientSecret: configAuth.google.clientSecret,
            callbackURL: configAuth.google.callbackURL,
            profileFields: ['id', 'displayName', 'email'],
            passReqToCallback: true
        },
        function (req, token, refreshToken, profile, done) {
            process.nextTick(function () {

                // if(!req.user)  below process runs else directly using session data +++++
                if (!req.user) {
                    User.findOne({Gg_Id: profile.id}, function (err, user) {
                        if (err) {
                            return done(err);
                        }
                        if (user) {
                            if (!user.google.token) {
                                user.google.token = token;
                                user.google.fb_Id = profile.id;
                                user.google.email = profile.emails[0].value;
                                user.save(function (err) {
                                    if (err)
                                        throw err;
                                })
                            }
                            return done(null, user);
                        }
                        else {
                            var newUser = new User();

                            newUser.google.Gg_Id = profile.id;
                            newUser.google.token = token;
                            newUser.google.name = profile.displayName;
                            newUser.google.email = profile.emails[0].value;
                            newUser.save(function (err) {
                                if (err) {
                                    throw Error(err);
                                }
                                return done(null, newUser);
                            });
                        }
                    });
                    // if(req.user) fetching data from req.user and +++++++ lines
                } else {
                    var user = req.user;
                    user.google.Gg_Id = profile.id;
                    user.google.token = token;
                    user.google.name = profile.displayName;
                    user.google.email = profile.emails[0].value;

                    user.save(function (err) {
                        if (err)
                            throw err;
                        return done(null, user);
                    });
                }
            });
        }
    ));

    passport.use(new TwitterStrategy({
            consumerKey: configAuth.twitter.consumerKey,
            consumerSecret: configAuth.twitter.consumerSecret,
            callbackURL: configAuth.twitter.callbackURL,
            passReqToCallback: true
        },
        function (req, token, refreshToken, profile, done) {
            process.nextTick(function () {

                // if(!req.user)  below process runs else directly using session data +++++
                if (!req.user) {
                    User.findOne({Tw_Id: profile.id}, function (err, user) {
                        if (err) {
                            return done(err);
                        }
                        if (user) {
                            if (!user.twitter.token) {
                                user.twitter.token = token;
                                user.twitter.Tw_Id = profile.id;
                                user.twitter.username = profile.username;
                                user.save(function (err) {
                                    if (err)
                                        throw err;
                                })
                            }
                            return done(null, user);
                        }
                        else {
                            var newUser = new User();

                            newUser.twitter.Tw_Id = profile.id;
                            newUser.twitter.token = token;
                            newUser.twitter.profile_name = profile.profile_name;
                            newUser.twitter.username = profile.username;

                            newUser.save(function (err) {
                                if (err) {
                                    throw Error(err);
                                }
                                return done(null, newUser);
                            });
                        }
                    });
                    // if(req.user) fetching data from req.user and +++++++ lines
                } else {
                    var user = req.user;

                    user.twitter.Tw_Id = profile.id;
                    user.twitter.token = token;
                    user.twitter.profile_name = profile.profile_name;
                    user.twitter.username = profile.username;

                    user.save(function (err) {
                        if (err)
                            throw err;
                        return done(null, user);
                    });
                }
            });
        }
    ));


};
