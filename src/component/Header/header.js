import React from 'react'
import '../Header/header.css'

function header() {
  return (
        <div className='section'>
            <div className="home" id="home">
            <div className="home-content">
            <div className="text">
              <div className="text-one">Hello,</div>
              <div className="text-two">I'm Damassoh Japhet</div>
              <div className="text-three">Curative Front-End Developer</div>
              <div className="text-four">From Lagos, Nigeria</div>
            </div>
            <div className="button">
              <button>
                <a href="#contact">Hire Me</a>
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default header