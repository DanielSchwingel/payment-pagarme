const express = require('express');

const routes = express.Router();
const TransactionController = require('../Controllers/TransactionController');
const CustomerController = require('../Controllers/CustomerController');

routes.get('/transactions', TransactionController.index);
routes.post('/transaction', TransactionController.create);

routes.get('/customers', CustomerController.index);
routes.post('/customer', CustomerController.create);



module.exports = routes;