import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  return (
    <div>
      <Header title="Product Details" />

      <div style={{ padding: "20px" }}>
        {!product ? (
          <h3>Loading...</h3>
        ) : (
          <table border="1" cellPadding="10">
            <tbody>
              <tr>
                <td><b>Title</b></td>
                <td>{product.title}</td>
              </tr>
              <tr>
                <td><b>Description</b></td>
                <td>{product.description}</td>
              </tr>
              <tr>
                <td><b>Price</b></td>
                <td>{product.price}</td>
              </tr>
              <tr>
                <td><b>Category</b></td>
                <td>{product.category}</td>
              </tr>

              {/* ✅ Added More Fields */}
              <tr>
                <td><b>Brand</b></td>
                <td>{product.brand}</td>
              </tr>
              <tr>
                <td><b>Rating</b></td>
                <td>{product.rating}</td>
              </tr>
              <tr>
                <td><b>Stock</b></td>
                <td>{product.stock}</td>
              </tr>
              <tr>
                <td><b>Discount %</b></td>
                <td>{product.discountPercentage}</td>
              </tr>
              <tr>
                <td><b>Image</b></td>
                <td>
                  <img src={product.thumbnail} width="100" alt={product.title} />
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      <Footer text="Thank you" />
    </div>
  );
};

export default Details;