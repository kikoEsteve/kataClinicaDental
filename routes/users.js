const router = require('express').Router();
const UserController = require('../controllers/UserController');

//Route to show all users
router.get('/', UserController.getAll);
router.post('/signup', function(req,res){
    UserController.signup });

router.post('/login', UserController.login);

router.put('/updateUser/:id', function(req,res){
    UserController.update }); 
router.delete('/user/:id', function(req,res) {
    UserController.delete }); 


module.exports = router;