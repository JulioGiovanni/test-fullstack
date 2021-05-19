//Main imports
import React from 'react'

//Own imports
import { Carousel } from './carousel'
import { Form } from './form'

//Style
import '../../style/form-style.css'

export const Register = () => {
    return (
        <div className="wrapper">
            
            <div className="carousel">
            <Carousel/>
            </div>

            <div className="register">
            <Form/>
            </div>
            
        </div>
    )
}
