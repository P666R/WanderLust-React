import { useContext } from 'react';
import { CitiesContext } from '../contexts/CitiesContext';

export function useCities() {
  const value = useContext(CitiesContext);
  if (value === undefined) {
    throw new Error('useCities was used outside of CitiesProvider');
  }
  return value;
}
