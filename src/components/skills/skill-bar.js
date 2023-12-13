import React from 'react'
import styled from 'styled-components'

const SkillBar = ({ className, name, level }) => {
  return (
    <div className={className}>
      <label className="skill-size" htmlFor={`${name}-bar`}>{name}</label>
      <div id={`${name}-bar`} className='skill__bar'>
        <div className='skill__level animate-on-scroll'></div>
      </div>
    </div>
  )
}

SkillBar.displaName = 'SkillBar'

export default styled(SkillBar)`
  width: 100%;
  .skill__bar {
    font-size: 10px;
    width: 100%;
    height: 5px;
    background-color: lightgrey;
    padding: 1px;
  }
  .skill-size {
    font-size: 11px;
  }
  .skill__level {
    background-color: ${({ theme }) => theme.colors.primary};
    width: 0;
    height: 5px;

    &.is-visible {
      transition: width .5s ease-in;
      width: ${p => p.level || 0}%;
    }
  }
`
