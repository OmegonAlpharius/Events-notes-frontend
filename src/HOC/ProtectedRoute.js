import React from 'react';
import { Redirect, Route } from 'react-router';

const ProtectedRoute = ({ isAllowed, redirectTo, ...props }) => {
  return isAllowed ? <Route {...props} /> : <Redirect to={redirectTo} />;
};

export default ProtectedRoute;
