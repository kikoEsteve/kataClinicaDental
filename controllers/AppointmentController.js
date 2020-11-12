const {
    Appointment,
    User,
    Sequelize
} = require('../models/index.js');

const {
    Op
} = Sequelize 
const AppointmentController = {
    getAll(req,res){
        Appointment.findAll({
            include: [User,{
                model: User,
                as: 'dtr'
            }],
            where: {
                date: {
                    [Op.lt]: Date.now()
                }
            }
        }).then(appointments => res.send(appointments))
        .catch(error => {
            console.error(error);
            res.status(500).send({ message: 'There was a problem finding an appointments'})
        })
    },
    create(req,res) {
        req.body.userId = req.user.id;
        Appointment.create(req.body)
        .then(appointment => res.status(201).send(appointment))
        .catch(error => {
            console.error(error);
            res.status(500).send({ message: 'There was a problem creating the appointment'})
        })
    }
}


module.exports = AppointmentController;