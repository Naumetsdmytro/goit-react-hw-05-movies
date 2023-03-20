export const HomeListItem = ({ film: { originalTitle } }) => {
  return (
    <li>
      <p>{originalTitle}</p>
    </li>
  );
};
