const router = require('express').Router();
const UserController = require('../controllers/UserController');

//Route to show all users
router.get('/', UserController.getAll);
router.post('/signup', UserController.signup);
router.post('/login', UserController.login);
// router.post('/logout', UserController.logout);

// router.put('/update/:id', UserController.update); 
// router.delete('/user/:id', UserController.delete); 


module.exports = router;