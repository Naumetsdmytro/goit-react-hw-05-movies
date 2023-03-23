import PropTypes from 'prop-types';

import styles from './SearchForm.module.css';

export const SearchForm = ({ searchQuery }) => {
  return (
    <form onSubmit={searchQuery} className={styles.searchForm}>
      <input type="text" name="name" className={styles.searchFormInput}></input>
      <button type="submit" className={styles.searchFormButton}>
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  searchQuery: PropTypes.func.isRequired,
};
