import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { useRef } from 'react'; 
import './App.css';

function App() {
  const cursor = useRef(null)
  const changePosition = (e) => {
    cursor.current.style.top = `${e.clientY}px`;
    cursor.current.style.left = `${e.clientX}px`;
  }


  return (
    <BrowserRouter>

      <div className="relative z-0 bg-primary dark:bg-slate-50" onMouseMove={changePosition}>
      <div className="cursor-style" ref={cursor} ></div>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
