import React from 'react'
import {useState} from "react";
import "./Contact.css"
function Contact() {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
   const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.aakashlabs.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      const result = await response.json();
      alert("Message sent successfully!");
      console.log(result);

      // Optional: reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });

    } catch (error) {
      console.error("This  is error",error);
      alert("Something went wrong!");
    }
  };
  return (
    <div className = "contactContainer">
        <h1 id="header">Contact Information</h1>
        <div className="contactInfo">
      <div className="info">
        <h1>Contact Us</h1>
         <p>We at Aakash Labs can provide you with unparalleled  <br />
            insight and digital marketing analysis. For assistance with <br />
             any inquiries, or if you require our services, reach out to us <br />
              at:</p>
        <div className="infoSection">
            <div className="informationSection">
                <div className="symbol">
                 <i className="fa-solid fa-phone-volume"></i>
                </div>
               <div className="information"><h3>call us</h3>
               <p>+977-1-4430196</p></div>
            </div>
            <div className="informationSection">
                <div className="symbol"><i className="fa-solid fa-envelope"></i></div>
                <div className="information">
                      <h3>Email</h3>
                 <p>info@aakashlabs.com</p>
                </div>
              

            </div>
            <div className="informationSection">
                <div className="symbol"><i className="fa-solid fa-location-dot"></i></div>
                <div className="information"><h3>Address</h3>
                <p> Laxmi Plaza, Putali Sadak, Kathmandu, Nepal</p> </div>

            </div>
        </div>
      </div>
      <div className="contact">
         <h1>Drop a line</h1> 
           <div className="formSection">
            <form onSubmit = {handleSubmit}>
                <input type="text" placeholder= "Name" name="name" value ={formData.name} onChange={handleChange}/> <br />
                <input type="email" placeholder = "Email" name="email" value={formData.email} onChange={handleChange}/> <br />
                <input type="tel" placeholder ="Phone Number" name="phone" value={formData.phone} onChange={handleChange}/> <br />
                <input type="text" placeholder="choose Service"  name = "service" value={formData.service} onChange={handleChange}/> <br />
               <textarea name="message" id="message" placeholder="write your message here "  value={formData.message} onChange={handleChange}  rows="4"
        required></textarea> <br />
                <button type= "submit" id = "submitButton"> Submit</button>
            </form>
           </div>
      </div>
    </div>
    </div>
  )
}

export default Contact