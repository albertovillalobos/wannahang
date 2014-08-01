'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    passport = require('passport');

/**
 * Create user
 */
exports.create = function (req, res, next) {
  var newUser = new User(req.body);
  newUser.provider = 'local';
  newUser.save(function(err) {
    if (err) return res.json(400, err);

    req.logIn(newUser, function(err) {
      if (err) return next(err);

      return res.json(req.user.userInfo);
    });
  });
};

/**
 *  Get profile of specified user
 */
exports.show = function (req, res, next) {
  var userId = req.params.id;

  User.findById(userId, function (err, user) {
    if (err) return next(err);
    if (!user) return res.send(404);

    res.send({ profile: user.profile });
  });
};

/**
 * Change password
 */
exports.changePassword = function(req, res, next) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  User.findById(userId, function (err, user) {
    if(user.authenticate(oldPass)) {
      user.password = newPass;
      user.save(function(err) {
        if (err) return res.send(400);

        res.send(200);
      });
    } else {
      res.send(403);
    }
  });
};


/**
 * Get current user
 */
exports.me = function(req, res) {
  res.json(req.user || null);
};


/*
  1- Find user
  2- If user doesn't exist, return error
  3- If user is already added, return error
  4- If user exists but hasn't been added, add him
*/
exports.addFriend = function(req, res, next) {

  var userName = req.body.username;

  // Find friend
  User.findOne({username: userName}, function(err, user) {
    if(err) return next(err);
    if(!user) return res.send(404);

    // Get friend ID & user ID
    var friendId = user.id;
    var myself = req.user._id;




    // Add to friendlist
    User.findById(myself, function(err, user2) {
      if(err) return next(err);
      if(!user2) return res.send(404);

      user2.friendlist.push(friendId);
      user2.save(function(err) {
        if (err) return res.send(400);

        res.send(200);
      });
    })

    // res.json({me: myself, friend: friendId});



  });








};

// delete friend
exports.deleteFriend = function(req, res) {
  res.json({message: 'This is the deleteFriend function.'});
};

exports.testFunction = function(req, res) {
  res.json({message: 'This is the test fucntion.'});
};
