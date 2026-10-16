
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/CartPage.css";

function CartPage() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalPrice,
  } = useCart();

  if (cart.length === 0) {
    return (
      <section className="cart-page">
        <h2>Your Shopping Cart</h2>
        <p>Your cart is empty 🛒</p>
        <Link to="/" className="shop-link">
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <h2>Your Shopping Cart</h2>

      {cart.map((item) => (
        <article className="cart-page-item" key={item.id}>
          <img src={item.image} alt={item.name} />

          <div className="cart-page-details">
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price.toLocaleString("en-IN")}</p>

            <div className="quantity-controls">
              <button
                onClick={() => updateQuantity(item.id, -1)}
                aria-label={`Decrease ${item.name} quantity`}
              >
                −
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => updateQuantity(item.id, 1)}
                aria-label={`Increase ${item.name} quantity`}
              >
                +
              </button>
            </div>

            <p>
              Subtotal: ₹
              {(item.price * item.quantity).toLocaleString("en-IN")}
            </p>

            <button
              className="remove-item"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </article>
      ))}

      <div className="cart-page-summary">
        <h3>Total: ₹{totalPrice.toLocaleString("en-IN")}</h3>

        <button className="clear-cart-button" onClick={clearCart}>
          Clear Cart
        </button>

        <Link to="/" className="shop-link">
          Continue Shopping
        </Link>
      </div>
    </section>
  );
}

export default CartPage;
