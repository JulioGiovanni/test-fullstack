//Main imports
import React from 'react'

//Styles
import '../style/login-style.css'

export const NewPassword = () => {
    return (
        <div className="container">
            <div className="center">
                <div class="card">
                    <div class="card-body">
                        <div style={{paddingBottom:"30px"}}>
                            <h5 style={{textAlign: 'center'}}>Escribe una Nueva Contraseña 🔐</h5>
                            <small className="text-muted">Ingresa una contraseña y guárdala en un lugar seguro</small>
                        </div>

                        <form action="">
                            <div className="form-group ">
                                <label for="password">Nueva Contraseña</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text span-background"  ><i class="fas fa-lock"></i></span>
                                    </div>
                                    <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="password">Confirmar Contraseña</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text span-background"  ><i class="fas fa-lock"></i></span>
                                    </div>
                                    <input type="password" className="form-control" id="password" placeholder="Confirma tu contraseña"/>
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
