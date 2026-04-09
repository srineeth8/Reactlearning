import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Products from "./product";
import Details from "./details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;