import { useState } from "react"
import Sidenav from "./components/Sidenav"
import First from "./components/First" 
import Work from "./components/Work"
import Project from "./components/Project"
import Contact from "./components/Contact"


function App() {
  return (
    <div >
        <Sidenav/>
        <First/>
        <Work/>
        <Project/>
        <Contact/>
    </div>
  )
}

export default App
