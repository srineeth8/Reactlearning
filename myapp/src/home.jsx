import { useNavigate } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100%", flex: 1 }}>
      <Header title="Home Page" />

      <main style={{ padding: "20px", textAlign: "center", flex: 1 }}>
        <h1>Welcome to Home Page</h1>
        <button onClick={() => navigate("/product")}>Go to Products</button>
      </main>

      <Footer text="Thank you" />
    </div>
  );
};

export default Home;