const Router = require('express');
const carController = require('../controllers/car.controller');
const router = new Router();

router.get('/cars', carController.getCars);

module.exports = router;
