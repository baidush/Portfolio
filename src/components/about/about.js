import React from 'react'
import styled from 'styled-components'

export default styled(({ title = 'about', text = '' }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p className="about" dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  )
})`
font-size: 14px;
`
