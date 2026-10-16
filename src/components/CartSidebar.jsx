
import "../styles/CartSidebar.css";

function CartSidebar({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  totalPrice,
}) {
  return (
    <>
      {isOpen && (
        <div className="cart-overlay" onClick={onClose}></div>
      )}

      <aside className={`cart-sidebar ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-cart" onClick={onClose}>
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
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
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
                    onClick={() => onRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <h3>
            Total: ₹{totalPrice.toLocaleString("en-IN")}
          </h3>
          <button className="continue-shopping" onClick={onClose}>
            Continue Shopping
          </button>
        </div>
      </aside>
    </>
  );
}

export default CartSidebar;
