const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user-model');
const { generateJWT } = require('../helpers/jwt');

const crearNuevoUsuario =  async (req,res = response) =>{

    const { email, password } = req.body;

    try {
        
        let user = await User.findOne({email})

        if (user){
            return res.status(400).json({
                ok:false,
                msg: 'el usuario ya existe'
            })
        }
            user = new User(req.body)
            //Encriptar contraseña
            const salt = bcrypt.genSaltSync();
            user.password = bcrypt.hashSync(password,salt);

            await user.save()

            //Generar Token
            const token = await generateJWT(user.id,user.fullName);
            
            res.status(201).json({
                ok: true,
                msg: 'Usuario creado',
                token
            })
        

    
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error'
        })
    }


}

const iniciarSesion = async (req,res) =>{
    const {email, password} = req.body;

    try {
        
        let user = await User.findOne({email})

        if (!user){
            return res.status(400).json({
                ok:false,
                msg: 'el usuario no existe'
            })
        }
        const validPassword = bcrypt.compareSync(password,user.password)

        if(!validPassword){
            return res.status(400).json({
                ok:false,
                msg: 'Password incorrecto'
            })
        }

        //Generar JWT
        const token = await generateJWT(user.id,user.fullName);

        res.json({
            ok: true,
            uid: user.id,
            name: user.fullName,
            token
        })

    
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error'
        })
    }

}

const revalidarToken = async (req,res)=>{
    const uid = req.uid;
    const name = req.name
    const token = await generateJWT(uid,name)

    res.json({
        ok: true,
        token
    })
}

module.exports = {
    crearNuevoUsuario,
    iniciarSesion,
    revalidarToken
}