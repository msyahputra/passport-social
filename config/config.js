module.exports = {
    'url': "mongodb://localhost:27017/social",
    'key': '1213414141-414914',
    'facebook': {
        'clientID': '<your_api_key>',
        'clientSecret': '<your_api_key>',
        'callbackURL': 'http://localhost:8080/auth/facebook/callback'
    },
    'google': {
        'clientID': '<your_api_key>',
        'clientSecret': '<your_api_key>',
        'callbackURL': 'http://localhost:8080/auth/google/callback'
    },
    'twitter': {
        'consumerKey': '<your_api_key>',
        'consumerSecret': '<your_api_key>',
        'callbackURL': 'http://localhost:8080/auth/twitter/callback'
    }
};
