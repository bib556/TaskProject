import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Pages/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import OurTeam from "./Pages/ourTeam/OurTeam";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import Jokes from "./Pages/jokesApi/Jokes";
import ScrollPage from "./Pages/ScrollPage";

function AppWrapper() {
  const location = useLocation();


  const hideLayoutRoutes = ["/newsApi"];

  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<ScrollPage />} />
        <Route path="/newsApi" element={<Jokes />} />
    
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;

