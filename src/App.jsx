
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CategoryPage from "./components/CategoryPage";
import CartPage from "./components/CartPage";
import CartSidebar from "./components/CartSidebar";
import "./styles/App.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/category/:category"
          element={<CategoryPage />}
        />
        <Route path="/cart" element={<CartPage />} />
        <Route
          path="*"
          element={
            <div className="empty-message">
              <h2>Page not found</h2>
              <a href="/">Return Home</a>
            </div>
          }
        />
      </Routes>

      <CartSidebar />
    </>
  );
}

export default App;
