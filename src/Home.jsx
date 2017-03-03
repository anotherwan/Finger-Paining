import React, { Component } from 'react';
import { Link } from "react-router";

import maleBody from '../public/images/mainBodyGray.svg';
import headHead from '../public/images/headHead.svg';
import torsoMan from '../public/images/torsoMan.svg';
import armsArm from '../public/images/armsArm.svg';
import legsLeg from '../public/images/legsLeg.svg';

import Login from './Login.jsx';

class Home extends Component {

  bubbleStyle = {
    "border": "2px solid black",
    "borderRadius": "40px",
    "height": "80px",
    "width": "80px"
  }

  render () {
    if(localStorage.getItem('uid'))
      return (
        <div className="home">
          <img src={maleBody} alt="Body" />
          <Link to="/region/head">
            <img src={headHead} alt="Head" style={this.bubbleStyle}/>
          </Link>
          <Link to="/region/torso">
            <img src={torsoMan} alt="Torso" style={this.bubbleStyle}/>
          </Link>
          <Link to="/region/arms">
            <img src={armsArm} alt="Arms" style={this.bubbleStyle}/>
          </Link>
          <Link to="/region/legs">
            <img src={legsLeg} alt="Legs" style={this.bubbleStyle}/>
          </Link>
        </div>
      )
      else
        return (
          <Login />
        )
  }
}

export default Home;
