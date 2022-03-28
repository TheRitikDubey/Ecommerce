import React from "react";
import data from "./data.json";
import Description from "./Description";
import kids from "./kids.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Kids() {
  const [products, setProducts] = React.useState(data);
  const [open, setOpen] = React.useState(false);
  const [productImg, setproductImg] = React.useState();
  const ProductDescription = (val) => {
    console.log({ val });
    setProducts(val);
    setproductImg(val.images[0].asset.url);
    setOpen(true);
    console.log({ products });
  };
  return (
    <div>
      <div className="kids-area">
        {open === true ? (
          <div>
            <div className="product-desp">
              <div className="backbtn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="56"
                  fill="currentColor"
                  class="bi bi-arrow-left-circle-fill backbtn"
                  viewBox="0 0 16 16"
                  onClick={() => setOpen(false)}
                >
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                </svg>
              </div>
              <img src={productImg} className="product-img" />

              <ul className="prdoduct-text">
                <li className="product-name">{products.name}</li>
                <li className="product-price">₹ {products.price}</li>
                <li>{products.itemDescription}</li>
                <li className="instock">
                  Hurry Up, In Stock Only : {products.stock}
                </li>
                <li className="cart-btn">
                  <div>
                    <button type="button" class="btn btn-primary cart-btn">
                      Add to Cart
                    </button>
                    <button type="button" class="btn btn-danger wishlist">
                      Wishlist
                    </button>
                  </div>
                </li>
              </ul>
            </div>

            <div className="diffProductImg">
              {products.images.map((val, index) => {
                return (
                  <div className="choseimg">
                    <img
                      src={val.asset.url}
                      className="diffproduct-img"
                      onClick={() => setproductImg(val.asset.url)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          data.map((val) => {
            return (
              <div className="kids-div" onClick={() => ProductDescription(val)}>
                <img src={val.images[0].asset.url} className="kids-img" />

                <div className="kids-text">
                  <h5>{val.name}</h5>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Kids;
