import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Landing from './Pages/Landing/Landing';
import Navbar from './Pages/Navbar/Navbar';
import Skills from './Pages/Skills/Skills';
import Works from './Pages/Works/Works';



function App() {

  return (
    <>
      <Navbar></Navbar>
      <Landing></Landing>
      <About></About>
      <Skills></Skills>
      <Works></Works>
      <Contact></Contact>
    </>
  );
}

export default App;
