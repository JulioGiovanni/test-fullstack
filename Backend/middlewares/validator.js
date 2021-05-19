const { response } = require('express');
const { validationResult } = require('express-validator');

const validator = (req, res = response, next) => {

    //Manejo de errores 
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            error: errors.mapped()
        })
    }
    next();
}

module.exports = {
    validator
};