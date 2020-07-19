import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import 'fontsource-roboto';


const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <p>
              Please feel free to contact us at <a href="mailto:beamifi.team@gmail.com">beamifi.team@gmail.com</a>
              </p>
          </MDBCol>
          <MDBCol md="6">
            <ul>
              <li className="list-unstyled">
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Beamifi
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;