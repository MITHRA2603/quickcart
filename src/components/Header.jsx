
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import SearchBar from "./SearchBar";
import "../styles/Header.css";

function Header() {
  const { cartItemCount, setIsCartOpen } = useCart();

  return (
    <header className="header">
      <Link to="/" className="brand-link">
        <h1>QuickCart</h1>
      </Link>

      <nav className="main-nav">
        <Link to="/">Home</Link>
        <Link to="/category/Electronics">Electronics</Link>
        <Link to="/category/Fashion">Fashion</Link>
        <Link to="/category/Home">Home & Living</Link>
        <Link to="/cart">Cart Page</Link>
      </nav>

      <div className="header-actions">
        <SearchBar />

        <button
          className="cart-button"
          onClick={() => setIsCartOpen(true)}
        >
          🛒 Cart ({cartItemCount})
        </button>
      </div>
    </header>
  );
}

export default Header;
