
import { useCart } from "../context/CartContext";
import "../styles/ProductCard.css";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} />

      <div className="product-info">
        <span className="category">{product.category}</span>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>₹{product.price.toLocaleString("en-IN")}</h3>

        <button
          className="add-to-cart-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
