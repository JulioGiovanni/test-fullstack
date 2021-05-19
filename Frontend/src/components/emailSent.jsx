//Main imports
import React from 'react'

//Own imports
import mailLogo from '../static/bro.jpg'

//Styles
import '../style/login-style.css'

export const EmailSent = ({email}) => {
    return (
        <div className="container">
            <div className="center">
                <div class="card">
                    <div class="card-body">
                        <div style={{paddingBottom:"30px"}}>
                            <h5 style={{textAlign: 'center'}}>¡Correo enviado a {email}! </h5>
                            <small className="text-muted">Consulta tu bandeja de entrada para reestablecer tu contraseña</small>
                        </div>
                        <img src={mailLogo} alt="email logo" style={{display:"block",margin:"auto"}}/>
                        <p style={{textAlign: 'center',padding:"20px"}}><a href="/emailsent">Volver a enviar correo</a></p>
                    </div>
                </div>
                <small className="text-muted" style={{textAlign:'center'}} >Todos los derechos reservados</small>
            </div>
        </div>
    )
}
