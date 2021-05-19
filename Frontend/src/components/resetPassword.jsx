//Main imports
import React from 'react'

//Styles
import '../style/login-style.css'

export const ResetPassword = () => {
    return (
        <div className="container">
            <div className="center">
                <div class="card">
                    <div class="card-body">
                        <div style={{paddingBottom:"30px"}}>
                            <h5 style={{textAlign: 'center'}}>Restablecer contraseña 🔒</h5>
                            <small className="text-muted">Enviaremos un correo para reestablecer tu contraseña</small>
                        </div>

                        <form action="">
                            <div className="form-group">
                                <label for="email">Correo Electrónico</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text span-background"><i class="far fa-envelope"></i></span>
                                    </div>
                                    <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo electrónico"/>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Reestablecer mi contraseña</button>
                        </form>
                    </div>
                </div>
                <small className="text-muted" style={{textAlign:'center'}} >Todos los derechos reservados</small>
            </div>
        </div>
    )
}
