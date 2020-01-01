import React from 'react';
import { NavLink } from 'react-router-dom';

function Slider(){
    return(
        <div id="slider">
            <div id="slidertext">
            <h3>Feel like home</h3>
            <br />
            <h1>GOOD LOOK GUARANTEED</h1><br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, sint. Illum reprehenderit eius fugit et est vel, voluptatem facere illo. Voluptas nihil porro optio animi totam eaque deleniti dolores quasi.</p><br />
            <button className="btn"><NavLink to="/contact">Make an appointment</NavLink></button>&nbsp;&nbsp;
            <button className="btn"><NavLink to='/contact'>Contact Us</NavLink></button>
            </div>
            
            <div id="sliderimg"></div>
        </div>
    )
}
export default Slider;