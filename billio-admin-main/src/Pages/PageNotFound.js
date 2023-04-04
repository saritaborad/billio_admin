import React, { Component } from "react";
import Logo from "../images/notfound-logo.png";
import NotFound from "../images/page-not-found.png";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="page-not-found-sec">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12 position-relative">
            <div className="notfound-logo">
              <img src={Logo} alt="Not-Found" className="img-fluid" />
            </div>
            <div className="not-found-img p-3">
              <img src={NotFound} alt="Not-Found" className="img-fluid" />
              <div className="not-found-txt mt-3">
                <p>Page Not Found</p>
                <span>
                  <Link to={"/dashboard"}>Go Home </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
