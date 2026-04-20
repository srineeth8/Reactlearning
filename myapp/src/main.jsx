import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/countctx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <App />
  </CartProvider>
);