
import products from "../data/products";
import ProductCard from "./ProductCard";
import "../styles/ProductList.css";

function ProductList() {
  return (
    <main className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}

export default ProductList;
