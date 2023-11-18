import React from "react";
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../data";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({ index, title, icon})=>{
  return (
    <Tilt className="xs:w-[250px] w-full font-poppins">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.74)} className="w-full green-pink-gradient p-[1px] rounded-full">
        <div options={{
          max:45,
          scale: 1,
          speed: 450
        }}
        className="bg-primary shadow-card rounded-full py-5 px-12 min-h-[150px] flex justify-evenly items-center flex-col dark:bg-white dark:shadow-lighModeCard"
        >
          {/* <img src={icon} alt={title}
          className="w-16 h-16 object-contain" /> */}
          <h3 className="text-white text-[20px] font-semibold italic text-center dark:text-black">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} ${styles.fontFamily} dark:text-gray-500`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} ${styles.fontFamily} dark:text-green-300`}>Skills</h2>
      </motion.div>

      <motion.p variant={fadeIn("","",0.1,1)} className="mt-4 text-secondary text-[17px] font-light leading-[30px] dark:text-gray-500">
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");