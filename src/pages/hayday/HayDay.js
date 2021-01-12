import React, { useEffect, useState } from 'react';
// import MyAuxillary from '../hoc/MyAuxillary';
import classes from './HayDay.css';
import axios from 'axios';

const HayDay = (props) => {
    let topImage = require('../../assests/hayDay.jpg').default;
    let sideImage = require('../../assests/hayDaySide.jpg').default;
    let [text ,setTesxt]= useState('')
    
    useEffect(() => {
        loadData()
    },[])
    let loadData = async () =>{
        let apiUrl = 'https://ps-data-store.s3-us-west-2.amazonaws.com/frontend-assignment/assignment-paragh-1.json';
        
        var requestOptions = {
            method: 'Get',
            url: apiUrl,
            headers:{
               
                "Access-Control-Allow-Origin": "*"
            }
        };
        fetch(requestOptions)
            .then(res => res.json())
            .then(data =>{     
                console.log("abc",data) 
              })
            .catch(() => console.log("Can’t access " + apiUrl + " response. Blocked by browser?"));
       
    }

    useEffect(() => {
        loadData2()
    },[])
    let loadData2 = async () =>{
        let apiUrl = 'https://ps-data-store.s3-us-west-2.amazonaws.com/frontend-assignment/assignment-paragh-2.json';
        
        var requestOptions = {
            method: 'Get',
            url: apiUrl,
            headers:{
               
                "Access-Control-Allow-Origin": "*"
            }
        };
        fetch(requestOptions)
            .then(res => res.json())
            .then(data =>{     
                console.log("abc",data) 
              })
            .catch(() => console.log("Can’t access " + apiUrl + " response. Blocked by browser?"));
       
    }
    return(
        <div className="HayDay-container">
            <img src={topImage} style={{width:'100%',height:550}} />
            <img src={sideImage} style={{width:'50%',paddingTop:'5%',paddingRight:'5%'}}/>
            
        </div>
    )
}

export default HayDay;