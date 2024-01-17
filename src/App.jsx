import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { useRef } from 'react'; 
import './App.css';
import ReactGA from 'react-ga';
import RouteChangeTracker from './RouteChangeTracker';

ReactGA.event({
  category: 'User',
  action: 'Created an Account'
});
ReactGA.exception({
  description: 'An error ocurred',
  fatal: true
});


function App() {
  const cursor = useRef(null)
  const changePosition = (e) => {
    cursor.current.style.top = `${e.clientY}px`;
    cursor.current.style.left = `${e.clientX}px`;
  }

  // eslint-disable-next-line no-undef
  const TRACKING_ID = 'G-4TZCPENXZ7';

  
    ReactGA.initialize(TRACKING_ID);
  
  return (
    <BrowserRouter>
      <RouteChangeTracker />
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
