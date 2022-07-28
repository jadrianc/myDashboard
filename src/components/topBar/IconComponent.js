import React from 'react'
import { Icons } from './styles'
const IconComponent = ({ icon, count = 0 }) => {
  return (
    <>
      <Icons>
        { icon }
        { count !== 0 && <span>{ count }</span> }
      </Icons>
    </>
  )
}

export default IconComponent
