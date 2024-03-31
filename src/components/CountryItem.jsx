import { useCities } from '../hooks/useCities';
import styles from './CountryItem.module.css';

function CountryItem({ country }) {
  const { getFlag } = useCities();

  return (
    <li className={styles.countryItem}>
      <span>{getFlag(country.emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
