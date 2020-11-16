const jwt = require('jsonwebtoken');
const {
    User
} = require('../models');

const auth = async(req,res,next)=>{
    try {
        const token = req.headers.authorization;
        const payload = jwt.verify(token, 'noclones');
        const user = await User.findByPk(payload._id);
        if(!user){
            return res.status(401).send({
                message: 'You are not allowed'
            })
        }
        req.user = user;
        next()
    } catch (error) {
        console.error(error)
        return res.status(401).send({
            message: 'You are not allowed',error
        })
    }
}

module.exports = auth;