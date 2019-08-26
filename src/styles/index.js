import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  padding: 0 1rem;
  margin: 0 auto;
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
export const P = styled.p`
  font-weight: 500;
  font-size: 1.3rem;
  margin-bottom: 0;
  padding-bottom: 0;
  display: block;
  color: #f0f0f0;

  & span {
    font-weight: 300;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #333333;
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem auto;
`
export const UL = styled.ul`
  color: #f0f0f0;
  list-style: none;
  padding: 0;
  margin: 0;
`
export const LI = styled(Card)`
  flex-direction: row;
  margin-bottom: 1rem;
  justify-content: space-between;
  align-items: center;
`

export const Indicator = styled.div`
  display: block;
  margin: 50vh auto 0 auto;
  text-align: center;
  font-size: 1.5rem;
  color: ${props => props.color || '#f0f0f0'};
`
