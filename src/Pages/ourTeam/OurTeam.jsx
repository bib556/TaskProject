import React from 'react'
import employee1 from "./employee1.jpg"
import employee2 from "./employee2.jpg"
import employee3 from "./employee3.jpg"
import employee4 from "./employee4.jpg"
import employee5 from "./employee5.jpeg"
import employee6 from "./employee6.jpeg"
import employee7 from "./employee7.jpeg"
import employee8 from "./employee8.jpeg"

import "./ourTeam.css"
function ourTeam() {
  return (
    <div className = "about">
        <h1>Our Team</h1>
      <div className ="images">
        <div className="imageContainer1">
         <div className ="employeeImage"><img src = {employee1} alt="employeeImage1" />
         <h3>Dipesh Karki</h3>
         <p>Finance Manger</p></div>
         
         <div className="employeeImage"><img src = {employee2}  alt="employeeImage2" />
         <h3>Prayusha Shrestha</h3>
         <p>HR Officer</p>
         </div>
        <div className="employeeImage"><img src = {employee3}  alt="employeeImage3" />
        <h3>Manta Lama</h3>
        <p>Digital Marketing coordinator</p>
        </div>
        </div>
        <div className="imageContainer2">
          <div className="employeeImage"><img src = {employee4}  alt="employeeImage4" />
          <h3>Dipak B K</h3>
          <p>Motion Graphics Designer& Video Editor </p>
          </div>
          <div className="employeeImage"><img src = {employee5}  alt="employeeImage5" />
          <h3>Aman Shrestha</h3>
          <p>Sr. Graphic Designer </p>
          </div>
            <div className="employeeImage"><img src = {employee6}  alt="employeeImage6" />
            <h3>Rajan Sharma </h3>
            <p>Marketing Officer </p>
            </div>
        </div>
          <div className="imageContainer3">
             <div className="employeeImage"><img src = {employee7}  alt="employeeImage7" />
             <h3>Prajawal Kc</h3>
             <p>Software Engineer</p>
             </div>
               <div className="employeeImage"><img src = {employee8}  alt="employeeImage8" />
               <h3>Sujan karki </h3>
               <p>Graphics Designer Intern</p></div>
          </div>
            
      </div>
    </div>
  )
}

export default ourTeam
