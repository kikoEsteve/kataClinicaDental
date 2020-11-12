const router = require('express').Router();
const AppointmentController = require('../controllers/AppointmentController');
const auth = require('../middleware/auth');

//Route to show all appointments
router.get('/', AppointmentController.getAll);
router.post('/', auth, AppointmentController.create)


module.exports = router;