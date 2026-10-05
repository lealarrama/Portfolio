import ThemeToggle from "./components/ThemeToggle"
import Sidenav from "./components/Sidenav"
import First from "./components/First"
import Resume from "./components/Resume"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {
  return (
    <div >
        <ThemeToggle/>
        <Sidenav/>
        <First/>
        <Resume/>
        <Project/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App
