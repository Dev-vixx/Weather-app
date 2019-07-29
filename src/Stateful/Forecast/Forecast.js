import React from 'react';
import axios from 'axios';
import weather from './weather';
import './forecast.css';
import hero from '../../assets/vid/hero.mp4';
// importing the result of the forecast from its component
import { Result, Loader } from '../../Stateless/Res/';

export class Forecast extends React.Component
{
    close = (e)=>
    {
        this.setState({isLoading: false, showLoader: false, showForm: true})
        let search = document.querySelector("form");
        search.reset();
    }
    getWeather = (e) =>
    {
        e.preventDefault();
        this.setState({showLoader: true, showForm: false}) //displaying my loader component

        axios.get(`https://community-open-weather-map.p.rapidapi.com/weather?&id=2172797&units=%22metric%22+or+%22imperial%22&mode=xml%2C+html&q=${e.target.elements[0].value}%2C${e.target.elements[1].value}`,
        {headers: { "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com","X-RapidAPI-Key": "5198ccb3e0msh77b19f602615584p160202jsn87dff521a013"}
        })
        .then((res)=>
        {
            if(res.statusText === "OK")
            {
                return res.data;
            }
        })
        .then(forecast=>
        {
            this.setState({
                weather:  [forecast],
               showLoader: false

            })
        })
        .then(()=>
        {
            axios.get(`https://restcountries.eu/rest/v2/alpha/${this.state.weather[0].sys.country.toLowerCase()}`)
            .then(data=>
                {
                    this.setState({
                        weather: [
                            {
                                ...this.state.weather[0],
                                flag: data.data.flag,
                                sys: {
                                    "country": data.data.nativeName
                                }
                            }
                        ],
                        isLoading: true
                    })
                })
        }).catch((err)=>
        {
            alert("Opps!!, our server did not understand your request")
            this.close()
        })
    }
    // state
    state = weather;
    
    render()
    {
        let style = {
            paddingTop: `${this.props.topSpace+10}px`
        }
        return(
            <div className=" forecast">
                <video loop={true} mute="true" autoPlay={true}>
                    <source src={hero}></source>
                </video>

            <div id="overlay" style={style}>
            {/* this is overlay element and the query element */}

                <form onSubmit={this.getWeather} style={{display: this.state.showForm ? "" : "none"}}>
                    <div className="input">
                        <input type="text" name="state" placeholder="State or place"  required/>
                    </div>
                    <div className="input">
                        <input type="text" name="country" placeholder="Country" required/>
                    </div>
                    <div className="input_btn">
                        <input type="submit"  value="forecast" className="btn"/>
                    </div>
                </form>


                {/* loader */}
                <Loader show={this.state.showLoader}/>

                {/* distributing the weather forecast  result to the Result component for proper styling and rendering to the DOM */}
                <Result
                    close={this.close}
                    display={this.state.isLoading}
                    result={this.state.weather[0].weather[0].main}
                    flag={this.state.weather[0].flag}
                    description={this.state.weather[0].weather[0].description}
                    longitude={this.state.weather[0].coord.lon}
                    latitude={this.state.weather[0].coord.lat}
                    pressure={this.state.weather[0].main.pressure}
                    humidity={this.state.weather[0].main.humidity}
                    temp={this.state.weather[0].main.temp}
                    temp_min={this.state.weather[0].main.temp_min}
                    temp_max={this.state.weather[0].main.temp_max}
                    sea_level={this.state.weather[0].main.sea_level}
                    grnd_level={this.state.weather[0].main.grnd_level}
                    speed={this.state.weather[0].wind.speed}
                    deg={this.state.weather[0].wind.deg}
                    Country={this.state.weather[0].sys.country}
                    location={this.state.weather[0].name}
                />
            </div>




                
                {/* weather report here */}
                {/* this forecast should come up as a modal or it will depend on the state for actions FIXME: */}
                    {/* {this.state.weather} */}
                {/* <div>
                    <img src={this.state.weather[0].flag} alt={this.state.weather[0].sys.country} style={{width: "200px"}}/>
                    <p>weather result: {this.state.weather[0].weather[0].main} </p>
                    <p>description : {this.state.weather[0].weather[0].description} </p>
                    <h3>coordinates</h3>
                    <p>longitude : {this.state.weather[0].coord.lon}</p> 
                    <p>latitude : {this.state.weather[0].coord.lat}</p> 
                    <p>pressure : {this.state.weather[0].main.pressure}</p> 
                    <p>humidity : {this.state.weather[0].main.humidity}</p> 
                    <p>temp :    {this.state.weather[0].main.temp}</p> 
                    <p>temp_min : {this.state.weather[0].main.temp_min}</p> 
                    <p>temp_max : {this.state.weather[0].main.temp_max}</p> 
                    <p>sea_level : {this.state.weather[0].main.sea_level}</p>
                    <p>grnd_level : {this.state.weather[0].main.grnd_level}</p>
                    <h3>wind</h3>
                    <p>speed : {this.state.weather[0].wind.speed}</p>
                    <p>deg : {this.state.weather[0].wind.deg}</p> */}
                    {/* <h3>rain</h3> */}
                    {/* <p>Starting Time : {this.state.weather[0].rain.time}</p> */}
{/*                     
                    <h3>system info</h3>
                    <p>Country : {this.state.weather[0].sys.country}</p>
                    <p>location : {this.state.weather[0].name}</p>
                </div> */}
            </div>
        )
    }
}
