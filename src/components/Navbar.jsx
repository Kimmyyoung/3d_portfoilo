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
    localStorage.theme = localStorage.them === 'dark' ? 'light' : 'dark';
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
    <nav className={`${styles.paddingX} w-full flexitems-center py-5 fixed top-0 z-20 bg-primary dark:bg-white`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={()=>{
          setActive('')
          window.scrollTo(0,0);
        }}>
          <img src={logo} alt='logo' className="w-9 h-9 object-contain" />
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer dark:text-gray`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li className="text-white dark:text-gray">
            <Link to="https://github.com/Kimmyyoung/3d_portfoilo"><img src={github} width={30} height={30}/></Link>
          </li> 
          <li className="text-white">
                <button
                    className='rounded-xl bg-black px-2 py-1 text-xl font-semibold text-white dark:bg-white dark:text-black'
                    onClick={themeModeHandle}
                  >
                    {themeIsDark ? "Dark" : "Light"}
                  </button>              
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