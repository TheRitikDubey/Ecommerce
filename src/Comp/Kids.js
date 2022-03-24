import React from "react";
import data from "./data.json";
function Kids() {
  return (
    <div>
      <div className="kids-area">
        {data.map((val) => {
          return (
            <div className="kids-div">
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
