import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./context/countctx";

const Products = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(result => {
        setData(result.products);
      });
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div style={{ marginBottom: "30px" }}>
        <h1 style={{ color: "#2c3e50", marginBottom: "10px" }}>Our Products</h1>
        
        {/* Items per page selector */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ marginRight: "10px", fontWeight: "500" }}>Items per page:</label>
          <select 
            value={itemsPerPage} 
            onChange={(e) => { 
              setItemsPerPage(Number(e.target.value)); 
              setCurrentPage(1); 
            }}
            style={{
              padding: "8px 12px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              background: "white"
            }}
          >
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>

      </div>

      {/* Product Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "20px",
        marginBottom: "30px"
      }}>
        {currentProducts.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/details/${item.id}`)}
            style={{
              border: "1px solid #e1e8ed",
              borderRadius: "8px",
              padding: "16px",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
              background: "white",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)";
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "12px" }}>
              <img
                src={item.thumbnail}
                alt={item.title}
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "6px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                }}
              />
            </div>
            <h3 style={{ margin: "0 0 8px 0", color: "#2c3e50", fontSize: "1.1rem" }}>{item.title}</h3>
            <p style={{ color: "#7f8c8d", margin: "0 0 12px 0", fontSize: "0.9rem", lineHeight: "1.4" }}>
              {item.description.length > 100 ? item.description.substring(0, 100) + "..." : item.description}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <input
                type="number"
                min="1"
                value={quantities[item.id] || 1}
                onChange={(e) => setQuantities({ ...quantities, [item.id]: parseInt(e.target.value) || 1 })}
                onClick={(e) => e.stopPropagation()}
                style={{
                  width: "60px",
                  padding: "6px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  textAlign: "center"
                }}
              />
              <button 
                onClick={(e) => { 
                  e.stopPropagation(); 
                  addToCart(item, quantities[item.id] || 1); 
                }}
                style={{
                  background: "#27ae60",
                  color: "white",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  transition: "background 0.3s"
                }}
                onMouseOver={(e) => e.target.style.background = "#229954"}
                onMouseOut={(e) => e.target.style.background = "#27ae60"}
              >
                Add to Cart
              </button>
            </div>
            <p style={{ margin: "0", color: "#e74c3c", fontWeight: "600", fontSize: "1.1rem" }}>${item.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
        marginTop: "30px"
      }}>
        <button 
          onClick={() => setCurrentPage(currentPage - 1)} 
          disabled={currentPage === 1}
          style={{
            background: currentPage === 1 ? "#bdc3c7" : "#3498db",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "4px",
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
            transition: "background 0.3s"
          }}
        >
          Previous
        </button>
        <span style={{ fontWeight: "500", color: "#2c3e50" }}>
          Page {currentPage} of {totalPages}
        </span>
        <button 
          onClick={() => setCurrentPage(currentPage + 1)} 
          disabled={currentPage === totalPages}
          style={{
            background: currentPage === totalPages ? "#bdc3c7" : "#3498db",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "4px",
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
            transition: "background 0.3s"
          }}
        >
          Next
        </button>
      </div>

    </div>
  );
};

export default Products;