//Main imports
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { useForm } from "react-hook-form";
import axios from "axios";

//Own imports
import { startLogin } from '../../actions/auth';

//Styles
import '../../style/login-style.css'

export const Login = () => {
    const [Errors, setErrors] = useState([])
    const dispatch = useDispatch();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = ({email,password}) => {
        dispatch(startLogin(email,password));

        axios.post('http://localhost:8080/auth/login',{
            email,
            password
        })
        .then(res=>console.log(res))
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
    console.log(Errors)
    return (
        <div className="container">
            <div className="center">
                <div class="card">
                    <div class="card-body">
                        <h5 style={{textAlign: 'center'}}>¡Hola! bienvenido de nuevo 👋🏻</h5>
                        <small className="text-muted">Ingresa tus credenciales para acceder a la plataforma</small>

                        <div className="text-center py-4" >
                            <button className="btn btn-outline-light">  
                            <div className="input-group-prepend " >
                                <span>
                                    <img width="20px" style={{marginTop:"",marginRight:"20px"}} alt="Google sign-in" 
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                                </span>
                                <p className="font-color my-auto" > Iniciar Sesión Con Google</p>
                            </div>
                            </button>
                        </div>

                        <div >
                        <small className="text-muted">      
                            <div className="linea">&nbsp;</div>
                            <div className="leyenda">O Inicia sesión con tu correo</div>
                            <div className="linea">&nbsp;</div>
                        </small>
                    </div>
                    {Errors && (
                        <div className="errors">
                            <p className="errors-text" >{Errors.msg}</p>
                        </div>
                    )}
                        <form onSubmit={handleSubmit(onSubmit)} className="pt-3">
                            <div className="form-group">
                                <label htmlFor="email">Correo Electrónico</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" style={{backgroundColor: "#fff"}}><i class="far fa-envelope"></i></span>
                                    </div>
                                    <input {...register("email", { required: true })} type="email" className="form-control" id="email" placeholder="Ingresa tu correo electrónico"/>
                                    {errors.email?.type === 'required' && (<small className="error">Ingrese un correo electrónico válido</small>)}
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Contraseña</label>
                                <label htmlFor="password" style={{paddingLeft:"10px", textAlign: "end"}}><small><a href="/reset">¿Olvidaste tu contraseña?</a></small></label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" style={{backgroundColor: "#fff"}} ><i class="fas fa-lock"></i></span>
                                    </div>
                                    <input {...register("password", { required: true,min:8 })} type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña"/>
                                    {errors.password?.type === 'required' && (<small className="error">Debes especificar una contraseña para tu cuenta</small>)}
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Iniciar Sesión</button>
                        </form>
                        <p style={{paddingTop: "20px"}}>¿Aún no tienes cuenta?  <a href="/">Crea tu cuenta</a> </p>

                    </div>
                </div>
                <small className="text-muted" style={{textAlign:'center'}} >Todos los derechos reservados</small>
            </div>
        </div>
    )
}
