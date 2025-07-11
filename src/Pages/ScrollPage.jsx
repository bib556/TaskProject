import React from "react";
import Navbar from "./Navbar/Navbar"
import Home from "./Home/Home"
import About from "./About/About"
import OurTeam from "./ourTeam/OurTeam"
import Contact from "./Contact/Contact"
// import Footer from "./Footer/Footer"
// import Jokes from "./jokesApi/Jokes"
function ScrollPage() {
  return (
    <div>


      <section id="home" >
        <Home></Home>
      </section>

      <section id="about" >
        <About></About>
      </section>
       <section id="team">
        <OurTeam></OurTeam>
      </section>
       <section id="contact" >
        <Contact></Contact>
      </section>
  
      
    </div>
  );
}

export default ScrollPage;
