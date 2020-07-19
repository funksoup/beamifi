import React from 'react'
import Team from '../layout/Team/Team';
import ContactUs from '../layout/ContactUs/ContactUs';
import Footer from '../layout/Footer/Footer';
import 'fontsource-roboto';


const About = () => {
    return (
        <div>
          <h1 className="text-center mt-3"><span style={{color: "#5394a0"}}>About Beamifi</span></h1>
          <p>
          Beamifi is a video chat app that enables <strong>optimal remote collaboration</strong> through asynchronous video conversations, so you can fully participate in conversations regardless of time zone and ability to meet in real-time.
          </p>

          <h4 className="text-center" padding-top="20px">Can't make the next Zoom meeting? No problem.</h4>
          <p className="text-center"><strong><span style={{color: "#5394a0"}}>Meaningfully communicate</span></strong> ideas about projects by sending quick video messages for feedback and input.<br/> 
          Create videos and <strong><span style={{color: "#5394a0"}}>share thoughts without having to attend meetings</span></strong> or write long emails. <br/> 
          Send <strong><span style={{color: "#5394a0"}}>quick and easy video conversations</span></strong> as effortlessly as sending a text chat. 
          </p>
          
        <h3 className="text-center">Ramp up your remote collaboration with Beamifi</h3>

          <h2 className="text-center"><span style={{color: "#5394a0"}}>#RampItUp</span></h2>

         {/* <h1 className="text-center mt-4">Our Team</h1>
          <h4 className="text-center">Meet Our Awesome Team Members</h4>  */}
          <div className="row">
          <Team />
          </div>
          <h1 className="text-center mt-3">Questions? Comments? Contact Us!</h1>
          <ContactUs />
          <Footer />
        </div>
    )
}

export default About;