import React from 'react';
import '../Services/Services.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <div>
        <div className="services" id="services">
        <div className="content">
          <div className="title"><span>My Services</span></div>
          <div className="boxes">
            <div className="box">
              <div className='icon'><FontAwesomeIcon icon={faCode} /></div>
            <div className="topic text-primary">Web Devlopment</div>
            <p>
              HTML/CSS/JS,
              Git and Github,
              Browser DevTools,
              Bootstrap/ React,
              Programming Languages,
              Problem Solving and Searching.
             </p>
          </div>
            <div className="box">
            <div className='icon'><FontAwesomeIcon icon={faComments} /></div>
            <div className="topic text-primary">Researcher</div>
            <p>Project Management,
              Handling Budgets,
              Team Leading/Managing,
              IT skills.</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Services