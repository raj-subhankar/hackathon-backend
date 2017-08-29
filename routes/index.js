//Dependencies
var express = require('express');
var router  = express.Router();
var jwt     = require('jsonwebtoken');
var User    = require('../models/user');

//Routes
router.use('/users',    require('./user'));
router.use('/posts', 	require('./post'));

router.route('/').get(function(req, res){
    res.json('Welcome!');
});

router.route('/about').get(function(req, res){
    res.json('About');
});

router.route('/authenticate').post(function(req, res) {
    console.log(req.body.email + req.body.password);
    User.getAuthenticated(req.body.email, req.body.password, function(err, user, reason) {
        if (err) throw err;

        // login was successful if we have a user
        if (user) {
            // handle login success
            console.log('login success');
            // if user is found and password is right
            // create a token
            var token = jwt.sign(user, "retailsheep", {
                //expiresInMinutes: 1440 // expires in 24 hours
            });

            // return the information including token as JSON
            res.json({
                success: true,
                message: 'Enjoy your token!',
                token: token,
                name: user.name,
		            email: user.email,
		            id: user.id
            });

            return;
        }

	// otherwise we can determine why we failed
        var reasons = User.failedLogin;
        switch (reason) {
            case reasons.NOT_FOUND:
            case reasons.PASSWORD_INCORRECT:
                // note: these cases are usually treated the same - don't tell
                // the user *why* the login failed, only that it did
                res.json({success: false, message: 'Authentication failed.'});
                break;
            case reasons.MAX_ATTEMPTS:
                // send email or otherwise notify user that account is
                // temporarily locked
                res.json({success: false, message: 'Too many failed attempts.'});
                break;
        }
    });
});


//Return router
module.exports = router;
