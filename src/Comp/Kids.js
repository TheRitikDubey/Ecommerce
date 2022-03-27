import React from "react";
import data from "./data.json";
import Description from "./Description";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Kids() {
  const[products,setProducts]=React.useState([]);
  const[open,setOpen]=React.useState(false);
  const[productImg,setproductImg]=React.useState();
  const ProductDescription=(val)=>{
    console.log({val});
    setProducts(val);

    setOpen(true);
    console.log({products});
    return(
      <div>
        hello
        <Description products={products}/>
      </div>
    )
  }
  return (
    <div>
      <div className="kids-area">
        
        
        { 
        open===true?
        <div className="product-desp">
            <img src={products.images[0].asset.url} className="product-img" />
              

              <ul className="prdoduct-text">
                <li className="product-name" >{products.name}</li>
                <li className="product-price" >Price: {products.price}</li>
                <li>{products.itemDescription}</li>
                <li className="instock" >Hurry in Stock:{products.stock}</li>
                <li></li>
              </ul>               
              <div className="diffProductImg" >
              {
                products.images.map((val)=>{
                  <div>
                    <img src={val.asset.url} className="product-img" />
                  </div>
                })
              }
                </div>

          </div>
          :
        data.map((val) => {
          return (
            <div className="kids-div" onClick={()=>ProductDescription(val)} >
              
              <img src={val.images[0].asset.url} className="kids-img" />
              

              <div className="kids-text">
                <h5>{val.name}</h5>
              </div>                                          
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Kids;
