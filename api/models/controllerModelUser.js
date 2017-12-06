'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    Created_date:{
        type: Date,
        default: Date.now
    },
    userID: {
        type: Number
    },
    userFirstName:{
        type: String,
        default: 'Make not entered'
    },
    userLastName:{
        type: String,
        default: 'Model not entered'
    },
    userEmail:{
        type: String,
        default: 'Year not entered'
    },
    userPassword:{
        type: String,
        default: 'Colour not entered'
    }
});
module.exports = mongoose.model('Users', UserSchema);