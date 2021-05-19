//Main imports
import React from 'react'

//Own imports
import image1 from '../../static/image1.png'
import separador from '../../static/separador.png'
import image3 from '../../static/firstImage.png'

//Styles
import '../../style/form-style.css'

export const Carousel = () => {
    return (
        <div className="carousel-form">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={image3} alt="First slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="font-color">¡Gestiona todos tus procesos desde aquí!</h5>
                            <p className="font-color">Puedes gestionar todos los procesos de tu empresa en donde quiera que estés desde nuestra app</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={separador} alt="Second slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="font-color">Todo está a un click de distancia</h5>
                            <p className="font-color">Toda la gestión de tu empresa desde tu dispositivo</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={image1} alt="Third slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="font-color">Lorem Ipsum</h5>
                            <p className="font-color"> Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
            </div>
        </div>
    )
}
