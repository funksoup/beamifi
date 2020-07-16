import React, { useContext,useEffect } from 'react'
import SignIn from '../../components/Join/Join'
import AuthContext from '../../context/auth/authContext'

const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(()=> {
        authContext.loadUser();
        // eslint-disable-next-line
    },[])
    return (
        <>

        <SignIn/>
     
        </>
    )
}

export default Home;