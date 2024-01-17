import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../style';
import { github } from '../assets';
import { click } from '../assets';


import { SectionWrapper } from '../hoc';
import { fadeInWork } from "../utils/motion";
import { projects } from '../data';

const ProjectCard = ({ 
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  website_link
})=>{
  return (
    <motion.div variants={fadeInWork("up", "spring", index*0.5, 0.75)}>
      <Tilt option={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className="bg-[#393E46] p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-2'>
            <div
              onClick={() => window.open(website_link, "_blank")}
              className='star-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={click}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>

            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        {/* project name */}
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px] dark:text-green-300'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        {/* project tech stack */}
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div>
        <p className={`${styles.sectionSubText} font-poppins dark:text-gray-500 `}>My work</p>
        <h2 className={`${styles.sectionHeadText} font-poppins dark:text-green-300`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          className='mt-3 text-secondary text-[17px] font-poppins font-light leading-[30px] dark:text-gray-500'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works,"");