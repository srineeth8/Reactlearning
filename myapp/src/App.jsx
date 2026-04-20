import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Products from "./product";
import Details from "./details";
import Checkout from "./checkout";
import Layout from "./layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;