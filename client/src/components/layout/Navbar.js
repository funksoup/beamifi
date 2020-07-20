import React, { Fragment, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';
import authContext from '../../context/auth/authContext';
import logoImg from '../../asset/beamifilogo2.png'
import 'fontsource-roboto';


const Navbar = ({ title, icon }) => {

  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user, loadUser } = authContext;
  const { clearContacts } = contactContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);



  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
          <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/register'>Sign Up</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </Fragment>
  );

  return (
    <divs className='navbar bg-primary'>
      <h1 class="navbar-left">
        <Link to='/'>
        <img src={logoImg} style={{width: "130px"}}/>
        </Link>
      </h1>
      <ul style={{marginBottom:'0rem'}}>{isAuthenticated ? authLinks : guestLinks}</ul>
    </divs>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,

};

Navbar.defaultProps = {
  title: 'Beamifi',
  icon: 'fas fa-user-friends'
};

export default Navbar;