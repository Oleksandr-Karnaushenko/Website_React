import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Works from "./Pages/Works";
import Blog from "./Pages/Blog";
import GetInTouch from "./Pages/GetInTouch";
import Clients from "./Pages/Clients";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <Services />
        <About />
        <Works />
        <GetInTouch />
        <Blog />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
