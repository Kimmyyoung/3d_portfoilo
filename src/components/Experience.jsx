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
      <VerticalTimelineElement contentStyle={{ background: "#1d1836", color: "#fff"}}
      contentArrowStyle={{borderRight: `7px solid #233631`}}
      date={experience.date}
      iconStyle={{background: experience.iconBg}}
      >
        <div>
          <h3 className="text-white text-[24px] font-bold dark:text-[#915EFF]">{experience.title}</h3>
          <p className="text-secondary text-[16px] font-semibold">{experience.company_name}</p>
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
        <p className={styles.sectionSubText}>What I have done</p>
          <h2 className={`${styles.sectionHeadText} dark:text-[#915EFF]`}>Work Experience</h2>
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