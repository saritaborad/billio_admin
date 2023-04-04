import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Logo from "../../images/logo.svg";
import Search from "../../images/Search.svg";
import Notification from "../../images/Notifications.svg";
import Pulse from "../../images/pulse.svg";
import Profile from "../../images/profile.png";
import { useNavigate } from "react-router-dom";
import Open from "../../images/dropdownarrow.svg";
import { GetApi } from "../../Pages/api/api-service";
import { API_Path } from "../../const";
import { toast } from "react-toastify";

function Header() {
  const Navigate = useNavigate();

  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [login, setLogin] = useState(false);
  const [shareData, setShareData] = useState([]);

  useEffect(() => {
    document.getElementById("search-btn").onclick = function () {
      document.getElementById("main-id").classList.toggle("active-searchbar");
      document.getElementById("root").classList.toggle("active-searchbar");
    };
    MostActiveShare();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setLogin(false)
    Navigate("/login")
  };

  const MostActiveShare = () => {
    const mostActiveShareDetails = new Promise((resolve) => {
      resolve(GetApi(API_Path.mostActiveShare));
    });
    mostActiveShareDetails.then((res) => {
      if (res.status === 200) {
        setShareData(res.data.data.data.items)
      } else {
        toast.error(res.data.message);
      }
    });
  }



  return (
    <div className="admin-hdr-sec">
      <React.Fragment>
        <div id="top-marquee" className="top-marque">
          <Marquee gradient={false}>
            <ul>
              {shareData.map((val, i) => {
                return (
                  <li key={i}>
                    <span>{val.info.ticker_symbols}</span>
                    <bdi className={val.price.last.today_change > 0 ? "increment" : "decrement"}>${val.price.last.today_change} ({val.price.last.value}%)</bdi>
                  </li>
                );
              })}
            </ul>
          </Marquee>
        </div>

        <header className="admin-hdr-part">
          <div className="container-fluid position-relative">
            <div className="row">
              <div className="col-12">
                <div className="admin-hdr-main" id="main-id">
                  <div className="hdr-logo ms-5">
                    <a href="/">
                      <img src={Logo} alt="billio" />
                    </a>
                  </div>
                  <div className="admin-hdr-rgt-side ms-auto me-2">
                    <ul className="d-flex align-items-center">
                      <li className="position-relative">
                        <div className="search-div">
                          <div className="input-group">
                            <span className="input-group-text border-0">
                              <img src={Search} alt="search" />
                            </span>
                            <input
                              type="search"
                              className="form-control border-0 h-auto ps-0"
                              placeholder="Search for stocks & more"
                            ></input>
                          </div>
                        </div>
                        <div
                          className="d-md-none admin-hdr-notif"
                          id="search-btn"
                        >
                          <button className="btn search-btn-hdr">
                            <img src={Search} alt="" />
                          </button>
                        </div>
                      </li>
                      <li className="admin-notif position-relative" id="notify">
                        <Dropdown className="d-inline mx-2" drop="left">
                          <Dropdown.Toggle
                            variant="transparent"
                            id="dropdown-autoclose-true"
                          >
                            <div className="admin-hdr-notif">
                              <img src={Notification} alt="notification" />
                            </div>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item disabled>
                              <div className="noti-head-class pb-3">
                                Tesla Inc. TSLA was greater than $950.85
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item disabled>
                              <div className="d-flex mt-3">
                                <div className="time-noti-div">10h . NEWS</div>
                                <div className="time-noti-div-img ms-auto">
                                  <img src={Pulse} alt="pulse" />
                                </div>
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item disabled>
                              <div className="noti-detail-part my-3 border-0">
                                <p>
                                  The value of Warren Buffett’s Apple investment
                                  just went up by $9.8 billion in less than a
                                  day
                                </p>
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="/inbox">
                              {/* <button type='button' className='btn view-noti-btn w-100 py-2'></button> */}

                              <a
                                href="/inbox"
                                className="btn view-noti-btn w-100 py-2"
                              >
                                View All Inbox
                              </a>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                      <li className="profile-hdr-drop-class" id="profile_open">
                        <Dropdown className="d-inline" drop="left">
                          <Dropdown.Toggle
                            variant="transparent"
                            id="dropdown-autoclose-true"
                          >
                            <div className="profile-hdr-drop">
                              <img
                                src={Profile}
                                alt="profile"
                                className="me-2"
                              />
                              <span>{userName}</span>
                              <img className="open-pro" src={Open} alt="open" />
                            </div>
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="/profile">
                              My Profile
                            </Dropdown.Item>
                            <Dropdown.Item href="/wallet">
                              My Wallet
                            </Dropdown.Item>
                            <Dropdown.Item href="/aboutus">
                              About us
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                              Terms & Condition
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                              Privacy Policy
                            </Dropdown.Item>
                            <Dropdown.Item href="#" className="border-0" onClick={() => handleLogout()}  >
                              Logout
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    </div>
  );
}

export default Header;
