import React from 'react';
import weather from "./weather.json";

const API_KEY = "99f8203d6873dd36603fed38db191646";

export default class App extends React.Component{

  state = {
    temperature : undefined,
    humidity : undefined,
    description : undefined,
    error : undefined
  }

  Weather = async(e) => {
    e.preventDefault();
    const Call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=CapeTown,SouthAfrica&appid=${API_KEY}&unitmetric`);
    const Data = await Call.json();

  render(){
   return(
       <div>
           temperature={this.state.temperature}
           city={this.state.city}
           country={this.state.country}
           humidity={this.state.humidity}
           description={this.state.description}
           error={this.state.error}
       </div>
   )
  }
   
}
