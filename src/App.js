import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import Home from './components/home'
import Countries from './components/countries'
import Country from './components/country'
import FourOFour from './components/404'

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/countries' component={Countries} />
          <Route exact path='/countries/:code' component={Country} />
          <Route component={FourOFour} />
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App
