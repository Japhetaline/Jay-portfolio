import React from 'react';
import '../About/about.css'

function about() {
  return (
    <div>
        <div className="about" id="about">
        <div className="content">
          <div className="title"><span>About Me</span></div>
            <div className="topic"><b>Designing Is My Passion</b> </div>
            <p>I'm a front-end developer who knows how to use code to translate design into reality.
                 I have sufficient corporate experience and great technical aptitude for challenging web-based solutions.
                  I'm skilled at using React to write well-designed, testable, and efficient code.
                   I'm also highly skilled in JavaScript, React, HTML, and CSS. 
                   I'm determined to learn a lot and make a significant contribution to the goals and objectives of any organisation I work with.
            </p> <br />
            <div className="button">
                <a href="https://drive.google.com/file/d/15FR9CThWun9R0vDttWSGrDQn8h4Btfne/view?usp=sharing">Download Resume</a>
            </div>
        
        </div>
      </div>
    </div>
  )
}

export default about