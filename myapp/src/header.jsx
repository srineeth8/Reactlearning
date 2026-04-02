import { useContext } from "react";
import { CountContext } from "./context/countctx";

const Header = () => {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <h2>Header</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
};

export default Header;