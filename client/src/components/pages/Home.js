import React, { useContext,useEffect } from 'react'
import Join from '../../components/Join/Join'
import AuthContext from '../../context/auth/authContext'
import styles from './Home.module.css'
import ParticlesBg from 'particles-bg'

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

        <ParticlesBg num={10} type="circle" bg={true}/>
        </>
    )
}

export default Home;