//Main imports
const { Router } = require('express');
const { check } = require('express-validator');
const { validator } = require('../middlewares/validator')
const router = Router();

//Controllers
const { 
    crearNuevoUsuario,
    iniciarSesion,
    revalidarToken
    } = require('../controllers/auth');
const { revalidateJWT } = require('../middlewares/revalidateJWT');

//Get Routes
router.get('/renew',revalidateJWT,revalidarToken)


//Post Routes
router.post('/login',[
    check("email","El email es obligatorio").isEmail(),
    check("password","la contraseña tiene que tener al menos 8 caracteres").isLength({min:8}),
    validator
],iniciarSesion)


router.post('/register',[
    check("fullName","El nombre es obligatorio").not().isEmpty(),
    check("email","El email es obligatorio").isEmail(),
    check("password","la contraseña tiene que tener al menos 8 caracteres").isLength({min:8}),
    validator
],crearNuevoUsuario)




module.exports = router;