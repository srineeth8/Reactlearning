import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/countctx";
import { AuthProvider } from "./context/authctx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </AuthProvider>
);