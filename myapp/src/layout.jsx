import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div style={{
      paddingTop: "85px",
      paddingBottom: "70px",
      minHeight: "100vh",
      background: "#f8f9fa",
      fontFamily: "Arial, sans-serif"
    }}>
      <style>
        {`
          ::-webkit-scrollbar {
            display: none;
          }
          * {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
      <Header />
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;