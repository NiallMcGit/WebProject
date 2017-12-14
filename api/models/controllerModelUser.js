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
        default: 'First name not entered'
    },
    userLastName:{
        type: String,
        default: 'Last name not entered'
    },
    userEmail:{
        type: String,
        default: 'Email not entered'
    },
    userPassword:{
        type: String,
        default: 'Password not entered'
    }
});
module.exports = mongoose.model('Users', UserSchema);