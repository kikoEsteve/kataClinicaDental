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
                as: 'doctor'
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
    },
    update(req,res) {
        req.body.appointmentId = req.appointment.id;
        Appointment.update(req.body)
        .then(appointment => res.status(201).send(appointment))
        .catch(error => {
            console.error(error);
            res.status(500).send({ message: 'There was a problem updating the appointment'})
        })
    },
    delete(req,res) {
        req.body.appointmentId = req.appointment.id;
        Appointment.destroy({
            where: { id: appointmentId }
        })
        .then(appointment => res.status(201).send(appointment))
        .catch(error => {
            console.error(error);
            res.status(500).send({ message: 'There was a problem trying to delete the appointment'})
        })
    }
}


module.exports = AppointmentController;