import React from "react";
import product_list from "../data/product_data";

export default function Header(){
    return (

      <nav>
          <div className="logo"> Products</div>
          <ul>
              <li>Home</li>
              <li>Products</li>
              <li>About Us</li>
              <li>Contact</li>
          </ul>
        <div className="cart">
              <i className="fa fa-shopping-basket"></i>
          </div>
      </nav>
    )
}

