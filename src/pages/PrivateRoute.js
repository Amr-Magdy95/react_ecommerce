import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';

function PrivateRoute({children, ...rest}) {
  const {user} = useAuth0();
  if(!user){
    return <Navigate to="/" />
  }
  return children;
}

export default PrivateRoute