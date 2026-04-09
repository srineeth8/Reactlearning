import { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(result => {
        setData(result.products);
      });
  }, []);

  return (
    <div>
      <Header title="Welcome to E-Commerce" />

      <div style={{ padding: "20px" }}>
        
        {/* Count Button */}
        <button onClick={() => setCount(count + 1)}>
          Count: {count}
        </button>

        {/* Product Cards */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "20px" }}>
          {data.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/details/${item.id}`)}
              style={{
                border: "1px solid black",
                padding: "10px",
                width: "200px",
                cursor: "pointer",
                transition: "transform 0.3s",
              }}
            >
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Final Count */}
        <h3 style={{ marginTop: "20px" }}>
          Final Count: {count}
        </h3>

      </div>

      <Footer text="Thank you" />
    </div>
  );
};

export default Products;