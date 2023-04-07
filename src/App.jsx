import { useState } from "react"
import Sidenav from "./components/Sidenav"
import First from "./components/First"
import Resume from "./components/Resume"
import Work from "./components/Work"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {
  return (
    <div >
        <Sidenav/>
        <First/>
        <Resume/>
        <Work/>
        <Project/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App
