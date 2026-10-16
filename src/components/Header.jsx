
import "../styles/Header.css";

function Header({ cartItemCount, onCartClick }) {
  return (
    <header className="header">
      <div>
        <h1>QuickCart</h1>
        <p>Your one-stop shopping destination</p>
      </div>

      <button className="cart-button" onClick={onCartClick}>
        🛒 Cart
        <span className="cart-badge">{cartItemCount}</span>
      </button>
    </header>
  );
}

export default Header;
