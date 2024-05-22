import React from "react"
import Header from './components/Header/Header';
import './index.css';
import Info from "./components/Info/Info";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Project/Project";
function App() {
  return(
    <div id="home">
      <Header />
      <div className="main-content">
        <Info/>
        <About />
        <Skills />
        <Projects />
      </div>
      <Footer />
    </div>
  )
}

export default App
