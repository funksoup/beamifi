import React, { Component } from "react";
import bg from "../../asset/bg.png";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import './style.css'

export default class Header extends Component {
  componentDidMount() {
    M.Modal.init(this.Modal);
  }
  render() {
    return (
      <div className='row'>
        <div className='col s12 m6'>
          <img className='responsive-img' src={bg} />
        </div>
        <div className='col s12 m6' id="heading">
          <h4 className='font'>
            <b>Ramp Up Your Remote Collaboration</b>
          </h4>
          <h1 className='title blue-text text-darken-4'>
            with
            <u>
              <span className='orange-text text-accent-3 i-line'>Beamifi</span>
            </u>{" "}
          </h1>
          <p className='para'>
          Beamifi is a video chat app that enables optimal remote collaboration through video communication, so you can fully participate in conversations.
      
          </p>
          <h6 className='font'>
            <b>Join Us Today</b>
          </h6>
          <p className='para'>
          RampItUp with Beamifi
          </p>
          <a
            href='#get'
            className='btn btn-header white-text text-darken-4 orange accent-3 modal-trigger'
            data-target='modal1'
          >
            Let's start
          </a>
        </div>

        <div>
          <div
            ref={(Modal) => {
              this.Modal = Modal;
            }}
            id='modal1'
            className='modal'
          >
            <div className='modal-content'>
              <h4 className='font'>The Offer Is Coming Soon!</h4>
              <p className='para'>
                Thanks For You Concern, but we're under development!
              </p>
            </div>
            <div className='modal-footer'>
              <a
                href='#close'
                className='btn btn-header modal-close white-text teal accent-3'
              >
                Close
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}