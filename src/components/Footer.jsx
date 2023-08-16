import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/anup2307"><GitHubIcon /></a>
        <a  href='https://www.linkedin.com/'><LinkedInIcon /></a>
      </div>
    </div>
  );
}

export default Footer;