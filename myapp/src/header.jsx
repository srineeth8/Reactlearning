import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "./context/countctx";
import { AuthContext } from "./context/authctx";

const Header = () => {
  const { cart } = useContext(CartContext);
  const { user, signOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = async () => {
    await signOut();
    navigate("/login");
  };

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
      <div style={{ display: "flex", gap: "10px", alignItems: "center", marginLeft: "auto", marginRight: "50px", flexWrap: "wrap" }}>
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

        {user ? (
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <div style={{
              background: "#34495e",
              padding: "8px 12px",
              borderRadius: "6px",
              fontSize: "0.9rem",
              maxWidth: "150px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}>
              {user.user_metadata?.name || user.email}
            </div>
            <button
              onClick={handleLogout}
              style={{
                background: "#e74c3c",
                color: "white",
                border: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "background 0.3s",
                whiteSpace: "nowrap",
                fontWeight: "500",
                fontSize: "0.9rem"
              }}
              onMouseEnter={(e) => e.target.style.background = "#c0392b"}
              onMouseLeave={(e) => e.target.style.background = "#e74c3c"}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" style={{
            textDecoration: "none",
            color: "white",
            background: "#9b59b6",
            padding: "8px 16px",
            borderRadius: "8px",
            transition: "background 0.3s",
            whiteSpace: "nowrap",
            display: "inline-block",
            minWidth: "fit-content"
          }}>
            <span>Login</span>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;