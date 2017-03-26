import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import UserPage from './containers/UserPage'
import RepoPage from './containers/RepoPage'
import InterviewPage from './containers/InterviewPage'

export default <Route path="/crm" component={App}>
  <Route path="/crm/interview" component={InterviewPage} />
  <Route path="/crm/:login/:name" component={RepoPage} />
  <Route path="/crm/:login" component={UserPage} />
</Route>
