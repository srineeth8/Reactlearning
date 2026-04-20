import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/countctx";

const Checkout = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1 style={{ color: "#2c3e50", marginBottom: "20px", textAlign: "center" }}>Shopping Cart</h1>
      
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {cart.length === 0 ? (
          <div style={{
            textAlign: "center",
            padding: "60px 20px",
            background: "white",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
          }}>
            <h2 style={{ color: "#7f8c8d", marginBottom: "20px" }}>Your cart is empty</h2>
            <Link to="/product">
              <button style={{
                background: "#3498db",
                color: "white",
                border: "none",
                padding: "12px 24px",
                borderRadius: "6px",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "background 0.3s",
                textDecoration: "none",
                display: "inline-block"
              }}>
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} style={{
                background: "white",
                borderRadius: "8px",
                padding: "20px",
                marginBottom: "16px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "15px", flex: 1 }}>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "6px",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                    }}
                  />
                  <div>
                    <h3 style={{ margin: "0 0 8px 0", color: "#2c3e50" }}>{item.title}</h3>
                    <p style={{ margin: "0", color: "#7f8c8d", fontSize: "0.9rem" }}>
                      ${item.price} each
                    </p>
                  </div>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{
                        background: "#e74c3c",
                        color: "white",
                        border: "none",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.2rem",
                        fontWeight: "bold"
                      }}
                    >
                      −
                    </button>
                    <span style={{
                      fontWeight: "600",
                      color: "#2c3e50",
                      minWidth: "30px",
                      textAlign: "center"
                    }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{
                        background: "#27ae60",
                        color: "white",
                        border: "none",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.2rem",
                        fontWeight: "bold"
                      }}
                    >
                      +
                    </button>
                  </div>
                  
                  <div style={{ textAlign: "right", minWidth: "80px" }}>
                    <p style={{
                      margin: "0",
                      fontWeight: "600",
                      color: "#e74c3c",
                      fontSize: "1.1rem"
                    }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      background: "#95a5a6",
                      color: "white",
                      border: "none",
                      padding: "8px 12px",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "0.8rem"
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            
            <div style={{
              background: "white",
              borderRadius: "8px",
              padding: "20px",
              marginTop: "20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              textAlign: "center"
            }}>
              <h2 style={{ color: "#2c3e50", margin: "0 0 20px 0" }}>
                Total: ${totalPrice.toFixed(2)}
              </h2>
              <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                <Link to="/product">
                  <button style={{
                    background: "#95a5a6",
                    color: "white",
                    border: "none",
                    padding: "12px 24px",
                    borderRadius: "6px",
                    fontSize: "1rem",
                    cursor: "pointer",
                    transition: "background 0.3s",
                    textDecoration: "none",
                    display: "inline-block"
                  }}>
                    Continue Shopping
                  </button>
                </Link>
                <button style={{
                  background: "#f39c12",
                  color: "white",
                  border: "none",
                  padding: "12px 24px",
                  borderRadius: "6px",
                  fontSize: "1rem",
                  cursor: "pointer",
                  transition: "background 0.3s"
                }}>
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;