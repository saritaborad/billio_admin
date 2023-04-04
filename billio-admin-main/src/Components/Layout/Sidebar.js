import React from "react";
import { Link, useLocation } from "react-router-dom";
import RightArw from "../../images/rightarw.svg";
import LeftArw from "../../images/leftarw.svg";
import Dashboard from "../../images/dashboard.svg";
import Portfolio from "../../images/portfolio.svg";
import Pulse from "../../images/wallets.svg";
import Payments from "../../images/Payments.svg";
import Notification from "../../images/Notification.svg";
import Admins from "../../images/Admins.svg";
import Setting from "../../images/setting-icn.svg";

function Sidebar() {
  const Location = useLocation();

  const arwclick = () => {
    document.getElementById("root").classList.toggle("active-sidebar");
  };

  return (
    <div>
      <React.Fragment>
        <div className="position-fixed sidebar-menu-side" id="sidearw" onClick={arwclick}>
          <span>
            <img src={RightArw} alt="close" className="right-side-arw" />
            <img src={LeftArw} alt="open" className="left-side-arw" />
          </span>
        </div>
        <div className="sidebar-main-class">
          <div className="sidebar-main-part">
            <ul className="sidebar-menu-boxes">
              <li>
                <Link to={"/dashboard"}>
                  <a className={Location.pathname == "/dashboard" ? "active" : ""}>
                    <img src={Dashboard} alt="dashboard" />
                    <span>Dashboard</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link to={"/portfolio"}>
                  <a className={Location.pathname == "/portfolio" ? "active" : ""}>
                    <img src={Portfolio} alt="portfolio" />
                    <span>Portfolio</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link to={"/users"}>
                  <a className={Location.pathname == "/users" ? "active" : ""}>
                    <img src={Pulse} alt="Pulse" />
                    <span>Users</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link to={"/payment"}>
                  <a className={Location.pathname == "/payment" ? "active" : ""}>
                    <img src={Payments} alt="Payments" />
                    <span>Payments</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link to={"/notification"}>
                  <a className={Location.pathname == "/notification" ? "active" : ""}>
                    <img src={Notification} alt="Notification" />
                    <span>Notification</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link to={"/admins"}>
                  <a className={Location.pathname == "/admins" ? "active" : ""}>
                    <img src={Admins} alt="Admins" />
                    <span>Admins</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link to={"/setting"}>
                  <a className={Location.pathname == "/setting" ? "active" : ""}>
                    <img src={Setting} alt="setting" />
                    <span>Settings</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}

export default Sidebar;
