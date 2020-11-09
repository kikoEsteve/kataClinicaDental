const router = require('express').Router();
const CustomerController = require('../controllers/customerController');

//Route to show all users
router.post('/showAll', CustomerController.showAll);

module.exports = router;