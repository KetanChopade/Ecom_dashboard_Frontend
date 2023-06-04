import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products", {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });

    result = await result.json();
    setProducts(result);
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "delete",
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    });
    result = await result.json();
    if (result) {
      getProducts();
    }
  };

  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`, {
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
      });
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    } else {
      getProducts();
    }
  };

  return (
    <>
      <h2 className="text-center my-4">ProductList</h2>
      <h4 className="text-center">
        <input
          className="text-center"
          type="text"
          placeholder="Search Product"
          onChange={searchHandle}
        />
      </h4>
      <div className="container productList-main">
        <div className="productList my-4">
          <ul>
            <li>S. No</li>
            <li>Name</li>
            <li>Price</li>
            <li>Company</li>
            <li>Category</li>
            <li>Oprations</li>
            <li>Oprations</li>
          </ul>
          {products.length > 0 ? (
            products.map((item, index) => (
              <ul key={item._id}>
                <li>{index + 1}</li>
                <li>{item.name}</li>
                <li>{item.price}</li>
                <li>{item.company}</li>
                <li>{item.category}</li>
                <li>
                  <button
                    className="delete-product"
                    onClick={() => deleteProduct(item._id)}
                  >
                    Delete
                  </button>
                </li>
                <li>
                  <button className="update-product">
                    <Link to={`/updateProduct/${item._id}`}>Update</Link>
                  </button>
                </li>
              </ul>
            ))
          ) : (
            <h1 className="text-center mt-3">No Result Found</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
