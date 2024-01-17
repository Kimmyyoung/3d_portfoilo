import { motion } from 'framer-motion';
import { styles } from '../style';
import { GirlsCanvas } from './canvas';

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; 

const Hero = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <section className="relative pt-40 w-full h-screen mx-auto dark:bg-slate-50">
    <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
     <div className={`inset-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center gap-5`}>
        <div className="mt-10 justify-items-center font-poppins text-center	">
          <h1 className={`${styles.heroHeadText} text-white dark:text-zinc-900`}>Full Stack Developer <span className="text-[#CCFFC8]	 dark:text-green-300 font-poppins italic">Kim. </span></h1>
          <p className={`${styles.heroSubText} font-thin mt-2 text-white-100 dark:text-zinc-500`}>
            A experienced <span className="text-green-100 font-semibold dark:text-green-300">software developer</span> from Vancouver, BC, Canada<br className='sm:block hidden' />
            with a passion for <span className="text-green-100 font-semibold dark:text-green-300">code</span> and <span className="text-green-100 font-semibold dark:text-green-300">design</span>. Let's build something <span className="text-green-100 font-semibold dark:text-green-300">amazing</span> together.
          </p>
        </div>
      </div>

      <div className="w-full h-4/6 overflow-hidden sm:h-25">
        <GirlsCanvas />
      </div>
   
      {/* scroll icon */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-end pr-2 items-end">
        {/* scroll Icon click -> about  */}
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev animate={{
              y: [0, 24, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repreatType: 'loop',
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1" />
          </div>
        </a>
      </div>

            
    </section>
  )
}

export default Hero