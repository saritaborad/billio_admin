import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import Chart from "react-apexcharts";
import StartIcon from "../images/star-icn.svg";
import Notifications from "../images/Notifications.svg";
import GainerArw from "../images/gainer-arw.svg";
import LooserIcon from "../images/looser-icn.svg";
import BannerFeed from "../images/banner-feed.png";
import FrontendLayout from "../Components/Layout/FrontendLayout";

var data = require("../data/data.json");

function PortfolioData() {
  const option = {
    rangeSelector: {
      selected: 1,
    },

    chart: {
      animation: true,
      type: "candlestick",
      height: "500",
      fontFamily: '"Inter", sans-serif',
    },
    time: {
      useUTC: false,
    },
    title: {
      text: "",
    },
    navigator: {
      enabled: false,
    },
    scrollbar: {
      enabled: false,
    },
    xAxis: {
      zoomEnabled: true,
      width: "100%",
      range: 100,
      units: [["hour", [1]]],
    },
    yAxis: {
      title: {
        text: "",
        // margin: 20,
        style: {
          color: "black",
          fontWeight: 800,
          opacity: 0.7,
          fontFamily: '"Inter", sans-serif',
        },
      },
    },

    series: [
      {
        step: "center",
        name: "Hollow Candlestick",
        data: data,
        type: "candlestick",
        color: "#DB542A",
        dataGrouping: {
          units: [
            [
              "week", // unit name
              [1], // allowed multiples
            ],
            ["month", [1, 2, 3, 4, 6]],
          ],
        },
      },
    ],
    plotOptions: {
      candlestick: {
        lineColor: "#DB542A",
        upLineColor: "#148564", // docs
        upColor: "#148564",
        downColor: "red",
      },
    },

    credits: {
      enabled: false,
    },
  };

  const chart = {
    series: [25],
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        borderRadius: 100,
        hollow: {
          size: "45%",
        },

        dataLabels: {
          name: {
            show: false,
          },
          value: {
            color: "#D24944",
            fontWeight: 600,
            fontSize: "24px",
            offsetY: 10,
            show: false,
          },
        },
      },
    },
    stroke: {
      lineCap: "round",
    },

    colors: ["#D24944"],
  };
  return (
    <>
      <FrontendLayout>
        <div className="admin-page-info-main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-9 mb-xl-0 mb-3">
                <div className="row">
                  <div className="col-12">
                    <div className="bdr-top-hero border-bottom-0">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <div className="cust-breadcum d-flex align-items-center">
                            <nav className="breadcrumb-info-custom">
                              <ol className="breadcrumb align-items-center mb-0">
                                <li className="breadcrumb-item">
                                  <a href="/assets">Assets</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                  Tesla
                                </li>
                              </ol>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="small-header-text d-flex align-items-center">
                      <div>
                        <h3>Tesla Inc</h3>
                        <span>TSLA • NASDAQ</span>
                      </div>
                      <div className="bank-zon-right-div text-end ms-auto">
                        <span>995.65</span>
                        <bdi className="d-inline-block align-middle ms-2">
                          <i className="bi bi-caret-down-fill me-1" />
                          3.38%
                        </bdi>
                        <bdi className="d-inline-block ms-2">-5,081.00 Today</bdi>
                        <div className="pt-1">
                          <p>Jan 20, 4:14:46 AM UTC-5 · USD · NASDAQ </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <HighchartsReact highcharts={Highcharts} constructorType={"stockChart"} options={option} />
                  </div>
                  <div className="col-md-12 my-3">
                    <div className="small-header-text d-flex align-items-center">
                      <div>
                        <h3>Stats</h3>
                      </div>
                    </div>
                    <ul className="row list-stock-dtls mt-3">
                      <li className="col-md-4">
                        <div className="d-flex mb-3">
                          <span>Open</span>
                          <bdi className="ms-auto">$1,041.70</bdi>
                        </div>
                        <div className="d-flex mb-3">
                          <span>Day Range</span>
                          <bdi className="ms-auto">$995.00 - $1,054.67</bdi>
                        </div>
                        <div className="d-flex mb-3">
                          <span>Volume</span>
                          <bdi className="ms-auto">24.83M</bdi>
                        </div>
                        <div className="d-flex mb-3">
                          <span>Primary Exchange</span>
                          <bdi className="ms-auto">NASDAQ</bdi>
                        </div>
                      </li>
                      <li className="col-md-4">
                        <div className="d-flex mb-3">
                          <span>Previous Close</span>
                          <bdi className="ms-auto">$1,030.51</bdi>
                        </div>
                        <div className="d-flex mb-3">
                          <span>Year Range</span>
                          <bdi className="ms-auto">$539.49 - $1,243.49</bdi>
                        </div>
                        <div className="d-flex mb-3">
                          <span>P/E Ratio</span>
                          <bdi className="ms-auto">323.09</bdi>
                        </div>
                        <div className="d-flex mb-3">
                          <span>Bid</span>
                          <bdi className="ms-auto">0.00 x 1000</bdi>
                        </div>
                      </li>
                      <li className="col-md-4">
                        <div className="d-flex mb-3">
                          <span>Day Range</span>
                          <bdi className="ms-auto">$995.00 - $1,054.67</bdi>
                        </div>
                        <div className="d-flex mb-3">
                          <span>Market Cap</span>
                          <bdi className="ms-auto">999.90B USD</bdi>
                        </div>
                        <div className="d-flex mb-3">
                          <span>Dividend Yield</span>
                          <bdi className="ms-auto">-</bdi>
                        </div>
                        <div className="d-flex mb-3">
                          <span>Ask</span>
                          <bdi className="ms-auto">0.00 x 1000</bdi>
                        </div>
                      </li>
                    </ul>
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
              <div className="col-xl-3 px-xl-0 border-start">
                <div className="rgt-side-head ">Overview</div>
                <div className="rgt-side-info px-xl-3 pt-3">
                  <div className="rgt-side-info mb-3">
                    <h4>Ticker Overview</h4>
                  </div>
                  <div className="overview-gain-box">
                    <div className="row align-items-center chart-main-section">
                      <div className="col-xxl-4 col-xl-12 col-sm-3">
                        <Chart options={chart} series={chart.series} type="radialBar" height={150} />
                      </div>
                      <div className="col-xxl-8 col-xl-12 text-center col-sm-9">
                        <span>10 % Total Of the total portfolio</span>
                        <span>Weightage Value -$995.65</span>
                      </div>
                    </div>
                    <div className="overview-box-footr d-flex justify-content-between p-3">
                      <bdi>Total Gain</bdi>
                      <span className="d-flex align-items-center">
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" className="me-2" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.634705 6.76578C0.322286 6.45336 0.322286 5.94683 0.634705 5.63441L5.43471 0.834413C5.74713 0.521993 6.25366 0.521993 6.56608 0.834413L11.3661 5.63441C11.6785 5.94683 11.6785 6.45336 11.3661 6.76578C11.0537 7.0782 10.5471 7.0782 10.2347 6.76578L6.80039 3.33147L6.80039 12.6001C6.80039 13.0419 6.44222 13.4001 6.00039 13.4001C5.55856 13.4001 5.20039 13.0419 5.20039 12.6001L5.20039 3.33147L1.76608 6.76578C1.45366 7.0782 0.947125 7.0782 0.634705 6.76578Z" fill="#148564" />
                        </svg>
                        +1.5%
                      </span>
                      <span>+$15.2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FrontendLayout>
    </>
  );
}

export default PortfolioData;
