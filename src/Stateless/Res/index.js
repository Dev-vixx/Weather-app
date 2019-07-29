import React from 'react';
import './result.css';
import exit from "../../assets/icons/cross.svg";
// FIXME:
// remind me to import my icon packs from the asset folder before pushing to GIThub
export const Result = (
    {description,result,flag,longitude,latitude,pressure,humidity,display,close,
    temp,temp_min,temp_max,sea_level,grnd_level,speed,deg,Country,location}) =>{
        
        // NOTE: the parameters are inherited from the Forecast component which depends on the state
        // the paameters in the Result function are objects which i destructured using ES2017 shorthand
       

    return(
        <div className={display === true ? "modal abs" : "hd"} style={{paddingTop: "70px"}}>
            {/* close botton */}
            <div onClick={close} className="close" title="Close">
                <img src={exit} alt="Close"/>
            </div>
            <h2>{description}</h2>
            <img src={flag} alt={location} style={{width: "200px"}}/>
        </div>
        
    )
}

// loader file
export const  Loader = ({show}) =>{
    let style = {
        position:"absolute",
        top: 0,zIndex: "12",
        width: "100%",
        height: "100vh",
        paddingTop: "190px",
        backgroundColor: "#ff8a6598",
        transition: "all .6s ease-out",
        color: "#000",
        // conditional display
        display: show? "block" : "none"};
    return(
        <div style={style}>
            <div className="lds-dual-ring"></div>
        </div>
    )
} 
