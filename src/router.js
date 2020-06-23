import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { BasicLayout } from './layouts'
import { Home } from './routes/home'
import { Nginx } from './routes/nginx'
import { Upload } from './routes/upload'

export default function () {
  return (
    <Router>
      <BasicLayout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/uploader">
            <Upload />
          </Route>
          <Route path="/nginx">
            <Nginx />
          </Route>
        </Switch>
      </BasicLayout>
    </Router>
  )
}