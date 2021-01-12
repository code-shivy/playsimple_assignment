import React, { useEffect } from 'react';
// import MyAuxillary from '../hoc/MyAuxillary';
import classes from './Games.css';

const Games = (props) => {
    let topImage = require('../../assests/games_top.JPG').default;
    let hayday = require('../../assests/hayDay_game.jpg').default;
    let clashofclans = require('../../assests/clashOfClans.JPG').default;
    let boomBoom = require('../../assests/boomBoom.JPG').default;
    let clashRoyale = require('../../assests/clashRoyale.JPG').default;
    let brawlStars = require('../../assests/brawlStars.JPG').default;
    return(
        <div className="games-container">
           <img src={topImage} style={{width:'100%',height:550 }}/>
           <div className="row">
                <div className="col-sm-6" 
                onClick={() => window.location = '/games/hayday'}
                style={{padding:10, cursor:"pointer",paddingLeft:110, top:20}}>
                    <img src={hayday} style={{height:450 }} />
                </div>
                
                <div className="col-sm-6"   
                    onClick={() => window.location = 'https://supercell.com/en/games/clashofclans/'} 
                    style={{padding:10, cursor:"pointer",paddingLeft:20,top:20}}>
                    <a> <img src={clashofclans} style={{height:450}} /></a>
                </div>
                
                <div className="col-sm-6" 
                    onClick={() => window.location = 'https://supercell.com/en/games/boombeach/'}
                    style={{padding:10, cursor:"pointer",paddingLeft:110,top:40}}>
                    <a> <img src={boomBoom} style={{height:450}} /></a>
                </div>

                <div className="col-sm-6"   
                    onClick={() => window.location = 'https://supercell.com/en/games/clashroyale/'} 
                    style={{padding:10, cursor:"pointer",paddingLeft:20,top:40}}>
                    <a> <img src={clashRoyale} style={{height:450}} /></a>
                </div>

                <div className="col-sm-6" 
                    onClick={() => window.location = 'https://supercell.com/en/games/brawlstars/'}
                    style={{padding:10, cursor:"pointer",paddingLeft:110,top:40,marginBottom:60}}>
                    <a> <img src={brawlStars} style={{height:450}} /></a>
                </div>

           </div>

        </div>
    )
}

export default Games;