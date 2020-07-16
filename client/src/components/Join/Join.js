import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">

      <div class="input-group">

      <input placeholder="Name" className="joinInput form-control" type="text" onChange={(event) => setName(event.target.value)} />
          <input placeholder="Room" className="joinInput form-control" type="text" onChange={(event) => setRoom(event.target.value)} />

      <div class="input-group-append">
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Join</button>
        </Link>
       </div>
      </div>
      </div>
    </div>
  );
}
