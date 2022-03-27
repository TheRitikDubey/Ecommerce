import React from "react";

import Product from "./Product";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { render } from "@testing-library/react";

function Women() {
  return(
    <Router>
      
     <div> 
       
    <Link to={"Product"}>btn</Link>
     </div>
     <Switch>
       <Route path="/Women" >
        <h1>dikh janma</h1>
       </Route>
       <Route path="/Product" >
        <Product/>
       </Route>
     </Switch>
    </Router>
      
  );
}

export default Women;
