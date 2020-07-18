import React from 'react';
import { Link } from 'react-router-dom';


import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <h4>{room} room</h4>
    </div>
    <div className="rightInnerContainer">
      <Link to="/" className="btn btn-light">Back</Link>
    </div>
  </div>
);

export default InfoBar;