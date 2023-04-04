import React, { useState } from "react";
import FrontendLayout from "../Components/Layout/FrontendLayout";
import BankingIcon from "../images/banking-icn.svg";
import { Dropdown, Accordion, Modal } from "react-bootstrap";
import Empty from "../images/empty-portfolio.png";
import BannerFeed from "../images/banner-feed.png";
import Chart from "react-apexcharts";
import ChatComn from "../images/chat-comn.svg";
import GainerArw from "../images/gainer-arw.svg";
import Search from "../images/Search.svg";
import RtdDatatable from "./Common/DataTable/RtdDatatable";
import { Link } from "react-router-dom";

export default function PortfolioDetail() {
  const [shownewticker, setshownewticker] = useState(false);
  const [addnewtickers, setaddnewtickers] = useState(false);

  const [showdelete, setshowdelete] = useState(false);
  const [addnewdelete, setdelete] = useState(false);

  const adddeleteClose = () => {
    setdelete(false);
  };

  const deletemodal = () => {
    setdelete(true);
  };

  const option = {
    sizePerPage: 10,
    search: "",
    totalRecord: 0,
    page: 0,
    sort: "id",
    order: "ASC",
  };

  const columns = [
    {
      value: "no",
      label: "No",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      value: "name",
      label: "Name",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      value: "company_name",
      label: "Company Name",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      value: "daychart",
      label: "Day chart",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (data, i) => {
          return (
            <svg width={112} height={26} viewBox="0 0 112 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 23.119L3.78573 24.5975C4.13727 24.7841 4.56599 24.7445 4.87736 24.4966L7.89668 22.0929C8.2413 21.8185 8.72485 21.802 9.08741 22.0522L13.4339 25.051C13.8153 25.3142 14.3276 25.2808 14.6717 24.9704L18.9888 21.0753C19.3833 20.7193 19.9874 20.7341 20.364 21.1089L23.8859 24.6136C24.0733 24.8001 24.3269 24.9048 24.5913 24.9048H27.4935C27.96 24.9048 28.3645 24.5822 28.4684 24.1274L28.9011 22.2327C28.9853 21.8638 29.2706 21.5741 29.6381 21.4841L33.4597 20.548C33.7387 20.4796 34.0336 20.5345 34.2692 20.6987L36.2779 22.0979C36.6407 22.3506 37.1264 22.3351 37.4723 22.0597L42.7014 17.8968C42.8131 17.8079 42.9044 17.6961 42.9693 17.569L47.4525 8.78356C47.6233 8.44881 47.9674 8.2381 48.3432 8.2381H49.7203C50.104 8.2381 50.4538 8.01858 50.6208 7.67311L53.2662 2.1974C53.6151 1.47524 54.6295 1.43701 55.0318 2.13086L57.8084 6.92016C58.1693 7.54279 59.05 7.5917 59.4777 7.01287L61.5307 4.23441C61.9232 3.70323 62.7137 3.69168 63.1216 4.21117L63.4402 4.61709C63.8255 5.10782 64.5611 5.12983 64.975 4.66302L67.9108 1.35209C68.3112 0.900448 69.0175 0.903848 69.4136 1.35932L71.678 3.9632C71.8983 4.2166 72.2312 4.34247 72.5641 4.2983L76.2226 3.81288C76.4148 3.78738 76.6102 3.81829 76.7851 3.90185L79.9177 5.39817C80.1356 5.50221 80.3084 5.68154 80.4043 5.90305L83.2778 12.5371C83.5898 13.2573 84.572 13.3538 85.0182 12.708L87.5412 9.0561C87.8538 8.60357 88.4733 8.48847 88.9276 8.7985L90.4683 9.84982C90.6344 9.96318 90.8308 10.0238 91.0319 10.0238H96.3039C96.5612 10.0238 96.8086 9.92463 96.9947 9.74689L97.5225 9.24263C98.0296 8.7582 98.8649 8.93262 99.1357 9.57949L100.186 12.0886C100.342 12.4604 100.706 12.7024 101.109 12.7024H102.791C103.183 12.7024 103.538 12.9308 103.701 13.2869L106.014 18.3513C106.242 18.8494 106.828 19.0719 107.328 18.8504L109.385 17.9406C109.643 17.8268 109.84 17.6097 109.929 17.3428L111 14.1364" stroke="#DB542A" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          );
        },
      },
    },
    {
      value: "equity",
      label: "Equity",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      value: "threshold",
      label: "Threshold",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      value: "last_price",
      label: "Last Price",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      value: "change   ",
      label: "Change",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (data, i) => {
          return <span className="increment-prize">$597.42(3.42%)</span>;
        },
      },
    },

    {
      value: "volume",
      label: "Volume",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      value: "",
      label: "",
      options: {
        filter: false,
        sort: false,
        class: "abc",
        customBodyRender: (data, i) => {
          return (
            <>
              <div className="cust-drop-down hide-btn ">
                <Dropdown drop="left">
                  <Dropdown.Toggle className="btn option-bg-btn sell-btn cust-drop-btn" id="dropdown">
                    <svg width="6" height="20" viewBox="0 0 6 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.33268 2.99992C5.33268 4.28858 4.28801 5.33325 2.99935 5.33325C1.71068 5.33325 0.666016 4.28858 0.666016 2.99992C0.666016 1.71126 1.71068 0.666588 2.99935 0.666588C3.61819 0.666588 4.21168 0.91242 4.64926 1.35001C5.08685 1.78759 5.33268 2.38108 5.33268 2.99992ZM5.33268 9.99992C5.33268 11.2886 4.28801 12.3333 2.99935 12.3333C1.71068 12.3333 0.666016 11.2886 0.666016 9.99992C0.666016 8.71126 1.71068 7.66659 2.99935 7.66659C3.61819 7.66659 4.21168 7.91242 4.64926 8.35001C5.08685 8.78759 5.33268 9.38108 5.33268 9.99992ZM5.33268 16.9999C5.33268 18.2886 4.28801 19.3333 2.99935 19.3333C1.71068 19.3333 0.666016 18.2886 0.666016 16.9999C0.666016 15.7113 1.71068 14.6666 2.99935 14.6666C3.61819 14.6666 4.21168 14.9124 4.64926 15.35C5.08685 15.7876 5.33268 16.3811 5.33268 16.9999Z" fill="#5D5F5E" />
                    </svg>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <ul>
                      <li>
                        <Dropdown.Item>Change %</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item>Delete</Dropdown.Item>
                      </li>
                    </ul>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </>
          );
        },
      },
    },
  ];

  const data = [
    {
      no: "1",
      name: "MPWR",
      company_name: "Monolithic Power Syste...",
      last_price: "$3694.74",
      equity: "10%",
      threshold: "1%",
      price: "$269.42",
      volume: "647.57B ",
    },
    {
      no: "2",
      name: "MPWR",
      company_name: "Monolithic Power Syste...",
      last_price: "$3694.74",
      equity: "10%",
      threshold: "1%",
      price: "$269.42",
      volume: "647.57B ",
    },
    {
      no: "3",
      name: "MPWR",
      company_name: "Monolithic Power Syste...",
      last_price: "$3694.74",
      equity: "10%",
      threshold: "1%",
      price: "$269.42",
      volume: "647.57B ",
    },
    {
      no: "4",
      name: "MPWR",
      company_name: "Monolithic Power Syste...",
      last_price: "$3694.74",
      equity: "10%",
      threshold: "1%",
      price: "$269.42",
      volume: "647.57B ",
    },
  ];

  const chart_series = [
    {
      name: "",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ];

  const chart_options = {
    chart: {
      height: 300,
      toolbar: false,
      type: "area",
      fontFamily: "Inter, sans-serif",
      foreColor: "#5D5F5E",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#D24944"],
    stroke: {
      width: 2,
      curve: "smooth",
    },
    xaxis: {
      type: "month",
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
  };

  const shownewtickeroption = () => {
    setshownewticker(true);
  };

  const addnewtickersClose = () => {
    setaddnewtickers(false);
  };

  const addnewtickersmodal = () => {
    setaddnewtickers(true);
  };

  return (
    <FrontendLayout>
      <div className="admin-page-info-main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-9 mb-xl-0 mb-3">
              <div className="row">
                <div className="col-12">
                  <div className="bdr-top-hero border-bottom-0">
                    <div className="row align-items-center">
                      <div className="col-md-12">
                        <div className="cust-breadcum d-flex align-items-center pb-3 mb-3 border-bottom">
                          <nav className="breadcrumb-info-custom me-2">
                            <ol className="breadcrumb align-items-center mb-0">
                              <li className="breadcrumb-item">
                                <a href="/">Admin</a>
                              </li>
                              <li className="breadcrumb-item active" aria-current="page">
                                <Link to={"/portfolio"}>Portofolio</Link>
                              </li>
                              <li className="breadcrumb-item">Portfolio 1</li>
                            </ol>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="border-bottom pb-3 mb-3">
                    <div className="card-box-common border-0 p-0">
                      <div className="d-flex align-items-center">
                        <img src={BankingIcon} alt="" />
                        <div className="ps-3">
                          <div className="d-flex align-items-center mb-1">
                            <h4>Portfolio 1</h4>
                            <span className="user-status d-block deactive ms-2">Draft</span>
                          </div>
                          <div className="d-flex align-items-center">
                            <p>Created:Jan 18,2021</p>
                            <p className="ms-2">Risk Level : 2</p>
                          </div>
                        </div>
                        <div className="cust-drop-down ms-auto">
                          <Dropdown drop="left">
                            <Dropdown.Toggle className="cust-drop-btn" id="dropdown">
                              <i className="bi bi-three-dots-vertical"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <ul>
                                <Link to={"/user-detail"}>
                                  <li>
                                    <Dropdown.Item href="/user-detail">Edit</Dropdown.Item>
                                  </li>
                                </Link>
                                <li>
                                  <Dropdown.Item onClick={deletemodal}>Delete</Dropdown.Item>
                                </li>
                              </ul>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-3">
                  <div className="small-header-text d-md-flex align-items-center">
                    <div>
                      <h3>Tickers</h3>
                      <span>simply dummy text of the printing and typesetting industry.</span>
                    </div>
                    <button className="btn-new-org mt-md-0 mt-2 ms-auto" onClick={addnewtickersmodal}>
                      + Add New Tickers
                    </button>
                  </div>
                </div>
                <div className="col-12 mb-3">
                  <div className="cust-table">
                    <RtdDatatable data={data} columns={columns} option={option} />
                  </div>
                  <div className="text-center mt-5">
                    <img src={Empty} alt="empty-data" className="img-fluid" />
                    <div className="empty-portfolio-data mt-4">
                      <p>There is nothing in this portfolio</p>
                      <span>simply dummy text of the printing and typesetting industry.</span>
                      <button className="btn-new-org bg-transparent mt-2" onClick={addnewtickersmodal}>
                        + Add New Tickers
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-3">
                  <div className="small-header-text d-flex align-items-center">
                    <h3>Related news</h3>
                  </div>
                </div>
                <div className="col-12 ">
                  <div>
                    <ul>
                      <li>
                        <div className="rltd-news-info row">
                          <div className="col-xl-11  col-lg-10 col-sm-10">
                            <div className="news-txt-info">
                              <bdi className="d-block">Tesla earnings: News about the Cybertruck and new factories could set the tone for 2022</bdi>
                              <div className="py-2 rltd-news-text">
                                <div className="d-flex align-items-center">
                                  <span>Tesla's (NASDAQ:TSLA) stock performance over the last performance over the las performance over the las decade has been nothing short of exceptional. Shares are up almost 23,000%</span>
                                  <a href="/">Read More</a>
                                </div>
                              </div>
                              <p className="mb-0 pe-2">
                                <b>BBC</b>
                              </p>
                              <p className="mb-0 pe-2">1/18/2022</p>
                              <p className="mb-0">7:20pm</p>
                            </div>
                          </div>
                          <div className="col-xl-1 col-lg-2 col-sm-2 ps-sm-0">
                            <div className="ms-auto fix-rtds-section h-100">
                              <img src={BannerFeed} className="img-fluid h-100" alt="" />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="rltd-news-info row">
                          <div className="col-xl-11  col-lg-10 col-sm-10">
                            <div className="news-txt-info">
                              <bdi className="d-block">Tesla earnings: News about the Cybertruck and new factories could set the tone for 2022</bdi>
                              <div className="py-2 rltd-news-text">
                                <div className="d-flex align-items-center">
                                  <span>Tesla's (NASDAQ:TSLA) stock performance over the last performance over the las performance over the las decade has been nothing short of exceptional. Shares are up almost 23,000%</span>
                                  <a href="/">Read More</a>
                                </div>
                              </div>
                              <p className="mb-0 pe-2">
                                <b>BBC</b>
                              </p>
                              <p className="mb-0 pe-2">1/18/2022</p>
                              <p className="mb-0">7:20pm</p>
                            </div>
                          </div>
                          <div className="col-xl-1 col-lg-2 col-sm-2 ps-sm-0">
                            <div className="ms-auto fix-rtds-section h-100">
                              <img src={BannerFeed} className="img-fluid h-100" alt="" />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="rltd-news-info row">
                          <div className="col-xl-11  col-lg-10 col-sm-10">
                            <div className="news-txt-info">
                              <bdi className="d-block">Tesla earnings: News about the Cybertruck and new factories could set the tone for 2022</bdi>
                              <div className="py-2 rltd-news-text">
                                <div className="d-flex align-items-center">
                                  <span>Tesla's (NASDAQ:TSLA) stock performance over the last performance over the las performance over the las decade has been nothing short of exceptional. Shares are up almost 23,000%</span>
                                  <a href="/">Read More</a>
                                </div>
                              </div>
                              <p className="mb-0 pe-2">
                                <b>BBC</b>
                              </p>
                              <p className="mb-0 pe-2">1/18/2022</p>
                              <p className="mb-0">7:20pm</p>
                            </div>
                          </div>
                          <div className="col-xl-1 col-lg-2 col-sm-2 ps-sm-0">
                            <div className="ms-auto fix-rtds-section h-100">
                              <img src={BannerFeed} className="img-fluid h-100" alt="" />
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 border-start px-xl-0">
              <div className="rgt-side-head ">Overview & Settings</div>
              <div className="rgt-side-info px-xl-3 pt-3">
                <div className="row">
                  <div className="col-12 mb-3">
                    <div className="small-header-text d-md-flex align-items-center">
                      <h3>Portfolio Status</h3>
                      <span className="user-status d-block ms-auto save">Save</span>
                    </div>
                  </div>
                  <div className="col-12 mb-3 ">
                    <div className="cust-rgt-select text-center border-bottom pb-3">
                      <select className="form-select form-ans-class rounded-pill">
                        <option>Draft</option>
                        <option>Active</option>
                      </select>
                      <p>This Portfolio will be hidden from Billio App & Website</p>
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="pb-3 border-bottom">
                      <div className="small-header-text">
                        <h3>Portfolio Buyer</h3>
                      </div>
                      <div className="dash-box-part ">
                        <div className="dash-box-main-div">
                          <div className="d-flex align-items-center">
                            <div className="dash-box-main-head fw-normal fs-6 me-2">Total Buyer - 1,200</div>
                            <div className="select-dash-box ms-auto">
                              Last :
                              <select className="border-0 py-2">
                                <option>6 Months</option>
                              </select>
                            </div>
                          </div>
                          <div className="chart-main-section ">
                            <Chart options={chart_options} series={chart_series} type="area" height={300} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mb-3 ">
                    <div className="cust-tab-side tab-content">
                      <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <img src={GainerArw} className="me-2" alt="" />
                            Top Gainer
                          </Accordion.Header>
                          <Accordion.Body className="px-0">
                            <div className="row">
                              <div className="col-md-12 p-0">
                                <ul className="pt-2 scroll-window-height">
                                  <li>
                                    <div className="tabs-list-hover-main-part">
                                      <div className="tabs-list-cmn-main">
                                        <div className="tabs-list-main border-top-0">
                                          <div className="tabs-list-left">
                                            <span className="d-block">Tesla Inc</span>
                                            <bdi className="d-block">TSLA</bdi>
                                          </div>
                                          <div className="tabs-list-fix">
                                            <div className="w-100 tabs-list-hover-hide">
                                              <div className="w-100 tabs-list-fix-list">
                                                <div className="tabs-list-ctr">
                                                  <img src={ChatComn} alt="" className="img-fluid" />
                                                </div>
                                                <div className="tabs-list-right text-end">
                                                  <span className="d-block">$995.65</span>
                                                  <bdi className="d-block">- $34.86 (3.38%)</bdi>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="tabs-list-hover-main-part">
                                      <div className="tabs-list-cmn-main">
                                        <div className="tabs-list-main">
                                          <div className="tabs-list-left">
                                            <span className="d-block">Tesla Inc</span>
                                            <bdi className="d-block">TSLA</bdi>
                                          </div>
                                          <div className="tabs-list-fix">
                                            <div className="w-100 tabs-list-hover-hide">
                                              <div className="w-100 tabs-list-fix-list">
                                                <div className="tabs-list-ctr">
                                                  <img src={ChatComn} alt="" className="img-fluid" />
                                                </div>
                                                <div className="tabs-list-right text-end">
                                                  <span className="d-block">$995.65</span>
                                                  <bdi className="d-block">- $34.86 (3.38%)</bdi>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="tabs-list-hover-main-part">
                                      <div className="tabs-list-cmn-main">
                                        <div className="tabs-list-main">
                                          <div className="tabs-list-left">
                                            <span className="d-block">Tesla Inc</span>
                                            <bdi className="d-block">TSLA</bdi>
                                          </div>
                                          <div className="tabs-list-fix">
                                            <div className="w-100 tabs-list-hover-hide">
                                              <div className="w-100 tabs-list-fix-list">
                                                <div className="tabs-list-ctr">
                                                  <img src={ChatComn} alt="" className="img-fluid" />
                                                </div>
                                                <div className="tabs-list-right text-end">
                                                  <span className="d-block">$995.65</span>
                                                  <bdi className="d-block">- $34.86 (3.38%)</bdi>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="tabs-list-hover-main-part">
                                      <div className="tabs-list-cmn-main">
                                        <div className="tabs-list-main">
                                          <div className="tabs-list-left">
                                            <span className="d-block">Tesla Inc</span>
                                            <bdi className="d-block">TSLA</bdi>
                                          </div>
                                          <div className="tabs-list-fix">
                                            <div className="w-100 tabs-list-hover-hide">
                                              <div className="w-100 tabs-list-fix-list">
                                                <div className="tabs-list-ctr">
                                                  <img src={ChatComn} alt="" className="img-fluid" />
                                                </div>
                                                <div className="tabs-list-right text-end">
                                                  <span className="d-block">$995.65</span>
                                                  <bdi className="d-block">- $34.86 (3.38%)</bdi>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="tabs-list-hover-main-part">
                                      <div className="tabs-list-cmn-main">
                                        <div className="tabs-list-main">
                                          <div className="tabs-list-left">
                                            <span className="d-block">Tesla Inc</span>
                                            <bdi className="d-block">TSLA</bdi>
                                          </div>
                                          <div className="tabs-list-fix">
                                            <div className="w-100 tabs-list-hover-hide">
                                              <div className="w-100 tabs-list-fix-list">
                                                <div className="tabs-list-ctr">
                                                  <img src={ChatComn} alt="" className="img-fluid" />
                                                </div>
                                                <div className="tabs-list-right text-end">
                                                  <span className="d-block">$995.65</span>
                                                  <bdi className="d-block">- $34.86 (3.38%)</bdi>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={addnewtickers} onHide={addnewtickersClose} centered className="comn-modal-class">
        <Modal.Header closeButton>
          <Modal.Title className="mx-auto">Add New Tickers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-12">
              <div className="search-div mb-3">
                <div className="input-group ">
                  <span className="input-group-text ">
                    <img src={Search} alt="search" />
                  </span>
                  <input type="search" className="form-control border-start-0 h-auto ps-0" placeholder="Search for stocks & more"></input>
                </div>
              </div>
              <div className="suggest-box">
                <div className="p-3 suggest-text">
                  Stock Suggestion <i className="bi bi-info-circle ms-2"></i>
                </div>
                <div className="suggestion-list">
                  <ul>
                    <li onClick={shownewtickeroption}>
                      <div className="d-flex border-bottom">
                        <span>MPWR</span>
                        <p>Monolithic Power Syste...</p>
                        <span>$269.42</span>
                        <bdi className="increment-prize d-flex">
                          <i className="bi bi-arrow-up me-1"></i>$597.42(3.42%)
                        </bdi>
                      </div>

                      {shownewticker && (
                        <div className="suggest-form bg-white">
                          <div className="row">
                            <div className="col-6 mb-3 form-group">
                              <label className="form-lbl-class mb-2">Equity Weightage</label>
                              <input type="number" className="form-control form-ans-class rounded-pill bg-white" placeholder="10%" />
                            </div>
                            <div className="col-6 mb-3 form-group">
                              <label className="form-lbl-class mb-2">Threshold</label>
                              <input type="number" className="form-control form-ans-class rounded-pill bg-white" placeholder="2%" />
                            </div>
                          </div>
                        </div>
                      )}
                    </li>

                    <li>
                      <div className="d-flex border-bottom">
                        <span>MPWR</span>
                        <p>Monolithic Power Syste...</p>
                        <span>$269.42</span>
                        <bdi className="decrement-prize d-flex">
                          <i className="bi bi-arrow-down me-1"></i>$597.42(3.42%)
                        </bdi>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex border-bottom">
                        <span>MPWR</span>
                        <p>Monolithic Power Syste...</p>
                        <span>$269.42</span>
                        <bdi className="increment-prize d-flex">
                          <i className="bi bi-arrow-up me-1"></i>$597.42(3.42%)
                        </bdi>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex border-bottom">
                        <span>MPWR</span>
                        <p>Monolithic Power Syste...</p>
                        <span>$269.42</span>
                        <bdi className="increment-prize d-flex">
                          <i className="bi bi-arrow-up me-1"></i>$597.42(3.42%)
                        </bdi>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex border-bottom">
                        <span>MPWR</span>
                        <p>Monolithic Power Syste...</p>
                        <span>$269.42</span>
                        <bdi className="decrement-prize d-flex">
                          <i className="bi bi-arrow-down me-1"></i>$597.42(3.42%)
                        </bdi>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex border-bottom">
                        <span>MPWR</span>
                        <p>Monolithic Power Syste...</p>
                        <span>$269.42</span>
                        <bdi className="increment-prize d-flex">
                          <i className="bi bi-arrow-up me-1"></i>$597.42(3.42%)
                        </bdi>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="bg-transparent border-0 red-bold-txt me-2" onClick={addnewtickersClose}>
            Cancel
          </button>
          <button className="gray-btn px-5 rounded-pill mt-0" onClick={addnewtickersClose}>
            <span className="position-relative">Add</span>
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={addnewdelete} onHide={adddeleteClose} centered className="comn-modal-class">
        <Modal.Header closeButton>
          <Modal.Title className="mx-auto">Delete This Portfolio ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-12">
              <div className="block-modal-user mx-5 text-center">
                <svg width="42" height="54" viewBox="0 0 42 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.50065 47.4167C3.50065 50.625 6.12565 53.25 9.33398 53.25H32.6673C35.8757 53.25 38.5007 50.625 38.5007 47.4167V12.4167H3.50065V47.4167ZM9.33398 18.25H32.6673V47.4167H9.33398V18.25ZM31.209 3.66667L28.2923 0.75H13.709L10.7923 3.66667H0.583984V9.5H41.4173V3.66667H31.209Z" fill="#D24944" />
                </svg>
                <span className="mt-3 d-block">Do you really want to delete this portfolio?</span>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center border-0 pt-0">
          <button className="cancel-btn-class cancel-btn-bg me-2" onClick={adddeleteClose}>
            Cancel
          </button>
          <button className="button-class rounded-pill mt-0" onClick={adddeleteClose}>
            <span className="position-relative">Delete</span>
          </button>
        </Modal.Footer>
      </Modal>
    </FrontendLayout>
  );
}
