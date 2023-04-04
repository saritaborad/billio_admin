import React from "react";
import RoutesMain from "./RoutesMain";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../src/Components/style.scss";

function App() {
  return (
    <div>
      <React.Fragment>
        <ToastContainer />
        <RoutesMain />
      </React.Fragment>
    </div>
  );
}

export default App;
