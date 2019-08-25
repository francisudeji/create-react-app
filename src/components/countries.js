import React from 'react'
import { Container, H1 } from '../styles'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

function Countries() {
  const { loading, error, data } = useQuery(gql`
    {
      countries {
        name
        code
        languages {
          name
          native
        }
        continent {
          name
          code
        }
      }
    }
  `)

  if (loading) return <p style={{ textAlign: 'center' }}>Loading...</p>
  if (error) return <p style={{ textAlign: 'center' }}>Error...</p>

  // console.log(data.countries)

  return (
    <Container>
      <H1>Countries</H1>
      <ul
        style={{ color: '#f0f0f0', listStyle: 'none', padding: 0, margin: 0 }}
      >
        {data.countries.map(({ name, languages, continent, code }, i) => (
          <li
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '1rem',
              background: '#333333',
              padding: '1rem',
              borderRadius: '4px'
            }}
          >
            <div>Country: {name}</div>
            <div>
              Languages:{' '}
              {languages.map((lang, idx) => (
                <span key={lang.name + idx}>
                  <span>{lang.name}</span>
                  {', '}
                  <span>{lang.native}</span>
                </span>
              ))}
            </div>
            <div>Continent: {continent.name}</div>
            <div>Code: {code}</div>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default Countries
