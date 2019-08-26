import React, { useState, useEffect } from 'react'
import { Container, H1, P, Indicator, Card, ButtonGroup } from '../styles'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Link } from 'react-router-dom'

function Countries({
  match: {
    params: { code }
  }
}) {
  const [countryCode, setCountryCode] = useState(code)

  useEffect(() => {
    setCountryCode(code)
  }, [code])

  const {
    loading,
    error,
    data: { country }
  } = useQuery(gql`
    {
      country(code: "${countryCode}") {
        name
        phone
        currency
      }
    }
  `)

  if (loading) return <Indicator>Fetching Country Information...</Indicator>
  if (error)
    return (
      <Indicator color='#f00'>Error Fetching Country Information</Indicator>
    )

  return (
    <Container>
      <H1>Country</H1>
      <Card>
        <div>
          <P>
            Country: <span>{country.name}</span>
          </P>
          <P>
            Area Code: <span>+{country.phone}</span>
          </P>
          <P>
            Currency: <span>{country.currency}</span>
          </P>
        </div>
      </Card>
      <ButtonGroup>
        <Link to='/countries'>← Back to Countries</Link>
      </ButtonGroup>
    </Container>
  )
}

export default Countries
