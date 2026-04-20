import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  return (
    <div>
      <h1 style={{ color: "#2c3e50", marginBottom: "20px", textAlign: "center" }}>Product Details</h1>
      
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {!product ? (
          <div style={{ textAlign: "center", padding: "40px" }}>
            <div style={{
              border: "4px solid #f3f3f3",
              borderTop: "4px solid #3498db",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              margin: "0 auto 20px",
              animation: "spin 1s linear infinite"
            }}></div>
            <style>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
            <p style={{ color: "#7f8c8d" }}>Loading product details...</p>
          </div>
        ) : (
          <div style={{
            background: "white",
            borderRadius: "8px",
            padding: "24px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
          }}>
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{
                  maxWidth: "300px",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                }}
              />
            </div>
            
            <table style={{
              width: "100%",
              borderCollapse: "collapse",
              marginBottom: "24px"
            }}>
              <tbody>
                <tr style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "12px 0", fontWeight: "600", color: "#2c3e50", width: "30%" }}>Title</td>
                  <td style={{ padding: "12px 0", color: "#34495e" }}>{product.title}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "12px 0", fontWeight: "600", color: "#2c3e50" }}>Description</td>
                  <td style={{ padding: "12px 0", color: "#34495e", lineHeight: "1.5" }}>{product.description}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "12px 0", fontWeight: "600", color: "#2c3e50" }}>Price</td>
                  <td style={{ padding: "12px 0", color: "#e74c3c", fontWeight: "600", fontSize: "1.1rem" }}>${product.price}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "12px 0", fontWeight: "600", color: "#2c3e50" }}>Category</td>
                  <td style={{ padding: "12px 0", color: "#34495e" }}>{product.category}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "12px 0", fontWeight: "600", color: "#2c3e50" }}>Brand</td>
                  <td style={{ padding: "12px 0", color: "#34495e" }}>{product.brand}</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "12px 0", fontWeight: "600", color: "#2c3e50" }}>Rating</td>
                  <td style={{ padding: "12px 0", color: "#34495e" }}>
                    ⭐ {product.rating}/5
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "12px 0", fontWeight: "600", color: "#2c3e50" }}>Stock</td>
                  <td style={{ padding: "12px 0", color: product.stock > 10 ? "#27ae60" : "#e67e22" }}>
                    {product.stock} {product.stock > 10 ? "In Stock" : "Low Stock"}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "12px 0", fontWeight: "600", color: "#2c3e50" }}>Discount</td>
                  <td style={{ padding: "12px 0", color: "#e74c3c" }}>{product.discountPercentage}% off</td>
                </tr>
              </tbody>
            </table>
            
            <div style={{ textAlign: "center" }}>
              <button
                onClick={() => window.history.back()}
                style={{
                  background: "#95a5a6",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "1rem",
                  transition: "background 0.3s"
                }}
                onMouseOver={(e) => e.target.style.background = "#7f8c8d"}
                onMouseOut={(e) => e.target.style.background = "#95a5a6"}
              >
                Back to Products
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;