export default function FilterForm({ onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchParam = form.elements.searchField.value;
    onSearch(searchParam);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="searchField" />
      <button>Search</button>
    </form>
  );
}
