
import { useCart } from "../context/CartContext";

function SearchBar() {
  const { searchTerm, setSearchTerm } = useCart();

  return (
    <input
      className="search-input"
      type="search"
      placeholder="Search products..."
      aria-label="Search products"
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
    />
  );
}

export default SearchBar;
