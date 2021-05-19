//Main imports
import React, { useState } from 'react'

import { useForm } from "react-hook-form";
import axios from "axios";

//Own imports


//Styles
import '../../style/form-style.css'

export const Form = () => {
    
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [Errors, setErrors] = useState([])

    const onSubmit = ({fullName, email,password}) => {
        

        axios.post('http://localhost:8080/auth/register',{
            fullName,
            email, 
            password            

        }).then(res=>console.log(res))
        .catch((err) => {
            console.log(err.response)

            if (err.response.data.error.email){
                return setErrors(err.response.data.error.email)
            }
            else if (err.response.data.error.password){
                return setErrors(err.response.data.error.password)

            }
            else if (err.response.data){
                return setErrors(err.response.data)
            }

            
        });
    }
  

    return (
        <div className="register-form">

            <h3>¡Empieza a gestionar tu equipo de trabajo!💼</h3>
            <small className="text-muted">Crea tu cuenta y empieza tu prueba gratis por 30 días</small>

            <div className="text-center py-4" >
                <button className="btn btn-outline-light">  
                        <div className="input-group-prepend " >
                            <span>
                                <img width="20px" style={{marginTop:"",marginRight:"20px"}} alt="Google sign-in" 
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                            </span>
                       <p className="font-color my-auto" > Registrarse con Google</p>
                        </div>
                </button>
            </div>

            <div >
                <small className="text-muted">      
                    <div className="linea">&nbsp;</div>
                    <div className="leyenda">O registrate con tu correo</div>
                    <div className="linea">&nbsp;</div>
                </small>
            </div>

            {Errors && (
                        <div className="errors">
                            <p className="errors-text" >{Errors.msg}</p>
                        </div>
                    )}

            <form className="pt-3" onSubmit={handleSubmit(onSubmit)} >
                <div className="form-group form-padding">
                    <label htmlFor="fullName">Nombre completo</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text span-background"  ><i className="far fa-user"></i></span>
                        </div>
                        <input {...register("fullName", { required: true })} className="form-control" id="fullName" placeholder="Ingresa tu nombre completo"/>
                        {errors.fullName?.type === 'required' && (<small className="error">Tu nombre es necesario para poder crear la cuenta</small>)}
                    </div>
                </div>
                <div className="form-group form-padding">
                    <label htmlFor="email">Correo Electrónico</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text span-background"  ><i className="far fa-envelope"></i></span>
                        </div>
                        <input {...register("email", { required: true })} type="email" className="form-control" id="email" placeholder="Ingresa tu correo electrónico"/>
                        {"\n"}{errors.email?.type === 'required' && (<small className="error">Ingrese un correo electrónico válido</small>)}
                    </div>
                </div>
                <div className="form-group form-padding">
                    <label htmlFor="password">Contraseña</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text span-background"  ><i className="fas fa-lock"></i></span>
                        </div>
                        <input {...register("password", { required: true,min:8 })} type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña"/>
                        {errors.password?.type === 'required' && (<small className="error">Debes especificar una contraseña para tu cuenta</small>)}
                    </div>
                </div>
                <div className="form-check form-padding">
                    <input {...register("checkbox",{ required: true})} type="checkbox" className="form-check-input" id="checkbox"/>
                    <label className="form-check-label" htmlFor="checkbox">Acepto las <a href="/">Políticas de Privacidad</a> </label>
                    {errors.checkbox?.type === 'required' && (<small className="error">Tiene que aceptar las potíticas de privacidad</small>)}
                </div>
                <button type="submit" className="btn btn-primary btn-block form-padding">Empezar mi prueba gratuita</button>
            </form>
            <p style={{textAlign: "center", paddingTop:"10px"}}>¿Ya tienes una cuenta? <a href="/login">Iniciar sesión</a> </p>

        </div>
    )
}
