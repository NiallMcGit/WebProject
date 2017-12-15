'use strict';

module.exports = function(app){
    var carList = require('../controllers/controllerListController');
    var users = require('../controllers/controllerUserController');

    // Car Routes
    app.route('/cars')
    .get(carList.list_all_cars)
    .post(carList.create_a_car);

    app.route('/cars/:carId')
    .get(carList.read_a_car)
    .put(carList.update_a_car)
    .delete(carList.delete_a_car);

    
    // User Routes
    app.route('/users')
    .get(users.list_all_users)
    .post(users.create_a_user)

    app.route('/users/:userID')
    .get(users.read_a_userId)
    .delete(users.delete_a_user)
};