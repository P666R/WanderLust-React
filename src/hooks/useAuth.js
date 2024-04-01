import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export function useAuth() {
  const value = useContext(AuthContext);
  if (value === undefined) {
    throw new Error('useAuth was used outside of AuthProvider');
  }
  return value;
}
