import React, { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function FrontendLayout(props) {
  useEffect(() => {
    var url = window.location.href;
    var pathname = new URL(url).pathname.match(/[^\/]+/g);
    if (pathname == "dashboard") {
      document.getElementById("top-marquee").classList.add("d-none");
      document.getElementById("root").classList.add("marquue-remove");
      document.getElementById("root").classList.remove("marquue-add");
    } else {
      document.getElementById("top-marquee").classList.remove("d-none");
      document.getElementById("root").classList.remove("marquue-remove");
      document.getElementById("root").classList.add("marquue-add");
    }
  }, []);

  return (
    <div>
      <React.Fragment>
        <Header />
        {props.children}
        <Sidebar />
      </React.Fragment>
    </div>
  );
}

export default FrontendLayout;
