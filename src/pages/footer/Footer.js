import React from 'react';
import classes from './Footer.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import MyAuxillary from '../../hoc/MyAuxillary';

const Footer = () => {
    const F = require('../../assests/footer.JPG').default;
    return(
        <div id="footer-container">
            
         <img src={F} style={{width:'100%',height:400}} />
        </div>
    )
}

export default Footer;