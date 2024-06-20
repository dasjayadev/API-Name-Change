import React, { useEffect, useState } from "react";
import axios from "axios";
function HitApi() {
  let [product, setProduct] = useState([]);

  useEffect(() => {
    fetchData("https://dummyjson.com/products");
  }, []);

  let fetchData = async (url) => {
    let result = await axios.get(url);
    console.log(result);
    setProduct(result.data.products);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="row mt-2">
        {product.map((event) => {
          return (
            <div className="col-12 col-md-3 col-sm-6 card mt-2">
              <div className="card">
                <img
                  src={event.images[0]}
                  className="card-img-top mx-auto"
                  alt="..."
                  style={{ height: "200px", width: "200px" }}
                />
                <div className="card-body">
                  <h5 className="card-title" >Brand:{event.brand}</h5>
                  <h5 className="card-title">Description:{event.description}</h5>
                  <p className="card-text">...</p>
                </div>
                <div className="card-footer d-flex  justify-content-between">
                  <button className="btn btn-success">ADD to CART</button>
                  <button className="btn btn-warning">BUY NOW</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HitApi;
