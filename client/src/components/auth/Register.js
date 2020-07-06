import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import removebg from "../../asset/removebg.png"

const Register = props => { 
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;

    const { register, error, clearErrors, isAuthenticated } = authContext;


    useEffect(() => {
        if(isAuthenticated) {
            props.history.push('/');
        }
        if(error==='User already exists') {
            setAlert(error, 'danger');
            clearErrors();
        }
        // eslint-disable-next-line
    },[error, isAuthenticated, props.history]);   

    const [user, setUser] = useState({
        name: '',
        email:'',
        password:'',
        password2:''
    });

    const { name, email, password, password2 } = user;

    const onChange = e => setUser({...user, [e.target.name]: e.target.value }); 

    const onSubmit = e => {
        e.preventDefault();

        if(name===''|| email===''||password==='') {
            setAlert('Please enter all fields', 'danger');
        } else if(password !== password2) {
            setAlert('Password do not match','danger')
        } else {
            register({
                name,
                email,
                password
            })
        }
        
    }

    return (

        <div className='row'>

        <div className='col-md-8'>
          <img className='responsive-img' src={removebg} alt="backgroundImg" />
        </div>


     
        <div className='col-md-4 mt-5 pt-3' id="heading"> 
        <div className="form-container">
            <h1 className="mt-4 text-center">
                Account <span style={{color: "#ff5e62"}}>Register</span>
            </h1>
            <form onSubmit={onSubmit}> 
                <div className="form-group">
                    {/* <label htmlFor="name">Name</label> */}
                    <input placeholder="Enter your name" type="text" name="name" value={name} onChange={onChange} required/>
                </div>

                <div className="form-group">
                    {/* <label htmlFor="email">Email Address</label> */}
                    <input placeholder="Enter your email address" type="email" name="email" value={email} onChange={onChange} required/>
                </div>

                <div className="form-group">
                    {/* <label htmlFor="password">Password</label>  */}
                    <input placeholder="Enter your password" type="password" name="password" value={password} onChange={onChange} required minLength="6"/>
                </div>

                <div className="form-group">
                    {/* <label htmlFor="password2">Confirm Password</label>  */}
                    <input placeholder="Confirm your password" type="password" name="password2" value={password2} onChange={onChange} required minLength="6"/>
                </div>

                <input type="submit" value="Register" className="btn btn-primary btn-block"/>

            </form>
        </div>
    </div>
    </div>
    )
}


export default Register;