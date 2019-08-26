import React from 'react'
import { Indicator, ButtonGroup, H1 } from '../styles'
import { Link } from 'react-router-dom'

function FourOFour() {
  return (
    <Indicator>
      <H1>404!</H1>
      <ButtonGroup>
        <Link to='/'>← Go Back Home</Link>
      </ButtonGroup>
    </Indicator>
  )
}

export default FourOFour
