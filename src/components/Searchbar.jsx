const SearchBar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={handleInputChange}
      className="p-2 border rounded w-full"
    />
  );
};

export default SearchBar;
