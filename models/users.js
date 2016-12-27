var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    facebook: {
        fb_Id: String,
        token: String,
        username: String,
        email: String,
    },
    google: {
        Gg_Id: String,
        token: String,
        email: String,
        name: String
    },
    twitter: {
        Tw_Id: String,
        token: String,
        username: String,
        profile_name: String
    }
   });

module.exports = mongoose.model('User', userSchema);
