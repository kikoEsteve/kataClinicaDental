const {
    User,
    Appointment,
    Sequelize
} = require('../models/index.js');

const {
    Op
} = Sequelize;
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');
const user = require('../models/user.js');
const UserController = {
    getAll(req,res){
        // console.log("entra aqui");
        User.findAll({
            include: [{
                model: Appointment
            }]
        })
        .then(users=> res.send(users))
        .catch(error => {
            console.error(error);
            res.status(500).send({
                message: "There was a problem. No users found"
            })
        })
    },
    async signup(req,res){
        try {
            // console.log("ALGOPORPONER")
            req.body.password = await bcrypt.hash(req.body.password, 9);
            const user = await User.create(req.body);
            res.status(201).send(user)
        } catch (error) {
            console.error(chalk.red(error))
            res.status(400).send({ message: 'There was a problem trying to register the user', error })
        }
    },
    async login(req,res) {
        try {
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            })
            if (!user) {
                return res.status(400).send({
                    message: 'Wrong credentials'
                });

            }
            const isMatch = await bcrypt.compare(req.body.password, user.password)

            if (!isMatch) {
                return res.status(400).send({ message: 'Wrong credentials'});
            }
            const token = jwt.sign({
                id: user.id
            }, 'noclones', {
                expiresIn: '2y'
            })
            res.send({
                user,
                token,
                message: 'Successfully logged in'
            });
        } catch (error) {
            console.error(chalk.red(error))
            res.status(400).send({
                message:'There was a problem trying to login the user', error
            });
        }
    }
}

module.exports = UserController;