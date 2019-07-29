import React from 'react';
import './App.css';
import AppNav from './AppNav/AppNav'; // importing the main navigation of the application
import {BrowserRouter} from 'react-router-dom';

class App extends React.Component {

  // the changeimage function is responsible for toggling of the images and updating stat

  render()
  {

      return (
       <BrowserRouter>
          <div className="App">
          <AppNav/>
        </div>
       </BrowserRouter>
      );
  }
}

export default App;


// https://api.weather.com/v3/wx/forecast/daily/5day?geocode=33.74,-84.39&format=json&units=e&language=en-US&apiKey=89551123ab2d4809951123ab2d58091a
// https://api.weather.com/v2/pws/observations/current?stationId=KMAHANOV10&format=json&units=e&apiKey=89551123ab2d4809951123ab2d58091a