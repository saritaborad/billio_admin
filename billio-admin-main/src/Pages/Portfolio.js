import React, { useEffect, useRef, useState } from "react";
import FrontendLayout from "../Components/Layout/FrontendLayout";
import ChatComn from "../images/chat-comn.svg";
import ChartIcon from "../images/chart-icon-portfolio.svg";
import GainerArw from "../images/gainer-arw.svg";
import { Accordion, Modal, Tab, Tabs } from "react-bootstrap";
import RtdDatatable from "./Common/DataTable/RtdDatatable";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { GetApi, PostApi } from "../Pages/api/api-service";
import { API_Path } from "../const";
import { toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function Portfolio() {
  const navigate = useNavigate();
  const imgData = useRef();
  const riskData = useRef();

  const [createportfolio, setcreateportfolioClose] = useState(false);
  const [protfolioData, setProtfolioData] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [img, setImg] = useState(null);
  const [risk, setRisk] = useState("");
  const [options, set_option] = useState({
    download: false,
    print: false,
    viewColumns: false,
    sort: false,
    filter: false,
    responsive: "standard",
    selectableRows: "none",
    filterType: "dropdown",
    pagination: false,
    toolbar: false,
    searchOpen: false,
    search: false,
  });

  const columns = [
    {
      value: "no",
      label: "No",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (data, i) => {
          return i + 1;
        },
      },
    },
    {
      value: "name",
      label: "Name",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      value: "icon",
      label: "Day chart",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (data, i) => {
          return (
            <>
              {data[i].icone ? (
                data[i].icone
              ) : (
                <svg width={112} height={26} viewBox="0 0 112 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 23.119L3.78573 24.5975C4.13727 24.7841 4.56599 24.7445 4.87736 24.4966L7.89668 22.0929C8.2413 21.8185 8.72485 21.802 9.08741 22.0522L13.4339 25.051C13.8153 25.3142 14.3276 25.2808 14.6717 24.9704L18.9888 21.0753C19.3833 20.7193 19.9874 20.7341 20.364 21.1089L23.8859 24.6136C24.0733 24.8001 24.3269 24.9048 24.5913 24.9048H27.4935C27.96 24.9048 28.3645 24.5822 28.4684 24.1274L28.9011 22.2327C28.9853 21.8638 29.2706 21.5741 29.6381 21.4841L33.4597 20.548C33.7387 20.4796 34.0336 20.5345 34.2692 20.6987L36.2779 22.0979C36.6407 22.3506 37.1264 22.3351 37.4723 22.0597L42.7014 17.8968C42.8131 17.8079 42.9044 17.6961 42.9693 17.569L47.4525 8.78356C47.6233 8.44881 47.9674 8.2381 48.3432 8.2381H49.7203C50.104 8.2381 50.4538 8.01858 50.6208 7.67311L53.2662 2.1974C53.6151 1.47524 54.6295 1.43701 55.0318 2.13086L57.8084 6.92016C58.1693 7.54279 59.05 7.5917 59.4777 7.01287L61.5307 4.23441C61.9232 3.70323 62.7137 3.69168 63.1216 4.21117L63.4402 4.61709C63.8255 5.10782 64.5611 5.12983 64.975 4.66302L67.9108 1.35209C68.3112 0.900448 69.0175 0.903848 69.4136 1.35932L71.678 3.9632C71.8983 4.2166 72.2312 4.34247 72.5641 4.2983L76.2226 3.81288C76.4148 3.78738 76.6102 3.81829 76.7851 3.90185L79.9177 5.39817C80.1356 5.50221 80.3084 5.68154 80.4043 5.90305L83.2778 12.5371C83.5898 13.2573 84.572 13.3538 85.0182 12.708L87.5412 9.0561C87.8538 8.60357 88.4733 8.48847 88.9276 8.7985L90.4683 9.84982C90.6344 9.96318 90.8308 10.0238 91.0319 10.0238H96.3039C96.5612 10.0238 96.8086 9.92463 96.9947 9.74689L97.5225 9.24263C98.0296 8.7582 98.8649 8.93262 99.1357 9.57949L100.186 12.0886C100.342 12.4604 100.706 12.7024 101.109 12.7024H102.791C103.183 12.7024 103.538 12.9308 103.701 13.2869L106.014 18.3513C106.242 18.8494 106.828 19.0719 107.328 18.8504L109.385 17.9406C109.643 17.8268 109.84 17.6097 109.929 17.3428L111 14.1364" stroke="#148564" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
            </>
          );
        },
      },
    },
    {
      value: "cash",
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
          return <span className="increment-prize">$597.42({data[i].threshold}%)</span>;
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
            <ul className="d-flex align-items-center hide-btn">
              <li>
                <button className="btn buy-sell-btn sell-btn">
                  <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.71667 5.51667L10.4833 6.28333L2.93333 13.8333H2.16667V13.0667L9.71667 5.51667ZM12.7167 0.5C12.5083 0.5 12.2917 0.583333 12.1333 0.741667L10.6083 2.26667L13.7333 5.39167L15.2583 3.86667C15.5833 3.54167 15.5833 3.01667 15.2583 2.69167L13.3083 0.741667C13.1417 0.575 12.9333 0.5 12.7167 0.5ZM9.71667 3.15833L0.5 12.375V15.5H3.625L12.8417 6.28333L9.71667 3.15833Z" fill="#D24944" />
                  </svg>
                  Edit
                </button>
              </li>
            </ul>
          );
        },
      },
    },
  ];

  const createportfolioClose = () => {
    setcreateportfolioClose(false);
  };
  const createportfoliomodal = () => {
    setcreateportfolioClose(true);
  };

  const marks = {
    1: <strong>1</strong>,
    2: <strong>2</strong>,
    3: <strong>3</strong>,
    4: <strong>4</strong>,
    5: <strong>5</strong>,
    6: <strong>6</strong>,
    7: <strong>7</strong>,
  };

  useEffect(() => {
    getPortfoliosDetails();
    getWishlistDetails();
  }, []);

  const getPortfoliosDetails = () => {
    const GetPortfolios = new Promise((resolve) => {
      resolve(GetApi(API_Path.getProtfoliosData));
    });
    GetPortfolios.then((res) => {
      if (res.status === 200) {
        setProtfolioData(res.data.data);
      } else {
        toast.error(res.data.message);
      }
    });
  };

  const getWishlistDetails = () => {
    const GetPortfolios = new Promise((resolve) => {
      resolve(GetApi(API_Path.getWishListData));
    });
    GetPortfolios.then((res) => {
      if (res.status === 200) {
        setWishList(res.data.data.watchlist);
      } else {
        toast.error(res.data.message);
      }
    });
  };

  const submitFormData = (formData, resetForm) => {
    const AddPortfoliosDetails = new Promise((resolve) => {
      resolve(PostApi(API_Path.addProtfoliosData, formData));
    });
    console.log(formData);
    AddPortfoliosDetails.then((res) => {
      if (res.status === 200) {
        toast.success(res.data.message);
        resetForm(formData);
        navigate("/portfolio-detail");
      } else {
        toast.error(res.data.message);
        resetForm(formData);
      }
    });
  };

  const imgFlie = (e) => {
    setImg(e.target.files[0].name);
    imgData.current.setFieldValue("icon", e.target.files[0].name);
  };

  const onRiskLevel = (risk, e) => {
    setRisk(risk);
    riskData.current.setFieldValue("risk", e.target.value);
  };

  const tableCallBack = (option) => {
    set_option(option);
  };

  const errorContainer = (form, field) => {
    return form.touched[field] && form.errors[field] ? <span className="error text-danger">{form.errors[field]}</span> : null;
  };

  const formAttr = (form, field) => ({
    onBlur: form.handleBlur,
    onChange: form.handleChange,
    value: form.values[field],
  });

  return (
    <>
      <FrontendLayout>
        <div className="admin-page-info-main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-9 mb-xl-0 mb-3">
                <div className="row">
                  <div className="col-12 mb-3">
                    <div className="bdr-top-hero border-bottom-0">
                      <div className="row align-items-center">
                        <div className="col-md-12">
                          <div className="cust-breadcum d-sm-flex align-items-center">
                            <nav className="breadcrumb-info-custom me-2">
                              <ol className="breadcrumb align-items-center mb-0">
                                <li className="breadcrumb-item">
                                  <a href="/">Admin</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                  Portfolio
                                </li>
                              </ol>
                            </nav>
                            <button className="btn-new-org mt-sm-0 mt-2 ms-auto" onClick={createportfoliomodal}>
                              Create New Portfolio
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="cust-table">
                      <RtdDatatable data={protfolioData} columns={columns} option={options} tableCallBack={tableCallBack} />
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="small-header-text d-flex align-items-center">
                      <div>
                        <h3>Movers and Shakers</h3>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <ul className="n-scroll-show">
                      <li>
                        <a href="/1-week-gainer">
                          <div className="card-box-common">
                            <div className="d-flex align-items-center">
                              <img src={ChartIcon} alt="" />
                              <h4 className="ps-3">1 Week Gainer</h4>
                            </div>
                            <span className="mt-3">29 Tickers . 259k Followers</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div className="card-box-common">
                          <div className="d-flex align-items-center">
                            <img src={ChartIcon} alt="" />
                            <h4 className="ps-3">1 Week Gainer</h4>
                          </div>
                          <span className="mt-3">29 Tickers . 259k Followers</span>
                        </div>
                      </li>
                      <li>
                        <div className="card-box-common">
                          <div className="d-flex align-items-center">
                            <img src={ChartIcon} alt="" />
                            <h4 className="ps-3">1 Week Gainer</h4>
                          </div>
                          <span className="mt-3">29 Tickers . 259k Followers</span>
                        </div>
                      </li>
                      <li>
                        <div className="card-box-common">
                          <div className="d-flex align-items-center">
                            <img src={ChartIcon} alt="" />
                            <h4 className="ps-3">1 Week Gainer</h4>
                          </div>
                          <span className="mt-3">29 Tickers . 259k Followers</span>
                        </div>
                      </li>
                      <li>
                        <div className="card-box-common">
                          <div className="d-flex align-items-center">
                            <img src={ChartIcon} alt="" />
                            <h4 className="ps-3">1 Week Gainer</h4>
                          </div>
                          <span className="mt-3">29 Tickers . 259k Followers</span>
                        </div>
                      </li>
                      <li>
                        <div className="card-box-common">
                          <div className="d-flex align-items-center">
                            <img src={ChartIcon} alt="" />
                            <h4 className="ps-3">1 Week Gainer</h4>
                          </div>
                          <span className="mt-3">29 Tickers . 259k Followers</span>
                        </div>
                      </li>
                      <li>
                        <div className="card-box-common">
                          <div className="d-flex align-items-center">
                            <img src={ChartIcon} alt="" />
                            <h4 className="ps-3">1 Week Gainer</h4>
                          </div>
                          <span className="mt-3">29 Tickers . 259k Followers</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 border-start">
                <div className="cust-tab-side assets-tab-side">
                  <Tabs defaultActiveKey="market_action" className="mb-3 justify-content-between">
                    <Tab eventKey="market_action" title="Market Action">
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
                    </Tab>
                    <Tab eventKey="my-wishlist" title="My Wishlist">
                      <ul className="scroll-window-height">
                        {wishList.map((val, i) => {
                          return (
                            <li>
                              <div className="tabs-list-hover-main-part">
                                <div className="tabs-list-cmn-main">
                                  <div className="tabs-list-main">
                                    <div className="tabs-list-left">
                                      <span className="d-block">{val.ticker}</span>
                                      <bdi className="d-block">{val.ticker}</bdi>
                                    </div>
                                    <div className="tabs-list-fix">
                                      <div className="w-100 tabs-list-hover-hide">
                                        <div className="w-100 tabs-list-fix-list">
                                          <div className="tabs-list-ctr">
                                            <img src={ChatComn} alt="" />
                                          </div>
                                          <div className="tabs-list-right text-end">
                                            <span className="d-block">${val.price}</span>
                                            <bdi className="d-block">
                                              ${val.change} ({val.changePercent})
                                            </bdi>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal show={createportfolio} onHide={createportfolioClose} centered className="comn-modal-class">
          <Modal.Header closeButton>
            <Modal.Title className="mx-auto">Create New Portfolio</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <Formik
                innerRef={imgData}
                initialValues={{
                  icon: img,
                  name: "",
                  riskLevel: risk,
                }}
                validationSchema={Yup.object({
                  name: Yup.string().required("Protfolio Name is required."),
                })}
                onSubmit={(formData, { resetForm }) => {
                  submitFormData(formData, resetForm);
                }}
              >
                {(runform) => (
                  <form onSubmit={runform.handleSubmit}>
                    <div className="col-12 mb-3">
                      <div className="d-flex align-items-center">
                        <label htmlFor="upload-img" className="upload-box-img">
                          <input type="file" accept="image/*" id="upload-img" onChange={(e) => imgFlie(e)} />
                          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.6665 21.6666L1.6665 23.3333C1.6665 26.0947 3.90508 28.3333 6.6665 28.3333L23.3332 28.3333C26.0946 28.3333 28.3332 26.0947 28.3332 23.3333L28.3332 21.6666M21.6665 8.33325L14.9998 1.66659M14.9998 1.66659L8.33317 8.33325M14.9998 1.66659L14.9998 21.6666" stroke="#D24944" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="mt-2">Upload</span>
                        </label>
                        <div className="ms-3">
                          {img ? (
                            <p>upload</p>
                          ) : (
                            <div>
                              <span className="form-lbl-class d-block">Add Icon or Image</span>
                              <p>Upload 90x90px in .img or .svg format</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 mb-3 form-group">
                      <label className="form-lbl-class mb-2">Add Portfolio Name</label>
                      <input type="text" className="form-control form-ans-class bg-white rounded-pill" placeholder="Ex. Electric Top 100" {...formAttr(runform, "name")} name="name" />
                      {errorContainer(runform, "name")}
                    </div>
                    <div className="col-12">
                      <div className="d-flex align-items-center mb-2">
                        <label className="form-lbl-class mt-0">Add Portfolio Name</label>
                        <span className="ms-auto">Level: {risk}</span>
                      </div>
                      <div className="cust-range-class">
                        <div className="cust-range-class mb-3">
                          <Slider defaultValue={risk} min={1} max={7} marks={marks} onChange={(risk) => onRiskLevel(risk)} />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 mt-4 pt-3   bdr-top-class d-flex align-items-center justify-content-end">
                        <div className="me-sm-3">
                          <button className="bg-transparent border-0 red-bold-txt me-2" onClick={createportfolioClose}>
                            Cancel
                          </button>
                        </div>
                        <div>
                          <button className="button-class rounded-pill mt-0">
                            <span className="position-relative">Create Portfolio</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </Modal.Body>
        </Modal>
      </FrontendLayout>
    </>
  );
}

export default Portfolio;
