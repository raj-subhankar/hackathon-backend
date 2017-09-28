var express     = require('express');
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var multer = require('multer');
var crypto = require('crypto');
var mime   = require('mime');
//var im     = require('imagemagick');
//var jwt  = require('jsonwebtoken');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/profile')
  },
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype));
    });
  }
});

var upload      = multer({storage: storage});
var router      = express.Router();

var User = require('../models/user');

router.route('/add').post(upload.single('photos'), function(req, res, next){
    var dir = '/home/ubuntu/yellow/public/uploads/profile/';
    User.findOne({email: req.body.email}, function(error, user){
        if(user) {
            res.json({
                success: false,
                message: "Email already registered."
            });
        }
        else {
            var user = new User(req.body);

            if(req.file != undefined){
                      im.resize({
                        	srcPath: dir + req.file.filename,
                          dstPath: dir + 'compressed/' + req.file.filename,
                          quality: 0.4,
                          width: ""}, function(err, stdout){
                              if (err) return next(err);
                              console.log("Image compressed");
                          });
                          user.profilePic = "http://ec2-54-149-192-204.us-west-2.compute.amazonaws.com:3000/static/uploads/profile/compressed/"+req.file.filename;
            }

            // create a token
            //var token = jwt.sign(user, "retailsheep", {
                //expiresInMinutes: 1440 // expires in 24 hours
            //});

            user.save(function(error, result){
                if(error) return next(error);
                // create a token
                //var token = jwt.sign(user, "retailsheep", {
                    //expiresInMinutes: 1440 // expires in 24 hours
                //});
                res.json({
                    success: true,
                    message: "Account created",
                    //token: token,
		                id: user._id,
                    name: user.name,
                    email: user.email,
                    isRepresentative: user.isRepresentative,
                    aadhaarNumber: user.aadhaarNumber,
                    profilePic: user.profilePic
            });
        }
    });
});

router.route('/:id').put(upload.single('photos'), function(req, res, next) {
    var dir = '/home/ubuntu/yellow/public/uploads/profile/';
    User.findOne({_id: req.params.id}, function(error, user){
	if(error) return next(error);
	user.set(req.body);

	if(req.file != undefined){
            im.resize({
              	srcPath: dir + req.file.filename,
                dstPath: dir + 'compressed/' + req.file.filename,
                quality: 0.4,
                width: ""}, function(err, stdout){
                    if (err) return next(err);
                    console.log("Image compressed");
                });
                user.profilePic = "http://ec2-54-149-192-204.us-west-2.compute.amazonaws.com:3000/static/uploads/profile/compressed/"+req.file.filename;
                    }


	user.save(function(error){
	    if(error) return next(error);
	    res.json({
                    success: true,
                    message: "Account updated",
                    //token: token,
                    id: user._id,
                    name: user.name,
                    email: user.email
                });
	});
    });
});

// Return router
module.exports = router;
