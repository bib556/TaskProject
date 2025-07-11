import React from 'react'
import {Link} from "react-router-dom";
// import { HashLink as Link } from 'react-router-hash-link';
import "./Footer.css"
function Footer() {
  return (
    <div className = "footer">
        <div className="firstPart">
      <div className="heading">
      <h2>AAkash labs</h2>
       <p>AakashLabs implements advanced digital <br />
         technologies in areas that are crucial  <br />
         to meeting your business objectives. <br />
         Connect with us for details.</p> <br />
      </div>
      <div className="heading">
       <h2>Quick Links</h2>
      <ul>
        <li><a href="about">About us</a></li>
        <li><a href="ourTeam">Team</a></li>
        <li><a href="contact">contact Us</a></li>
        <li id = "anotherApi"><Link to= "/newsApi">Links to Quote Api </Link></li>
      </ul>
      </div>
      {/* target="_blank" rel="noopener noreferrer" */}
      <div className="heading">
       <h2>Get connected</h2>
        <div className="connection">
       <div className="facebook"><a href="https://www.facebook.com/AakashLabs"target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a></div>
       <div className="insta"><a href="https://www.instagram.com/aakash.labs/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></div>
       <div className="linkedIn"><a href="https://www.linkedin.com/company/aakashlabs/?originalSubdomain=np" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a></div>
       <div className="whatsapp"><a href="https://api.whatsapp.com/send/?phone=9779801903810&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a></div>
        </div>
       
      </div>
      </div>
      <div className="footerPart">
        <p>Copyright &copy; 2021 All rights reserved Aakash Labs.</p>
      </div>
      
    </div>
  )
}

export default Footer
