import PropTypes from 'prop-types';

import styles from './Reviews.module.css';

export const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ author, content, id }) => (
        <li key={id} className={styles.reviewsListItem}>
          <h3 className={styles.reviewsTitle}>Author: {author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
