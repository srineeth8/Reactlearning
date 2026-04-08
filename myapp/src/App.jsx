import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Products from "./product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;