
import products from "../data/products";
import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";
import "../styles/ProductList.css";

function ProductList({ items = products }) {
  const { searchTerm } = useCart();

  const filteredProducts = items.filter((product) =>
    `${product.name} ${product.description} ${product.category}`
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase())
  );

  return (
    <section>
      <p className="result-count">
        {filteredProducts.length} product(s) found
      </p>

      {filteredProducts.length > 0 ? (
        <main className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </main>
      ) : (
        <p className="empty-message">
          No products found. Try another search.
        </p>
      )}
    </section>
  );
}

export default ProductList;
