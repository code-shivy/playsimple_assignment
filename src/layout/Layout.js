import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import MyAuxillary from '../hoc/MyAuxillary';
import Footer from '../pages/footer/Footer';
import Games from '../pages/games/Games';
import HayDay from '../pages/hayday/HayDay';
import Header from '../pages/header/Header';
import Home from '../pages/home/Home';
//import classes from './Layout.css';

const Layout = (props) => (
    
    <div >
        <Header />
        
        {/* <h1>hello there!!</h1> */}
        {/* <img src={ require("../assests/supercell.png")}  style={{height:140, width:136}} /> */}
        {/* <div>Toolbar</div>*/}
        <div >
            <Router>
                <Switch> 
                    <Redirect exact from="/" to="/homes" />
                    <Route  path="/games/hayday" component={HayDay} />
                    <Route exact path="/games" component={Games} />
                    <Route exact path="/homes" component={Home} /> 
                   
                </Switch>
            </Router>
           
        </div> 
        <Footer/>
    </div>
)

export default Layout;