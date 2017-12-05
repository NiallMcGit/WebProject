'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CarSchema = new Schema({
    Created_date:{
        type: Date,
        default: Date.now
    },
    carId: {
        type: Number
    },
    carMake:{
        type: String,
        default: 'Make not entered'
    },
    carModel:{
        type: String,
        default: 'Model not entered'
    },
    carYear:{
        type: String,
        default: 'Year not entered'
    },
    carColour:{
        type: String,
        default: 'Colour not entered'
    },
    carMileage:{
        type: String,
        default: 'Mileage not entered'
    },
    carPrice:{
        type: Number,
        default: 0
    },
    carDescription:{
        type: String,
        default: 'Description not entered'
    },
    FuelType:{
        type: String,
        default: 'Fuel not entered'
    },
    imageURL:{
        type: String,
        default: 'No image url'
    }
});

module.exports = mongoose.model('Cars', CarSchema);