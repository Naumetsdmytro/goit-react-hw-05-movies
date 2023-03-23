import styles from './Container.module.css';

export const Container = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};
