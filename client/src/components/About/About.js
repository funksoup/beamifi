import React from "react";
import Navbar from '../Navbar/Navbar';

function About() {
  return (
    <div>
    <Navbar />
    


      <div className="container">
      <h1>Meet the Team!</h1>
      <div className="row">
        <div className="card-horizontal z-depth-4" id="team-member1">
          <div className="card-image">
            <img src="https://lorempixel.com/200/200/nature/6" alt="" className="responsive-img" id="team-member-1-img"/>
          </div>
            <div className="card-stacked">
              <div className="card-content"><p>I am teh best developer of all time!!!!!!</p></div>
              <div className="card-action"><a href="" ahref="#">Link to my github and linked in and etc</a></div>
            </div>
        </div>
        <div className="card-horizontal z-depth-4" id="team-member2">
          <div className="card-image">
            <img src="https://lorempixel.com/200/200/nature/6" alt="" className="responsive-img" id="team-member-2-img"/>
          </div>
            <div className="card-stacked">
              <div className="card-content"><p>I am teh best developer of all time!!!!!!</p></div>
              <div className="card-action"><a href="" ahref="#">Link to my github and linked in and etc</a></div>
            </div>
        </div>
        <div className="card-horizontal z-depth-4" id="team-member3">
          <div className="card-image">
            <img src="https://lorempixel.com/200/200/nature/6" alt="" className="responsive-img" id="team-member-3-img"/>
          </div>
            <div className="card-stacked">
              <div className="card-content"><p>I am teh best developer of all time!!!!!!</p></div>
              <div className="card-action"><a href="" ahref="#">Link to my github and linked in and etc</a></div>
            </div>
        </div>
        <div className="card-horizontal z-depth-4" id="team-member4">
          <div className="card-image">
            <img src="https://lorempixel.com/200/200/nature/6" alt="" className="responsive-img" id="team-member-4-img"/>
          </div>
            <div className="card-stacked">
              <div className="card-content"><p>I am teh best developer of all time!!!!!!</p></div>
              <div className="card-action"><a href="" ahref="#">Link to my github and linked in and etc</a></div>
            </div>
        </div>
        <div className="card-horizontal z-depth-4" id="team-member5">
          <div className="card-image">
            <img src="https://lorempixel.com/200/200/nature/6" alt="" className="responsive-img" id="team-member-5-img"/>
          </div>
            <div className="card-stacked">
              <div className="card-content"><p>I am teh best developer of all time!!!!!!</p></div>
              <div className="card-action"><a href="" ahref="#">Link to my github and linked in and etc</a></div>
            </div>
        </div>
      </div>




      </div>

    </div>
  );
}

export default About;