import React from 'react'
import styles from './Team.module.css'

const Team = () => (

    <div className={styles.cf} className={styles.teamcontainer}>
        <h1 className="text-center mb-3">Our Team</h1>
    <div className={styles.teammember}>
      <img className={styles.teamphoto} alt="Daniel" src="https://ca.slack-edge.com/TSVUWLRHS-UT24RGY5N-df27d43b7352-512"/>
      <h4>Daniel R</h4>
      <span>UI Designer entering the Full Stack Web Developer space</span>
      <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/danielm-rivera/" id="linkedin">
                    <i className="fab fa-linkedin-in"> </i>
                  </a>
    </div>


  
    <div className={styles.teammember}>
    <img className={styles.teamphoto} alt="Josephine" src="https://ca.slack-edge.com/TSVUWLRHS-USSLGB2CT-6259dda9d408-512"/>
      <h4>Josephine Dorado</h4>
      <span>Creative technologist with an entrepreneurial spirit and a focus on social impact</span>
      <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/funksoup/" id="linkedin" className="waves-effect waves-light" type="button" role="button">
                    <i className="fab fa-linkedin-in"> </i>
                  </a>
    </div>


 
    <div className={styles.teammember}>
    <img className={styles.teamphoto} alt="Kornajun" src="https://ca.slack-edge.com/TSVUWLRHS-USV2R1Y59-bf4edb039536-512"/>
      <h4>Kornajun Roy</h4>
      <span>Kornajun Roy is a web developer with a focus on mental health and spiritual well being</span>
      <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/kornajun-roy-2b25959/" id="linkedin" className="waves-effect waves-light" type="button" role="button">
                    <i className="fab fa-linkedin-in"> </i>
                  </a>
    </div> 




    <div className={styles.teammember}>
    <img className={styles.teamphoto} alt="Ryan" src="https://cdn.glitch.com/03279a54-ead6-43fe-840a-8180cf9f1fc1%2FRyan3.jpg?v=1595084062739"/>
      <h4>Ryan Fallon</h4>
      <span>Web developer, volunteering in non-profits that benefit differently-abled and mental health causes</span>
      <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/ryan-fallon-549a64126/" id="linkedin" className="waves-effect waves-light" type="button" role="button">
                    <i className="fab fa-linkedin-in"> </i>
                  </a>
    </div> 



    <div className={styles.teammember}>
    <img className={styles.teamphoto} alt="Phoebe" src="https://cdn.glitch.com/cd99f035-ecbc-4ddd-9a8c-d2f6b5fff534%2Ftwitterpic.jpg?v=1572969184446"/>
      <h4>Yaheng Wu</h4>
      <span>Web developer with a diverse background in accounting and information systems</span>
       <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/yahengwu/" id="linkedin" className="waves-effect waves-light" type="button" role="button">
                    <i className="fab fa-linkedin-in"> </i>
                  </a>
    </div> 
  
 </div>
)


export default Team;