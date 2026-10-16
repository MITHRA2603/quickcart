
import products from "../data/products";
import ProductCard from "./ProductCard";
import "../styles/ProductList.css";

function ProductList({ onAddToCart }) {
  return (
    <main className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </main>
  );
}

export default ProductList;
