import React from 'react';
// import MyAuxillary from '../hoc/MyAuxillary';
import classes from './Home.css';

const Home = (props) => {
    //const topImage = require('../../assests/MainPage.jpeg')
    let superHero = require('../../assests/top_image.JPG').default;
    let hayDay = require('../../assests/middle_image.JPG').default;
    let lostCrowded = require('../../assests/centre_image.JPG').default;
    let game = require('../../assests/bottom_image.JPG').default;
    let games = require('../../assests/games.JPG').default;
    let career = require('../../assests/careers.JPG').default;
    return(
        <div nogutters className="home-container">
            <div className="superHero">
            <img src={superHero} style={{width:'100%',height:550,right:0,left:0,top:0 }} />
            <img src={hayDay} style={{width:'100%',height:420,marginTop:40 }} />
            <img src={lostCrowded} style={{width:'100%',height:450,marginTop:40  }} />
            <img src={game} style={{width:'100%',height:450,marginTop:40,marginBottom:40 }} />
            <img src={games} style={{width:'100%',height:450,marginTop:40 }} />
            <img src={career} style={{width:'100%',height:450 }} />
            </div>
            
        </div>
    )
}

export default Home;