import React, {Component} from 'react';
import { Link } from "react-router";
import Torso from "./Torso.jsx";

class Nav extends Component {


  render () {
    return (

      <nav className="nav">
        <h1> Med-Diary </h1>
        <h4><Link to="/"><button>HOME</button></Link></h4>
        <h4><Link to="/login"><button>LOGIN</button></Link> </h4>
        <h4><Link to="/register"><button>Register</button></Link></h4>

      </nav>

    )
  }
}

export default Nav;
