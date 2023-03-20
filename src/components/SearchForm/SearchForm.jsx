export const SearchForm = ({ searchQuery, filmName }) => {
  return (
    <form onSubmit={searchQuery}>
      <input type="text" name="name"></input>
      <button type="submit">Search</button>
    </form>
  );
};
