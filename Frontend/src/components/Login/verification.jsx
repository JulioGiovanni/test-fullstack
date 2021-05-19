//Main imports
import React from 'react'

//Style
import '../../style/login-style.css'
export const Verification = ({correo = "test@test.com"}) => {
    return (
        <div className="verification">
            <div className="container">
                <div className="center">
                    <div class="card-verification">
                        <div class="card-body" >
                            <div style={{paddingBottom:"30px"}}>
                                <h5 style={{textAlign: 'center'}}>¡Verifica tu cuenta!</h5>
                                <small className="text-muted">Hemos enviado un correo a <strong>{correo}</strong> con tu código, 
                                ingrésalo a continuación</small>
                            </div>
                            <div className="inputs">
                                <input className="input-verify" maxLength="1" type="text"/>
                                <input className="input-verify" maxLength="1" type="text"/>
                                <input className="input-verify" maxLength="1" type="text"/>
                                <input className="input-verify" maxLength="1" type="text"/>
                            </div>
                            <p style={{textAlign: 'center',padding:"20px"}}><a href="/login">Volver a enviar el código</a></p>
                        </div>
                    </div>
                    <small className="text-muted" style={{textAlign:'center'}} >Todos los derechos reservados</small>
                </div>
            </div>
        </div>
    )
}
