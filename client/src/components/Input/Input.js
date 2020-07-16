import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
{/* 
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />

    <button className="sendButton" onClick={e => sendMessage(e)}>Send</button> */}



    <div class="input-group mb-3">
    <input
      className="input form-control"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
 
  <div class="input-group-append">
  <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
  </div>
</div>




  </form>
)

export default Input;