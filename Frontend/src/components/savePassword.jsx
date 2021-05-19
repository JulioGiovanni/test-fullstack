//Main imports
import React from 'react'

//Own imports
import password from '../static/Gráfico.jpg'

//Styles
import '../style/login-style.css'

export const SavePassword = () => {
    return (
        <div className="container">
            <div className="center">
                <div class="card">
                    <div class="card-body">
                        <div style={{paddingBottom:"30px"}}>
                            <h5 style={{textAlign: 'center'}}>Nueva contraseña guardada  </h5>
                            <small className="text-muted">¡Tu contraseña ha sido reestablecida correctamente!</small>
                        </div>
                        <img src={password} alt="email logo" style={{display:"block",margin:"auto"}}/>
                        <p style={{textAlign: 'center',padding:"20px"}}><a href="/login">Ir a inicio sesión</a></p>
                    </div>
                </div>
                <small className="text-muted" style={{textAlign:'center'}} >Todos los derechos reservados</small>
            </div>
        </div>
    )
}
