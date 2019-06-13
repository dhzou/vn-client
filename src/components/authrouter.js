import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from '../utils/session'

export const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
      <Component {...props} />
      
  )}/>
)


