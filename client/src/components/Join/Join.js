import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import AuthContext from '../../context/auth/authContext';
import './Join.css';

export default function Join() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user, loadUser } = authContext;

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">

      <div class="input-group">

      {/* <input placeholder="Name" className="joinInput form-control" type="text" onChange={(event) => setName(user.name)} /> */}
          <input placeholder="Enter Room Name" className="joinInput form-control" type="text" onChange={(event) => {setRoom(event.target.value);setName(user.name)}} />

      <div class="input-group-append">
        <Link target={"_blank"} rel="noopener noreferrer" onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} style={{backgroundColor: "#5394A0"}} type="submit">Join</button>
        </Link>
       </div>
      </div>
      </div>
    </div>
  );
}