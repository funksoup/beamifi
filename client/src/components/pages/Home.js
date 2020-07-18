import React, { useContext,useEffect } from 'react'
import Join from '../../components/Join/Join'
import AuthContext from '../../context/auth/authContext'

const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(()=> {
        authContext.loadUser();
        // eslint-disable-next-line
    },[])
    return (
        <>
        <Join/>
        <Join/>
        <Join/>
        <Join/>
        <Join/>
        <Join/>
        <Join/>
        <Join/>
     
        </>
    )
}

export default Home;