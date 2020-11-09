const {
    User
} = require('../models');

const CustomerController = {
    showAll(req,res){
        User.findAll()
        .then(users => res.send(users))
        .catch(error => {
            console.error(error);
            res.status(500).send({
                message: 'There was a problem recovering customers'
            })
        })
    }
}

module.exports = CustomerController;