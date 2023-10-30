import { motion } from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto dark:bg-indigo-50">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        {/* circle line */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        {/* name */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white dark:text-[#915EFF]`}>Hello! I am <span className="text-[#915eff]">Kimmy 👋 </span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 dark:text-zinc-500`}>
            I mainly do Frontend Development <br className='sm:block hidden' />
            and UI/UX design and Game Frontend Development
          </p>
        </div>
      </div>


      <ComputersCanvas />
   
      {/* scroll icon */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
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