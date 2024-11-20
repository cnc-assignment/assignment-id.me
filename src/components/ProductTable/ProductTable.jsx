import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryBadge from "../CategoryBadge/CategoryBadge";
import CustomLocationIcon from "../LocationIcon/LocationIcon";
import { productUrl } from "../../config/api";
import Error from "../Error";
import { formatDate, cleanString } from "../../utility/util";
import { handleAxiosError } from "../../utility/httpUtil";
import "./ProductTable.css";

const ProductTable = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get(productUrl);
      setProducts(response.data);
    } catch (err) {
      setError(handleAxiosError(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  /* this loading UI can be replaced with a nice react notofication component */
  if (loading) return <div>Data loading wait .....</div>;

  if (error) return <Error errorMessage={error} />;

  return (
    <div className="product-table-container">
      <h1 className="product-table-title">Purchases</h1>
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Purchase Date</th>
            <th>Category</th>
            <th>Description</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            const purchaseDate = formatDate(product.purchaseDate);
            const productDescription = cleanString(product.description);
            // console.log(`"${product.category}"`);
            return (
              <tr key={index}>
                <td className="product-title capitalize">{product.name}</td>
                <td>
                  <CustomLocationIcon url={product.location} />
                </td>
                <td>{purchaseDate}</td>
                <td>
                  <CategoryBadge category={product.category} />
                </td>
                <td className="capitalize">{productDescription}</td>
                <td className="product-price">${product.price.toFixed(2)}</td>
                <td className="edit-column">
                  <span className="edit-icon">⋮</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Mobile view: cards */}
      <div className="product-card-container">
        {products.map((product, index) => {
          const purchaseDate = formatDate(product.purchaseDate);
          const productDescription = cleanString(product.description);
          return (
            <div className="product-card" key={index}>
              <div className="card-row top-row">
                <span>
                  <CustomLocationIcon url={product.location} />
                </span>
                <strong className="product-title capitalize">
                  {product.name}
                </strong>
                <span className="product-price product-price-right">
                  ${product.price.toFixed(2)}
                </span>
              </div>
              <div className="card-row description-row capitalize">
                <span>{productDescription}</span>
              </div>
              <div className="card-row">
                <strong>Purchase Date</strong>
              </div>
              <div className="card-row bottom-row">{purchaseDate}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductTable;
