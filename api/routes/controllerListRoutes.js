'use strict';

module.exports = function(app){
    var carList = require('../controllers/controllerListController');

    // productsList Routes
    app.route('/cars')
    .get(carList.list_all_cars)
    .post(carList.create_a_car);

    app.route('/cars/:carId')
    .get(carList.read_a_car)
    .put(carList.update_a_car)
    .delete(carList.delete_a_car);
};