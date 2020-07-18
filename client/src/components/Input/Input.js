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



    <div class="input-group">
    <input
      className="input form-control"
      type="text"
      id="messageType"
      placeholder="Type a message..."
      value={message}
      style={{border: "none"}}
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