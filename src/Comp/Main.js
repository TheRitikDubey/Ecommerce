import React from "react";
import Men from "./Men";
import Users from "./Users";
import Women from "./Women";
import Cart from "./Cart";
import Kids from "./Kids";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Main() {
  const toBeChecked = () => {
    console.log("checked");
  };
  return (
    <Router>
      <div>
        <div className="nav">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
              <Link class="navbar-brand" to="/Users">
                <li>Home</li>
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link to="/Men" class="nav-link active" aria-current="page">
                      Men
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/Women" onClick={toBeChecked()}>
                      Women
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/Kids">
                      Kids
                    </Link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#">
                      Premium
                    </a>
                  </li>
                  <li class="nav-item cart">
                    <Link className="nav-link" to="/Cart">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        fill="currentColor"
                        class="bi bi-cart3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <Switch>
          <Route path="/Men">
            <Men />
          </Route>
          <Route path="/Users">
            <Users />
          </Route>

          <Route path="/Women">
            <Women />
          </Route>
          <Route path="/Kids">
            <Kids />
          </Route>

          <Route path="/Cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Main;
