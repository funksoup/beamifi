import React, { useState, useContext, useEffect }from 'react';
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

        if(error === 'User already exists') {
         setAlert(error, 'danger');
         clearErrors();
    }

    // eslint-disable-next-line
}, [error, isAuthenticated, props.history]);


    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = user;

    const onChange = e => setUser ({...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if(name === '' || email === '' || password === '') {
            setAlert('Please enter all fields', 'danger')
        } else if (password !== password2) {
            setAlert('Passwords do not match', 'danger');
        } else {
            register({
                name,
                email,
                password
            });
    }
};
    return (

        <div className="row">
        <div className='col-md-8'>
        <img className='responsive-img' src={removebg} alt="backgroundImg" />
      </div>



        <div className='col-md-4 form-container mt-5 pt-5'>
        <h1 className="text-center">
            Account <span className="text-primary">Register</span>
        </h1>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                {/* <label htmlFor="name">Name</label> */}
                <input type="text" name="name" style={{borderRadius: "5px"}} value={name} onChange={onChange} required placeholder="Enter your name"/>
            </div>
            <div className="form-group">
                {/* <label htmlFor="email">Email Address</label> */}
                <input type="email" name="email" style={{borderRadius: "5px"}} value={email} onChange={onChange} required placeholder="Enter your email"/>
            </div>
            <div className="form-group">
                {/* <label htmlFor="password">Password</label> */}
                <input type="password" name="password" style={{borderRadius: "5px"}} value={password} onChange={onChange} required minLength="6" placeholder="Enter your password"/>
            </div>
            <div className="form-group">
                {/* <label htmlFor="password2">Confirm Password</label> */}
                <input type="password" name="password2" style={{borderRadius: "5px"}} value={password2} onChange={onChange} required minLength="6" placeholder="Confirm your password"/>
            </div>
            <input type="submit" value="Register" className="btn btn-primary btn-block" />
        </form>
            
        </div>
        </div>
    )
}

export default Register;