import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/countctx";

const Header = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header style={{
      background: "#2c3e50",
      color: "white",
      padding: "15px 40px 15px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      width: "100%",
      zIndex: 1000,
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "600" }}>E-Commerce App</h2>
      <div style={{ display: "flex", gap: "10px", alignItems: "center", marginLeft: "auto", marginRight: "50px" }}>
        <Link to="/" style={{
          textDecoration: "none",
          color: "white",
          background: "#27ae60",
          padding: "8px 16px",
          borderRadius: "8px",
          transition: "background 0.3s",
          whiteSpace: "nowrap",
          display: "inline-block",
          minWidth: "fit-content"
        }}>
          <span>Home</span>
        </Link>
        <Link to="/checkout" style={{
          textDecoration: "none",
          color: "white",
          background: "#3498db",
          padding: "8px 16px",
          borderRadius: "8px",
          transition: "background 0.3s",
          whiteSpace: "nowrap",
          display: "inline-block",
          minWidth: "fit-content"
        }}>
          <span>Cart: {totalItems} items</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;