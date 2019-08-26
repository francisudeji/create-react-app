import React from 'react'
import { Container, H1, P, UL, LI, ButtonGroup, Indicator } from '../styles'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Link } from 'react-router-dom'

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

  if (loading) return <Indicator>Fetching Countries...</Indicator>
  if (error)
    return (
      <Indicator color='#f00'>Error Fetching Country Information</Indicator>
    )

  return (
    <Container>
      <H1>Countries</H1>
      <ButtonGroup>
        <Link to='/'>← Back to Home</Link>
      </ButtonGroup>
      <UL>
        {data.countries.map(({ name, languages, code, continent }, i) => (
          <LI key={i}>
            <div>
              <div>
                <P>
                  Country: <span>{name}</span>
                </P>
              </div>
              <div>
                <P>
                  Languages Spoken: <span>{`(${languages.length})`}</span>
                </P>
                <div style={{ paddingLeft: '1rem' }}>
                  {languages.map((lang, idx) => (
                    <div key={lang.name + idx}>
                      <P>
                        English: <span>{lang.name}</span>
                      </P>
                      <P>
                        Native: <span>{lang.native}</span>
                      </P>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <P>
                  Continent: <span>{continent.name}</span>
                </P>
              </div>
            </div>
            <ButtonGroup>
              <Link to={`/countries/${code}`}>View </Link>
            </ButtonGroup>
          </LI>
        ))}
      </UL>
    </Container>
  )
}

export default Countries
