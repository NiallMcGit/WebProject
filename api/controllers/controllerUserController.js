'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('Users');

    // Working
    exports.list_all_users = function (req, res) {
        User.find({}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
        });
    
    },
    exports.create_a_user = function (req, res) {
        var new_user = new User(req.body);
        new_user.save({},function (err, user) {
            if (err)
            res.send(err);
        res.json(user); 
        console.log('user created');
    
        })
    },
    exports.read_a_userId = function (req, res) {
        User.findById(req.params.userID, function (err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    },
    exports.delete_a_user = function (req, res) {
        User.findOneAndRemove({ userID: req.params.userID }, function (err, user) {
                if (err)
                    res.send(err);
                res.json(user);
                console.log('user deleted');
            });
    }