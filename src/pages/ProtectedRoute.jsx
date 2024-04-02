import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(
    function () {
      if (!isAuthenticated) navigate('/');
    },
    [isAuthenticated, navigate]
  );

  //! here we need to return the children conditionally bec 'useEffect runs only after the render phase' and since during the render phase react tries to read the non existent user properties while rendering the children it results in error
  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
