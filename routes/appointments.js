const router = require('express').Router();
const AppointmentController = require('../controllers/AppointmentController');
const auth = require('../middleware/auth');

//Route to show all appointments
router.get('/appointment', AppointmentController.getAll);
router.post('/appointment', auth, AppointmentController.create);
router.put('/appointment', auth, AppointmentController.update);
router.delete('/appointment', AppointmentController.delete);



module.exports = router;