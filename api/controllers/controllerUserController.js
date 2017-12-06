'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('Users');

    // Working
    exports.list_all_users = function (req, res) {
        User.find({}, function (err, car) {
        if (err)
            res.send(err);
        res.json(car);
        });
    
    },
    exports.create_a_user = function (req, res) {
        var new_user = new User(req.body);
        new_user.save({},function (err, user) {
            if (err)
            res.send(err);
        res.json(user); 
        })
    },
    exports.read_a_userId = function (req, res) {
        User.findById(req.params.userId, function (err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    }