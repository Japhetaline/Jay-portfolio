import React from 'react';
import '../Contact/contact.css'

function Contact() {
  return (
    <div>
        <div className="contact" id="contact">
        <div className="content">
          <div className="title"><span>Contact Me</span></div>
          <div className="text">
            <div className="topic">Have Any Project?</div>
            <p> <strong>Gmail - Japhetdamassoh@gmail.com</strong></p>
            <p> <strong>WhatsApp - 08146360709</strong></p>
          </div>
          <div className="button">
            <a href="https://wa.me/2348146360709">Let's Chat</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact