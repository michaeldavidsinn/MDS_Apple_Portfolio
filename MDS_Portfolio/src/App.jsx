
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Project } from "./components/Project/Project";
import { Certificates } from "./components/Certificates/Certificates";


function App() {

  return (
    <div className = {styles.App} > 
    
    <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
    <Project/>
    <Certificates/>
    <Contact/>
    </div>
  )
}

export default App;
