
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/navbar';
import About from './Components/about';
import Skills from './Components/skills';
import Experience from './Components/experience';
import Education from './Components/education';
import Portfolio from './Components/portfolio';
import References from './Components/references';
import Contact from './Components/contact';
import Footer from './Components/footer';

function App() {
  return (
      
    
  <div>
    <Navbar title="Narendra" />
    <Home/>
    <About/>
    <Skills/>
    <Experience/>
    <Education/>
    <Portfolio/>
    <References/>
    <Contact/>
    <Footer/>
  </div>
  );
}

export default App;
