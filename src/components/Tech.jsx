import React from 'react'
import { SectionWrapper } from '../hoc';

import { technologies } from "../data";
import { BallCanvas } from './canvas';

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech) => {
        return (
          <div className="w-28 h-28" key={technologies.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        )
      })}
    </div>
  )
}

export default SectionWrapper(Tech, "");