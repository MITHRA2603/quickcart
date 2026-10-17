
import { useCart } from "../context/CartContext";
import "../styles/CartSidebar.css";

function CartSidebar() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();

  return (
    <>
      {isCartOpen && (
        <div
          className="cart-overlay"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      <aside
        className={`cart-sidebar ${isCartOpen ? "open" : ""}`}
        aria-label="Shopping cart"
        aria-hidden={!isCartOpen}
      >
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button
            className="close-cart"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty 🛒</p>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price.toLocaleString("en-IN")}</p>

                  <div className="quantity-controls">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-item"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <h3>Total: ₹{totalPrice.toLocaleString("en-IN")}</h3>
          <button
            className="continue-shopping"
            onClick={() => setIsCartOpen(false)}
          >
            Continue Shopping
          </button>
        </div>
      </aside>
    </>
  );
}

export default CartSidebar;
