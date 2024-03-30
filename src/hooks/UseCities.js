import { useContext } from 'react';
import { CitiesContext } from '../contexts/CitiesContext';

export function useCities() {
  const context = useContext(CitiesContext);
  return context;
}
