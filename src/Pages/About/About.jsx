import React from 'react'
import "./About.css"
import  companyImage1 from "../../assets/companyImage1.jpg"

function About() {
  return (
    <div>
      <div className="aboutSection">
        <div className="aboutText">
            <h3>Company Profile </h3>
             <h1>Create a Strong Business Presence</h1>
             <div className="companyPara">
               <p>Combining our unrivaled specialism in specific digital activities with a 
                 strategic & differentiated approach, Aakash Labs is able to meet the 
                  increasingly complex needs of clients in an effortless yet productive 
                   manner in the constantly evolving digital landscape.</p>
             </div>
               
             <button className ="seeButton">See All</button>
        </div>
        <div className="imageSection">
            <img src={companyImage1} alt="companyImage" />
        </div>
      </div>
      <div className="teamSection">
        <h1>The Team You Look For</h1>
        <div className="teamPara">
        <p>Aakash Labs is headquartered in Nepal, providing digital marketing, data mining, and machine learning services to clients around the globe.</p>
        </div>
        <div className="containers">
          <div className="container">
              100% <br />
              SATISFACTION
          </div>
          <div className="container">
           254 <br />
           PROJECTS
          </div>
          <div className="container">40768 <br />WORKING HOURS</div>
          <div className="container">400 <br />LOVELYCLIENTS </div>
        </div>
      </div>
    </div>
  )
}

export default About