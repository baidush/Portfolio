import React from 'react'

export default ({ title = 'education', text = '' }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  )
}
