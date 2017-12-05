'use strict';

var mongoose = require('mongoose'),
    Car = mongoose.model('Cars');


    // Working
    exports.list_all_cars = function (req, res) {
        Car.find({}, function (err, car) {
        if (err)
            res.send(err);
        res.json(car);

    });
},
// Working
    exports.create_a_car = function (req, res) {
        var new_car = new Car(req.body);
        new_car.save({},function (err, car) {
            if (err)
            res.send(err);
        res.json(car); 
        })
    },
    // Working
    exports.read_a_car = function (req, res) {
        Car.findById(req.params.carId, function (err, car) {
            if (err)
                res.send(err);
            res.json(car);
        });
    },
    // Not tested
    exports.update_a_car = function (req, res) {
        Car.findOneAndUpdate({ _id: req.params.carId }, req.body,
            { new: true }, function (err, car) {
                if (err)
                    res.send(err);
                res.json(car);
            });
    },
    // Not Working??
    exports.delete_a_car = function (req, res) {
        Car.findOneAndRemove({ carId: req.params.carId }, function (err, car) {
                if (err)
                    res.send(err);
                res.json(car);
            });
    }
