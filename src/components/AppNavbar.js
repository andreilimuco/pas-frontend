import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AppNavbar() {
  return (
    <nav className="flex mx-auto max-w-6xl ">
      <Link to="/">
        <img width={100} src="./images/pas-brand.png"></img>
      </Link>
      <div className="ml-auto self-center">
        <div className="flex">
          <Link to="/customers">
            <div className="mr-3">CUSTOMERS</div>
          </Link>

          <Link to="/login">
            <div className="mr-3">LOGIN</div>
          </Link>
          <Link to="/register">
            <div>REGISTER</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
