import React from 'react'
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';

import {motion} from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../style';
import { experiences } from '../data';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience })=> {
    return (
      <VerticalTimelineElement contentStyle={{ background: "#393E46", color: "#fff"}}
      contentArrowStyle={{borderRight: `7px solid #233631`}}
      date={experience.date}
      iconStyle={{background: "#CCFFC8"}}
      >
        <div>
          <h3 className="text-white text-[24px] font-poppins font-bold tracking-wide">{experience.title}</h3>
          <p className="text-[#CCFFC8] text-[16px] font-poppins italic font-semibold">{experience.company_name}</p>
        </div>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index)=>{
            return (
              <li key={`experience-point-${index}`}
                className="text-white-100 text-[14px] pl-1 tracking-wider"
              >
                {point}
              </li>
            )
          })}
        </ul>
      </VerticalTimelineElement>
    )
}
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} font-poppins dark:text-gray-500`}>What I have done</p>
          <h2 className={`${styles.sectionHeadText} font-poppins dark:text-green-300`}>Work Experience</h2>
      </motion.div>
      
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index)=>{
            return(
              <ExperienceCard key={index} experience={experience} />
            )
          })}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work");