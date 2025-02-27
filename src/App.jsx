import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import CaseStudies from "./components/CaseStudies";
import Maincs from "./components/CaseStudiesPage";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonial";
import Packages from "./components/Package";
import ServicesComponent from "./components/Services";
import Contact from "./components/Contact";

import "./styles/global.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <LandingPage />
            <CaseStudies />
            <Testimonials />
            <Packages />
            <Footer />
          </>
        } />

<Route path="/services" element={
  <>
    <ServicesComponent />
    <Testimonials/>
    <Packages/>
   <Footer/>
  </>
} />


<Route path="/case-studies" element={
          <>  
          <Maincs />
          <Testimonials/>
          <Packages/>
          <Footer/>
          </>
        
      } />

<Route path="/contact-us" element={
          <>
          <Contact />
          <Footer/>
          </>
          
          } />

        {/* <Route path="/services" element={
          <>
            <ServicesComponent />
            <Testimonials/>
            <Packages/>
           <Footer/>
          </>
        } />

        <Route path="/case-studies" element={
          <>  
          <CaseStudies />
          <Testimonials/>
          <Packages/>
          <Footer/>
          </>
        
      } />
        <Route path="/contact" element={
          <>
          <Contact />
          <Footer/>
          </>
          
          } />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/payment" element={<PaymentForm/>}/>
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/payment-failure" element={<PaymentFailure />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
