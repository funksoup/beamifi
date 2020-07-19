import React from 'react'
import Team from '../layout/Team/Team';
import ContactUs from '../layout/ContactUs/ContactUs';
import Footer from '../layout/Footer/Footer';

const About = () => {
    return (
        <div>
          <h1 className="text-center mt-3">About Beamifi</h1>
          <p className="my-1">
          Beamifi is a video chat app that enables optimal remote collaboration through asynchronous video conversations, so you can fully participate in conversations regardless of time zone and ability to meet in real-time.
          </p>

         {/* <h1 className="text-center mt-4">Our Team</h1>
          <h4 className="text-center">Meet Our Awesome Team Members</h4>  */}
          <div className="row">
          <Team />
          </div>
          <h1 className="text-center mt-3 pt-3">Questions? Comments? Contact Us!</h1>
          <ContactUs />
          <Footer />
        </div>
    )
}

export default About;