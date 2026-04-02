import { useContext } from "react";
import { CountContext } from "./context/countctx";

const Footer = () => {
  const { count } = useContext(CountContext);

  return (
    <div>
      <h2>Footer</h2>
      <h3>Count: {count}</h3>
    </div>
  );
};

export default Footer;