
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import ProductList from "./ProductList";

function CategoryPage() {
  const { category } = useParams();

  const categoryProducts = products.filter(
    (product) =>
      product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <section>
      <h2 className="page-title">{category} Products</h2>

      {categoryProducts.length > 0 ? (
        <ProductList items={categoryProducts} />
      ) : (
        <div className="empty-message">
          <p>No products found in this category.</p>
          <Link to="/">Return to all products</Link>
        </div>
      )}
    </section>
  );
}

export default CategoryPage;
