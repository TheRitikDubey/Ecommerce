import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import men1 from "./img/1.jpg";
import men2 from "./img/best.jpg";
import women from "./img/w1.jpg";
import kids from "./img/kids.jpg";
function users() {
  return (
    <>
      <div>
        <div className="nav"></div>
        <div className="cont">
          <div className="slides">
            <div
              id="carouselExampleSlidesOnly"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src={men1}
                    height={500}
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <h2>Trending</h2>
          <div className="category">
            <div class="card sub-cat" style={{ width: "18rem" }}>
              <img src={men2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Mens Suits</h5>
                <p class="card-text"></p>
                <a href="#" class="btn btn-primary">
                  Mens Trending
                </a>
              </div>
            </div>
            <div class="card sub-cat" style={{ width: "18rem" }}>
              <img src={women} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Womens Casuals</h5>
                <p class="card-text"></p>
                <a href="#" class="btn btn-primary">
                  Womens Trending
                </a>
              </div>
            </div>

            <div class="card sub-cat" style={{ width: "18rem" }}>
              <img src={kids} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Kids Collection</h5>
                <p class="card-text"></p>
                <a href="#" class="btn btn-primary">
                  Kids Trending
                </a>
              </div>
            </div>
          </div>
          <div className="brand"> Shop by your favorite Brand</div>
        </div>
      </div>
    </>
  );
}

export default users;
