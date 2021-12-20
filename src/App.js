
import './App.css';
import logo from './images/logo.png';
import logo2 from './images/logo2.png';
import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";


function App() {
 
  return (
    <div>
    
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <h1 className="title">Aymen Bouazzi</h1>
      <br />
      <img src={logo} className="logo" alt="" />
      
      <img src={logo2} className="logo2" alt="" />
    </div>
   
    <div className="App">
      <h1>Youtube Embed</h1>
      <YoutubeEmbed embedId="xIBiJ_SzJTA" />
    </div>
  </div>
  );
}

export default App;
