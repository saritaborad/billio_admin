import FrontendLayout from "../Components/Layout/FrontendLayout";
import User_Profile from "../images/profile-img.png";
import React, { useState } from "react";
import RtdDatatable from "./Common/DataTable/RtdDatatable";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

function UserDetail() {
  const [new_sub_columns, setNew_sub_columns] = useState([
    {
      value: "name",
      label: "Name",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      value: "transaction_id",
      label: "Transaction Id",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      value: "subscription",
      label: "Subscription",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      value: "valid_till",
      label: "Valid Till",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      value: "amount",
      label: "Amount",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (data, i) => {
          return <span className="increment-prize">+1.38%</span>;
        },
      },
    },
  ]);

  const [new_sub_data, setNew_sub_data] = useState([
    {
      name: "John Doe",
      transaction_id: "#123456",
      subscription: "Basic plan",
      valid_till: "1/17/2022",
    },
    {
      name: "John Doe",
      transaction_id: "#123456",
      subscription: "Basic plan",
      valid_till: "1/17/2022",
    },
    {
      name: "John Doe",
      transaction_id: "#123456",
      subscription: "Basic plan",
      valid_till: "1/17/2022",
    },
    {
      name: "John Doe",
      transaction_id: "#123456",
      subscription: "Basic plan",
      valid_till: "1/17/2022",
    },
    {
      name: "John Doe",
      transaction_id: "#123456",
      subscription: "Basic plan",
      valid_till: "1/17/2022",
    },
  ]);

  const [new_sub_options, setNew_sub_options] = useState({
    download: false,
    print: false,
    viewColumns: false,
    filter: false,
    responsive: "standard",
    selectableRows: "none",
    pagination: false,
    toolbar: false,
    searchOpen: false,
    search: false,
  });

  const [transaction_columns, setTransaction_columns] = useState([
    {
      value: "portfolio",
      label: "Portfolio",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      value: "invested",
      label: "Invested",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      value: "date",
      label: "Date",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      value: "status",
      label: "Status",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (data, i) => {
          return <span className="increment-prize">Buy</span>;
        },
      },
    },
    {
      value: "gain_loss",
      label: "Total Gain/Loss",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (data, i) => {
          return <span className="increment-prize">+$50.3</span>;
        },
      },
    },
  ]);

  const [transaction_data, setTransaction_data] = useState([
    { portfolio: "Portfolio 1", invested: "$2695", date: "1/17/2022" },
    { portfolio: "Portfolio 1", invested: "$2695", date: "1/17/2022" },
    { portfolio: "Portfolio 1", invested: "$2695", date: "1/17/2022" },
    { portfolio: "Portfolio 1", invested: "$2695", date: "1/17/2022" },
    { portfolio: "Portfolio 1", invested: "$2695", date: "1/17/2022" },
  ]);

  const [transaction_options, setTransaction_options] = useState({
    download: false,
    print: false,
    viewColumns: false,
    filter: false,
    responsive: "standard",
    selectableRows: "none",
    pagination: false,
    toolbar: false,
    searchOpen: false,
    search: false,
  });
  //  Modal //
  const [showblocklist, setshowblocklist] = useState(false);
  const [addnewblocklist, setblocklist] = useState(false);

  const addblocklistClose = () => {
    setblocklist(false);
  };

  const blocklistmodal = () => {
    setblocklist(true);
  };

  return (
    <>
      <FrontendLayout>
        <div className="admin-page-info-main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="bdr-top-hero border-bottom-0">
                  <div className="row align-items-center">
                    <div className="col-md-12">
                      <div className="cust-breadcum d-flex align-items-center">
                        <nav className="breadcrumb-info-custom me-2">
                          <ol className="breadcrumb align-items-center mb-0">
                            <li className="breadcrumb-item">
                              <a href="/">Admin</a>
                            </li>

                            <li className="breadcrumb-item active" aria-current="page">
                              <Link to={"/users"}> User</Link>
                            </li>
                            <li className="breadcrumb-item">John Deo</li>
                          </ol>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 mb-3">
                <div className="small-header-text d-flex align-items-center">
                  <div>
                    <h3>User Detail</h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 mb-3">
                <div className="card-box-common user-info h-100">
                  <div className="d-xxl-flex d-xl-block d-md-flex align-items-center">
                    <div className="d-flex align-items-center mb-xxl-0 mb-3">
                      <div className="user-detail-img">
                        <img src={User_Profile} alt="" />
                      </div>
                      <div className="ms-2">
                        <bdi>John Deo</bdi>
                        <span className="user-status d-block active">Active</span>
                      </div>
                    </div>
                    <div className="d-sm-flex align-items-center">
                      <div className="d-flex align-items-center ms-xxl-3 ms-xl-0 ms-md-3  ms-0">
                        <div className="dash-assets-div-img red-bg rounded">
                          <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.3173 10.3697C16.6792 10.7868 17.3108 10.8316 17.7279 10.4696C18.1451 10.1077 18.1898 9.47609 17.8279 9.05895L16.3173 10.3697ZM10.9971 16.9447C10.6352 16.5275 10.0036 16.4828 9.58646 16.8447C9.16932 17.2067 9.12458 17.8383 9.48654 18.2554L10.9971 16.9447ZM14.6572 7.08576C14.6572 6.53347 14.2095 6.08576 13.6572 6.08576C13.1049 6.08576 12.6572 6.53347 12.6572 7.08576H14.6572ZM12.6572 20.2286C12.6572 20.7809 13.1049 21.2286 13.6572 21.2286C14.2094 21.2286 14.6572 20.7809 14.6572 20.2286L12.6572 20.2286ZM24.4858 13.6572C24.4858 19.6376 19.6376 24.4858 13.6572 24.4858V26.4858C20.7422 26.4858 26.4858 20.7422 26.4858 13.6572H24.4858ZM13.6572 24.4858C7.67673 24.4858 2.82861 19.6376 2.82861 13.6572H0.828613C0.828613 20.7422 6.57216 26.4858 13.6572 26.4858V24.4858ZM2.82861 13.6572C2.82861 7.67673 7.67673 2.82861 13.6572 2.82861V0.828613C6.57216 0.828613 0.828613 6.57216 0.828613 13.6572H2.82861ZM13.6572 2.82861C19.6376 2.82861 24.4858 7.67673 24.4858 13.6572H26.4858C26.4858 6.57216 20.7422 0.828613 13.6572 0.828613V2.82861ZM13.6572 12.6572C12.7383 12.6572 11.9516 12.4071 11.4239 12.0552C10.8891 11.6988 10.7143 11.3161 10.7143 11.0286H8.71433C8.71433 12.1929 9.42216 13.1245 10.3145 13.7193C11.2138 14.3189 12.3985 14.6572 13.6572 14.6572V12.6572ZM10.7143 11.0286C10.7143 10.7411 10.8891 10.3585 11.4239 10.002C11.9516 9.65015 12.7383 9.40004 13.6572 9.40004V7.40004C12.3985 7.40004 11.2138 7.73836 10.3145 8.33788C9.42216 8.93275 8.71433 9.86437 8.71433 11.0286H10.7143ZM13.6572 9.40004C14.91 9.40004 15.8739 9.85876 16.3173 10.3697L17.8279 9.05895C16.9077 7.99853 15.3232 7.40004 13.6572 7.40004V9.40004ZM13.6572 14.6572C14.5761 14.6572 15.3628 14.9073 15.8905 15.2591C16.4253 15.6156 16.6001 15.9983 16.6001 16.2858H18.6001C18.6001 15.1215 17.8922 14.1899 16.9999 13.595C16.1006 12.9955 14.9159 12.6572 13.6572 12.6572V14.6572ZM12.6572 7.08576V8.40004H14.6572V7.08576H12.6572ZM12.6572 18.9143L12.6572 20.2286L14.6572 20.2286L14.6572 18.9143L12.6572 18.9143ZM13.6572 17.9143C12.4045 17.9143 11.4405 17.4556 10.9971 16.9447L9.48654 18.2554C10.4067 19.3158 11.9912 19.9143 13.6572 19.9143L13.6572 17.9143ZM16.6001 16.2858C16.6001 16.5732 16.4253 16.9559 15.8905 17.3124C15.3628 17.6642 14.5761 17.9143 13.6572 17.9143V19.9143C14.9159 19.9143 16.1006 19.576 16.9999 18.9765C17.8922 18.3816 18.6001 17.45 18.6001 16.2858H16.6001ZM12.6572 8.40004L12.6572 18.9143L14.6572 18.9143L14.6572 8.40004L12.6572 8.40004Z" fill="#D24944" />
                          </svg>
                        </div>
                        <div className="ms-2">
                          <span>Total Invested</span>
                          <bdi className="d-block">+$29,600.59</bdi>
                        </div>
                      </div>
                      <div className="d-flex align-items-center ms-sm-3 mt-sm-0 mt-3 ">
                        <div className="dash-assets-div-img red-bg rounded">
                          <svg width="27" height="17" viewBox="0 0 27 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9144 0.771484L21.9241 3.7812L15.5104 10.1949L10.2533 4.93777L0.514404 14.6898L2.36755 16.5429L10.2533 8.6572L15.5104 13.9143L23.7904 5.64748L26.8001 8.6572V0.771484H18.9144Z" fill="#D24944" />
                          </svg>
                        </div>
                        <div className="ms-2">
                          <span>Profit & Loss</span>
                          <bdi className="d-block">-$29,600.59</bdi>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="user-main-detail my-3">
                    <ul>
                      <li>
                        <div className="d-flex align-items-center mb-3">
                          <span>Email Address:</span>
                          <p>johndeo@gmail.com</p>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                          <span>Mobile Number: </span>
                          <p>+1 12345 67150</p>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                          <span>State:</span>
                          <p>New york</p>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center mb-3">
                          <span>YOB :</span>
                          <p>1996</p>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                          <span>City: </span>
                          <p>New york</p>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                          <span>State:</span>
                          <p>New york, USA</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <button className="brd-btn-new px-5" onClick={blocklistmodal}>
                    Add to Blacklist
                  </button>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="row h-100">
                  <div className="col-xxl-6 col-xl-12 col-md-6 mb-3">
                    <div className="dash-box-part h-100">
                      <div className="dash-box-main-div p-0">
                        <div className="dash-box-main-head border-bottom p-2 d-flex">
                          Portfolios
                          <span className="ms-auto">
                            <a href="#">See All</a>
                          </span>
                        </div>
                        <div className="p-3 fix-hgt-box mt-2">
                          <ul className="ps-0">
                            <li>
                              <div className="dash-assets-div-main">
                                <div className="dash-assets-div-img red-bg me-4">
                                  <span>P</span>
                                </div>
                                <div className="dash-assets-div-detail detail-part-div">
                                  <span className="d-block">Polariz</span>
                                  <bdi className="d-flex">
                                    <bdi>12 Assets</bdi>
                                    <bdi className="date-detail">9/15/2019</bdi>
                                  </bdi>
                                </div>
                                <div className="dash-assets-div-detail ms-auto">
                                  <span className="d-block">$1,049.61</span>
                                  <bdi className="d-block up-class">+1.75%</bdi>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="dash-assets-div-main">
                                <div className="dash-assets-div-img blue-bg me-4">
                                  <span>c</span>
                                </div>
                                <div className="dash-assets-div-detail detail-part-div">
                                  <span className="d-block">China Town</span>
                                  <bdi className="d-flex">
                                    <bdi>12 Shares</bdi>
                                    <bdi className="date-detail">9/15/2019</bdi>
                                  </bdi>
                                </div>
                                <div className="dash-assets-div-detail ms-auto">
                                  <span className="d-block">$38.44</span>
                                  <bdi className="d-block down-class">-0.67%</bdi>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="dash-assets-div-main">
                                <div className="dash-assets-div-img grey-bg me-4">
                                  <span>H</span>
                                </div>
                                <div className="dash-assets-div-detail detail-part-div">
                                  <span className="d-block">Holdings Incs</span>
                                  <bdi className="d-flex">
                                    <bdi>12 Shares</bdi>
                                    <bdi className="date-detail">9/15/2019</bdi>
                                  </bdi>
                                </div>
                                <div className="dash-assets-div-detail ms-auto">
                                  <span className="d-block">$3071.91</span>
                                  <bdi className="d-block down-class">-1.43%</bdi>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="dash-assets-div-main border-0">
                                <div className="dash-assets-div-img grey-1-bg me-4">
                                  <span>H</span>
                                </div>
                                <div className="dash-assets-div-detail detail-part-div">
                                  <span className="d-block">Helthzonices</span>
                                  <bdi className="d-flex">
                                    <bdi>12 Shares</bdi>
                                    <bdi className="date-detail">9/15/2019</bdi>
                                  </bdi>
                                </div>
                                <div className="dash-assets-div-detail ms-auto">
                                  <span className="d-block">$235.36</span>
                                  <bdi className="d-block up-class">+1.95%</bdi>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-12 col-md-6 mb-3">
                    <div className="card-box-common user-info h-100">
                      <div className="border-bottom mb-3 pb-3">
                        <bdi className="d-block fs-6 mb-2">Current Plan</bdi>
                        <span className="mb-3">02 February, 2022</span>
                        <div className="d-flex align-items-baseline">
                          <bdi className="fs-4">$4.99</bdi>
                          <span className="ms-3 fs-6">Duration 1 month</span>
                        </div>
                      </div>
                      <div className="plan-list-admin">
                        <ul>
                          <li>
                            <div className="d-flex align-items-center">
                              <i className="bi bi-check-lg me-2"></i> Loremis simply text of the printing
                            </div>
                          </li>
                          <li>
                            <div className="d-flex align-items-center">
                              <i className="bi bi-check-lg me-2"></i> Loremis simply text of the printing
                            </div>
                          </li>
                          <li>
                            <div className="d-flex align-items-center">
                              <i className="bi bi-check-lg me-2"></i> Loremis simply text of the printing
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="dash-box-part h-100">
                  <div className="dash-box-main-div">
                    <div className="dash-box-main-head d-flex">Transaction</div>
                    <div className="dash-box-table fix-body-class p-0 mt-3">
                      <div className="popular-ticker-table w-100">
                        <RtdDatatable data={transaction_data} columns={transaction_columns} option={transaction_options} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="dash-box-part h-100">
                  <div className="dash-box-main-div">
                    <div className="dash-box-main-head d-flex">New Subscription</div>
                    <div className="dash-box-table fix-body-class p-0 mt-3">
                      <div className="popular-ticker-table w-100">
                        <RtdDatatable data={new_sub_data} columns={new_sub_columns} option={new_sub_options} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal show={addnewblocklist} onHide={addblocklistClose} centered className="comn-modal-class">
          <Modal.Header closeButton>
            <Modal.Title className="mx-auto">Blacklist this user ?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-12">
                <div className="block-modal-user mx-5 text-center">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.0002 0.833496C13.9002 0.833496 0.833496 13.9002 0.833496 30.0002C0.833496 46.1002 13.9002 59.1668 30.0002 59.1668C46.1002 59.1668 59.1668 46.1002 59.1668 30.0002C59.1668 13.9002 46.1002 0.833496 30.0002 0.833496ZM6.66683 30.0002C6.66683 17.1085 17.1085 6.66683 30.0002 6.66683C35.396 6.66683 40.3543 8.50433 44.2918 11.596L11.596 44.2918C8.50433 40.3543 6.66683 35.396 6.66683 30.0002ZM30.0002 53.3335C24.6043 53.3335 19.646 51.496 15.7085 48.4043L48.4043 15.7085C51.496 19.646 53.3335 24.6043 53.3335 30.0002C53.3335 42.8918 42.8918 53.3335 30.0002 53.3335Z" fill="#D24944" />
                  </svg>

                  <span className="mt-3 d-block">Do you really want to block this user, this will deactivate the user.</span>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="justify-content-center border-0 pt-0">
            <button className="cancel-btn-class me-2" onClick={addblocklistClose}>
              Cancel
            </button>
            <button className="button-class rounded-pill mt-0">
              <span className="position-relative">Block</span>
            </button>
          </Modal.Footer>
        </Modal>
      </FrontendLayout>
    </>
  );
}

export default UserDetail;
