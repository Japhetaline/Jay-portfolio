import React from 'react';
import '../Skills/skills.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

function Skills() {
  return (
    <div>
        <div class="skills" id="skills">
        <div class="content">
          <div class="title"><span>My Skills</span></div>
          <div class="skills-details">
            <div class="text">
              <div class="topic"> <strong>Skills Reflects Our Knowledge</strong></div>
              <p>An empowered organisation is one in which individuals have the knowledge, skill, desire, and opportunity to personally
                 succeed in a way that leads to collective organisational success.</p>
              <div class="experience">
                <div class="num">2</div>
                <div class="exp">Years Of <br /> Experience</div>
              </div>
            </div>
            <div class="boxes">
              <div class="box">
                <div class="topic"> <strong>HTML</strong> </div> <br />
                <div className='icon'><FontAwesomeIcon icon={faHtml5} /></div> 
              </div>
              <div class="box">
                <div class="topic"><strong>CSS</strong> </div> <br />
                <div className='icon'><FontAwesomeIcon icon={faCss3} /></div>
              </div>
              <div class="box">
                <div class="topic"> <strong>JavScript</strong></div> <br />
                <div className='icon'><FontAwesomeIcon icon={faJs} /></div>
              </div>
              <div class="box">
                <div class="topic"> <strong>React.js</strong></div> <br />
                <div className='icon'><FontAwesomeIcon icon={faReact} /></div>
              </div>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Skills