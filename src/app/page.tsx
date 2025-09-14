import React from "react"
import Header from "../components/header/Header"
import Services from "../components/services/Services"
import Work from "../components/work/Work";
import Projects from "../components/projects/Projects";
import Questions from "../components/question/Questions";
import ContactUs from "../components/contact/Contact";

export default function Home() {
  return (
  <>
   <Header/> 
   <Services/>
   <Work />
   <Projects/>
   <Questions/>
   <ContactUs/>
  </>
    
  );
}
