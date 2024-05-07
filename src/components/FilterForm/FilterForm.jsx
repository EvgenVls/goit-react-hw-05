import css from "./FilterForm.module.css";

export default function FilterForm({ onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchParam = form.elements.searchField.value;
    onSearch(searchParam);
  };

  return (
    <form onSubmit={handleSubmit} className={css.searchMovieForm}>
      <input type="text" name="searchField" className={css.searchField} />
      <button className={css.searchBtn}>Search</button>
    </form>
  );
}
