import React from 'react';
import classes from './Header.css';
import { BrowserRouter, Route, Link, useHistory } from "react-router-dom";
import MyAuxillary from '../../hoc/MyAuxillary';

const Header = () => {
    let logo = require('../../assests/supercell.png').default;
    const history = useHistory();

    const openSlider = (e) => {
        console.log(e.target.innerText)
        console.log("open slider")
        let name = e.target.innerText
        
        if(name === "Games"){
            document.getElementById('gameSlider').style.height = '80px';
        }
        else if(name === "Careers"){
            document.getElementById('careerSlider').style.height = '80px';
        }
        else{
            document.getElementById('dotSlider').style.height = '80px';
        }
     }

    const maintainSlider = (section) => {
       
        let name = section
        
        let gameSliderHeight =  document.getElementById('gameSlider').style.height; 
        let carrerSliderHeight =  document.getElementById('gameSlider').style.height; 
        let dotSliderHeight =  document.getElementById('gameSlider').style.height; 
        if(name === "games" && gameSliderHeight !== 0){
            document.getElementById('gameSlider').style.height = '80px';
        }
        else if(name === "career" && carrerSliderHeight !== 0){
            document.getElementById('careerSlider').style.height = '80px';
        }
        else if (name === "dot" && dotSliderHeight !== 0){
            document.getElementById('dotSlider').style.height = '80px';
        }
       

    }

    const closeMaintainedSlider = (section) => {
       
        let name = section
        
        if(name === "games"){
            document.getElementById('gameSlider').style.height = '0px';
        }
        else if(name === "career"){
            document.getElementById('careerSlider').style.height = '0px';
        }
        else if (name === "dot"){
            document.getElementById('dotSlider').style.height = '0px';
        }
       

    }

    const closeSlider = (e) => {
        let name = e.target.innerText
        
        if(name === "Games"){
            document.getElementById('gameSlider').style.height = '0px';
        }
        else if(name === "Careers"){
            document.getElementById('careerSlider').style.height = '0px';
        }
        else{
            document.getElementById('dotSlider').style.height = '0px';
        }
    }

    return(
        <MyAuxillary>
            <div id="header-container" >
                <div className="row" style={{height:82}}>
                    <div className="col-sm-1"
                     onClick={() =>{window.location = '/homes'}}>
                        <span>
                        <img src={logo}  style={{width:80,height:80,paddingRight:10 }} />
                        </span>
                    </div>
                    <div className="col-sm-1"
                         className="mainnavItems"
                         onMouseEnter={(e) => openSlider(e)} 
                         onMouseLeave={(e) => closeSlider(e)}
                         
                         onClick={() =>{window.location = '/games'}}>
                        Games
                    </div>
                    <div className="col-sm-1" 
                        onMouseEnter={(e) => openSlider(e)} 
                        onMouseLeave={(e) => closeSlider(e)}
                        
                        onClick={() =>{window.location = '/careers'}}
                         className="mainnavItems">
                        Careers
                    </div>
                    <div className="col-sm-1" 
                        
                         className="mainnavItems">
                        Support
                    </div>
                    <div className="col-sm-1" 
                         className="mainnavItems"
                         onMouseEnter={(e) => openSlider(e)} 
                         onMouseLeave={(e) => closeSlider(e)}
                         >
                       <span 
                       style={{border:'1px solid rgb(43, 41, 41)',
                       borderRadius:6,padding:'0px 8px',
                       backgroundColor: "rgb(43, 41, 41)",
                       fontWeight:"bolder"}}>...</span>
                    </div>
                   <div className="col-sm-7 text-right">
                       <div className="row">
                           <div className="col-sm-11 text-right supercell" style={{height:82, borderRight: '1px solid grey' }} >
                           SUPERCELL <span >ID</span>
                           </div>
                           <div className="col-sm-1 supercell">
                               Search
                           </div>
                       </div>
                   </div>
                </div>
                
            </div>
            <div id="gameSlider" 
                 onMouseEnter={(e) => maintainSlider('games')} 
                 onMouseLeave={(e) => closeMaintainedSlider('games')}>
                <ul className="">
                    <li style={{cursor:'pointer'}} onClick={() =>{ window.location = '/games/hayday'}}  
                    className="spacing">
                       Hay Day
                    </li>
                    <li className="spacing">Clash of clans</li>
                    <li  className="spacing">Hay Day</li>
                    <li className="spacing">Hay Day</li>
                </ul>
            </div>
            <div id="careerSlider"
                 onMouseEnter={(e) => maintainSlider('career')} 
                 onMouseLeave={(e) => closeMaintainedSlider('career')}>
                <ul className="">
                    <li  className="spacing">B Day</li>
                    <li  className="spacing">B Day</li>
                   
                </ul>
            </div>
            <div id="dotSlider"
                 onMouseEnter={(e) => maintainSlider('dot')} 
                 onMouseLeave={(e) => closeMaintainedSlider('dot')}>
                <ul className="">
                    <li  className="spacing">C Day</li>
                    <li  className="spacing">C Day</li>
                </ul>
            </div>

        </MyAuxillary>
    )
}

export default Header;