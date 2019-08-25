import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  padding: 1rem;
  margin: 0 auto;
  overflow: hidden;
`
export const H1 = styled.h1`
  color: #f0f0f0;
  margin: 1rem 0;
  text-align: center;
  font-size: 3rem;
  font-weight: 400;
`

export const H2 = styled(H1)`
  margin-top: 2rem;
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  & a {
    align-items: center;
    text-decoration: none;
    padding: 0.7rem 1rem;
    border-radius: 4px;
    color: #f0f0f0;
    border: 1px solid #f0f0f0;
    margin: 0 1rem;

    &:hover {
      color: #fff;
    }
  }
`

export const Button = styled.a``
