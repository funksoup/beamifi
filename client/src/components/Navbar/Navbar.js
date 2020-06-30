import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import './style.css'

export default class Navbar extends Component {
  componentDidMount() {
    let sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});
  }
  render() {
    return (
      <div>
        <nav className='nav z-depth-0'>
          <div className='nav-wrapper'>
            <a href='#logo' className='brand-logo blue-text text-darken-4'>
            Beamifi
              <u>
                <span className='teal-text text-accent-3 i-line'></span>
              </u>
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <a
                  href='#home'
                  className='btn btn-nav transparent z-depth-0 blue-text text-darken-4'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  className='btn btn-nav transparent z-depth-0 blue-text text-darken-4'
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href='#contact'
                  className='btn btn-nav transparent z-depth-0 blue-text text-darken-4'
                >
                  Contact
                </a>
              </li>


            </ul>
            <a href='#menu' data-target='slide-out' className='sidenav-trigger'>
              <i className='blue-text text-darken-4 material-icons'>menu</i>
            </a>
          </div>
        </nav>
        <ul id='slide-out' className='sidenav'>
        <li>
            <a
              href='#home'
              className='btn btn-nav transparent z-depth-0 white-text text-darken-4 blue darken-4'
            >
              Home
            </a>
          </li>

          <li>
            <a
              href='#about'
              className='btn btn-nav transparent z-depth-0 white-text text-darken-4 blue darken-4'
            >
              About
            </a>
          </li>

          <li>
            <a
              href='#contact'
              className='btn btn-nav transparent z-depth-0 white-text text-darken-4 blue darken-4'
            >
              Contact
            </a>
          </li>

        </ul>
      </div>
    );
  }
}
