import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Layout } from '../containers/Layout'
import { Hello } from '../containers/Hello'
import { Other } from '../containers/Other'

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Hello} />
          <Route path="/other" exact component={Other} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
