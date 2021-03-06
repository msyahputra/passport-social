var express = require('express');
var router = express.Router();
var request = require('request');

var User = require('../models/users');

router.get('/users', function (req, res, next) {
    User.find({}, function (err, res) {
        if (err) {
            throw new Error(err);
        }
        else {
            res.json(res);
        }
    });
});

router.get('/images', function (req, res, next) {
    var accesstoken = req.user.facebook.token;
    var c = "count,name";
    var url = "https://graph.facebook.com/me/albums";
    request.get({
        url: url,
        qs: {
            access_token: accesstoken,
            fields: c
        },
        json: true
    }, function (err, resp, data) {
        if (err) {
            throw new Error(err);
        } else {
            res.render('albums', { albums: data });
        }
    });
});

router.get("/posts", function (req, res, next) {
    var accesstoken = req.user.facebook.token;
    var f = "message,id,created_time,name,link";
    var url = "https://graph.facebook.com/me/posts";
    request.get({
        url: url,
        qs: {
            access_token: accesstoken,
            fields: f
        },
        json: true
    }, function (err, resp, data) {
        if (err) {
            throw new Error(err);
        } else {
            res.json(data);
        }
    });
});

router.get("/pagesliked", function (req, res, next) {
    var at = req.user.facebook.token;
    var c = "context";
    var url = "https://graph.facebook.com/me";
    request.get({
        url: url,
        qs: {
            access_token: at,
            fields: c
        },
        json: true
    }, function (err, resp, data) {
        if (err) {
            throw new Error(err);
        } else {
            res.json(data);
        }
    });
});



router.get("/albumphotos/:id", function (req, res, next) {
    var at = req.user.facebook.token;
    var c = "photos{link,images}";
    var url = "https://graph.facebook.com/" + req.params.id;
    request.get({
        url: url,
        qs: {
            access_token: at,
            fields: c
        },
        json: true
    }, function (err, resp, data) {
        if (err) {
            throw new Error(err);
        } else {
            res.render('images', {data: data});
        }
    });
});

module.exports = router;

