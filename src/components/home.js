import React from 'react'
import { Container, H1, H2, ButtonGroup } from '../styles'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Container>
      <H1>Front-end Code Challenge for Scoutbase</H1>

      <H2>Routes</H2>
      <ButtonGroup>
        <Link to='/countries'>/countries</Link>
        <Link to='/countries/AD'>/countries/AD</Link>
      </ButtonGroup>
    </Container>
  )
}

export default Home
