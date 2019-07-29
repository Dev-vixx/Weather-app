import React from 'react';
import './landingPage.css';
import { Card } from "../../Stateful/Documentation/Card";
const LandingPage = ({RemoveDock, map}) =>
{

    
    return(
        <section>
            <div className="land _CNT" onClick={RemoveDock /* this function call makes the Dock to be hidden and it is inherited from the navbar class as a method */}>
            {/* grid layout to balamce the view of the ui */}
            <div className="gridx2">

            {/* an image to creat a friendly user friendliness */}
            <div className="wmp">
            <img src={map} className="map" alt="worldMap-img"/>
            </div>
            {/* Hero Header */}
            <div>
                    <h2>Weather Forecast</h2>
                    <h5>For Aviation Industry</h5>
            </div>
            </div>
        </div>
        <Card/>
        <div className="razor"></div>
        <div className="footer"> 
            <h4>Fuck css!!</h4>
        </div>
        </section>
    )
}


export default LandingPage;