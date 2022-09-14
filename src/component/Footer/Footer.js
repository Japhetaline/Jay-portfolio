import React from "react";
import '../Footer/footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className ='name_container'>
        <h3 className ='name'>Damassoh Japhet Setonji</h3>
      </div>
      <div className= 'socials'>
        <a href="https://www.facebook.com/Japhetaline"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="https://twitter.com/Japhetaline?t=vR2bZhIPBpav9hI-vCA_Mw&s=09"><FontAwesomeIcon  icon={faTwitter} /></a>
        <a href="https://www.instagram.com/japhetaline"><FontAwesomeIcon  icon={faInstagram} /></a>
      </div>
      <p>Copyright © 2022 | All rights reserved</p>
    </footer>
  );
};

export default Footer;
