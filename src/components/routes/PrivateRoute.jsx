import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <div className='flex min-h-12 items-center justify-center'><progress className="progress w-56"></progress></div>
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to='/access/login' replace></Navigate>;
};

export default PrivateRoute;