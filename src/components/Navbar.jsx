import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';

import { styles } from '../style';
import { navLinks } from '../data';
import { logo, menu, close, github } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [themeIsDark, setThemeIsDark] = useState(false);

  const themeModeHandle = (e) => {
    e.preventDefault();
    localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle("dark");
    setThemeIsDark(!themeIsDark);
  };

  useEffect(()=>{
    if(localStorage.theme === 'dark') {
      setThemeIsDark(true);
    }else{
      setThemeIsDark(false);
    }
  },[]);

  return (
    <nav className={`${styles.paddingX} w-full flexitems-center py-5 font-poppins fixed top-0 z-20 bg-primary dark:bg-slate-50`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={()=>{
          setActive('')
          window.scrollTo(0,0);
        }}>
          {/* <img src={logo} alt='logo' className="w-9 h-9 object-contain" /> */}
          <h1 className="text-green-300 text-2xl">K</h1>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-slate-300"
              } hover:text-green-200 text-[18px] font-medium cursor-pointer dark:text-gray`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

          <li className="text-white dark:text-gray-700 flex flex-row	">
            <Link to="https://github.com/Kimmyyoung/3d_portfoilo">
            <img src={github} width={26} height={26} className="dark:bg-gray-500 rounded-full mt-0.5"/>
            </Link>

            <button
                    className='rounded-xl bg-black px-2 py-1 text-xl font-semibold text-white dark:bg-transparent dark:text-gray-500'
                    onClick={themeModeHandle}
                  >
                    {themeIsDark ? (
                      //  sun Icon svg
                      <div className="p-0 m-0">
                        <svg id="icon2" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
                          <circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                          </svg>
                      </div>
                    ): (
                      //Moon Icon svg
                      <div className="p-0 m-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#ffffff" d="M22.534 17.043a.769.769 0 0 0-.854-.238 8.11 8.11 0 0 1-2.747.462c-4.65 0-8.433-3.785-8.433-8.434a8.407 8.407 0 0 1 3.695-6.97.768.768 0 0 0-.32-1.394A7.442 7.442 0 0 0 12.8.4C6.458.4 1.3 5.558 1.3 11.9s5.158 11.5 11.5 11.5c4.025 0 7.687-2.045 9.792-5.47a.772.772 0 0 0-.058-.887z"/></svg>
                     </div>
                    )}
                  </button>   
          </li> 

          <li className="text-white">
                          
          </li> 
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={()=>{setToggle(!toggle)}} />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex flex-row justify-end items-start flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => 
                  {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li className="text-white">
                <Link to="https://github.com/Kimmyyoung/3d_portfoilo"><img src={github} width={15} height={15}/></Link>
              </li> 
            </ul>
          </div>
        </div>


      </div>
    </nav>
  )
}

export default Navbar