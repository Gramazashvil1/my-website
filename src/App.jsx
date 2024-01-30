import './App.css'
import Header from "./components/Header/Header.jsx";
import Profile from "./components/Profile/Profile.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Preloader from "./components/Preloader/Preloader.jsx";

function App() {

    return (
        <>
            <Preloader/>
            <Header/>
            <Profile/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App
