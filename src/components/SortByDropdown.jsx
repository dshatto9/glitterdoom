const SortByDropdown = ({ onChange }) => {
  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className="sort-by-dropdown rounded-lg p-1.5"
    >
      <option value="price-desc">Price: High to Low</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="new-arrivals">New Arrivals</option>
      <option value="trending">Trending</option>
    </select>
  );
};

export default SortByDropdown;
