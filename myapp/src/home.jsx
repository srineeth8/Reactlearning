import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "60vh",
      textAlign: "center"
    }}>
      <h1 style={{ color: "#2c3e50", marginBottom: "20px", fontSize: "2.5rem" }}>Welcome to Our Store</h1>
      <p style={{ color: "#7f8c8d", marginBottom: "30px", fontSize: "1.1rem" }}>
        Discover amazing products at great prices
      </p>
      <button
        onClick={() => navigate("/product")}
        style={{
          background: "#3498db",
          color: "white",
          border: "none",
          padding: "12px 24px",
          borderRadius: "6px",
          fontSize: "1rem",
          cursor: "pointer",
          transition: "background 0.3s",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}
        onMouseOver={(e) => e.target.style.background = "#2980b9"}
        onMouseOut={(e) => e.target.style.background = "#3498db"}
      >
        Browse Products
      </button>
    </div>
  );
};

export default Home;