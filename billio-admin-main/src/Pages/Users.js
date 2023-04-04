import React, { useEffect, useState, useRef } from "react";
import FrontendLayout from "../Components/Layout/FrontendLayout";
import User_Profile from "../images/profile-img.png";
import { Dropdown } from "react-bootstrap";
import RtdDatatable from "./Common/DataTable/RtdDatatable";
import Handle from "rc-slider/lib/Handles/Handle";
import { Link } from "react-router-dom";

function Users() {
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);

  const [startDate, setstartDate] = useState();

  const handleExport = () => {
    startDateRef.current.value = "";
    endDateRef.current.value = "";
  };

  const [columns, setColumns] = useState([
    {
      value: "no",
      label: "No",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      value: "photo",
      label: "Photo",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (data, i) => {
          return (
            <div className="table-img">
              <img src={User_Profile} alt="" />
            </div>
          );
        },
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
      value: "email",
      label: "Email address",
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
        sort: true,
      },
    },
    {
      value: "valid_till",
      label: "Valid Till",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      value: "status",
      label: "Status",
      options: {
        filter: false,
        sort: true,
        customBodyRender: (data, i) => {
          return <span className="user-status active">Active</span>;
        },
      },
    },
    {
      value: "action",
      label: "Actions",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (data, i) => {
          return (
            <div className="cust-drop-down">
              <Dropdown drop="left">
                <Dropdown.Toggle className="cust-drop-btn" id="dropdown">
                  <i className="bi bi-three-dots"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <ul>
                    <Link to={"/user-detail"}>
                      <li>
                        <Dropdown.Item href="/user-detail">View Detail</Dropdown.Item>
                      </li>
                    </Link>
                    <li>
                      <Dropdown.Item>Delete User</Dropdown.Item>
                    </li>
                  </ul>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          );
        },
      },
    },
  ]);

  const [data, setData] = useState([
    {
      no: "1",
      name: "John Doe",
      email: "johndoe@gmail.com",
      subscription: "Basic plan",
      valid_till: "1/17/2022",
    },
    {
      no: "1",
      name: "John Doe",
      email: "johndoe@gmail.com",
      subscription: "Basic plan",
      valid_till: "1/17/2022",
    },
    {
      no: "1",
      name: "John Doe",
      email: "johndoe@gmail.com",
      subscription: "Basic plan",
      valid_till: "1/17/2022",
    },
    {
      no: "1",
      name: "John Doe",
      email: "johndoe@gmail.com",
      subscription: "Basic plan",
      valid_till: "1/17/2022",
    },
    {
      no: "1",
      name: "John Doe",
      email: "johndoe@gmail.com",
      subscription: "Basic plan",
      valid_till: "1/17/2022",
    },
  ]);

  const [options, setOptions] = useState({
    download: false,
    print: false,
    viewColumns: false,
    sort: true,
    filter: false,
    responsive: "standard",
    selectableRows: "none",
    filterType: "dropdown",
    pagination: true,
    toolbar: false,
    searchOpen: false,
    search: false,
  });

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
                              User
                            </li>
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
                    <h3>User Analysis</h3>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row justify-content-center">
                  <div className="col-xl-3 col-lg-4 col-sm-6 mb-3">
                    <div className="card-box-common mb-3 h-100">
                      <div className="prizing-box-wallet profit d-flex align-items-center">
                        <div className="w-100 me-2">
                          <p>$29,600.59</p>
                          <bdi>Total Revenue </bdi>
                        </div>
                        <div className="ms-auto">
                          <svg width="112" height="27" viewBox="0 0 112 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 3.38095L3.78573 1.90248C4.13727 1.7159 4.56599 1.75555 4.87736 2.00343L7.89668 4.40711C8.2413 4.68146 8.72485 4.698 9.08741 4.44785L13.4339 1.449C13.8153 1.18583 14.3276 1.2192 14.6717 1.52963L18.9888 5.42474C19.3833 5.78071 19.9874 5.76594 20.364 5.3911L23.8859 1.8864C24.0733 1.69992 24.3269 1.59524 24.5913 1.59524H27.4935C27.96 1.59524 28.3645 1.91779 28.4684 2.37258L28.9011 4.26728C28.9853 4.63615 29.2706 4.92589 29.6381 5.01591L33.4597 5.95204C33.7387 6.02037 34.0336 5.96546 34.2692 5.8013L36.2779 4.40211C36.6407 4.14939 37.1264 4.16492 37.4723 4.4403L42.7014 8.6032C42.8131 8.6921 42.9044 8.80388 42.9693 8.93102L47.4525 17.7164C47.6233 18.0512 47.9674 18.2619 48.3432 18.2619H49.7203C50.104 18.2619 50.4538 18.4814 50.6208 18.8269L53.2662 24.3026C53.6151 25.0248 54.6295 25.063 55.0318 24.3691L57.8084 19.5798C58.1693 18.9572 59.05 18.9083 59.4777 19.4871L61.5307 22.2656C61.9232 22.7968 62.7137 22.8083 63.1216 22.2888L63.4402 21.8829C63.8255 21.3922 64.5611 21.3702 64.975 21.837L67.9108 25.1479C68.3112 25.5996 69.0175 25.5962 69.4136 25.1407L71.678 22.5368C71.8983 22.2834 72.2312 22.1575 72.5641 22.2017L76.2226 22.6871C76.4148 22.7126 76.6102 22.6817 76.7851 22.5982L79.9177 21.1018C80.1356 20.9978 80.3084 20.8185 80.4043 20.597L83.2778 13.9629C83.5898 13.2427 84.572 13.1462 85.0182 13.792L87.5412 17.4439C87.8538 17.8964 88.4733 18.0115 88.9276 17.7015L90.4683 16.6502C90.6344 16.5368 90.8308 16.4762 91.0319 16.4762H96.3039C96.5612 16.4762 96.8086 16.5754 96.9947 16.7531L97.5225 17.2574C98.0296 17.7418 98.8649 17.5674 99.1357 16.9205L100.186 14.4114C100.342 14.0396 100.706 13.7976 101.109 13.7976H102.791C103.183 13.7976 103.538 13.5692 103.701 13.2131L106.014 8.1487C106.242 7.65062 106.828 7.42815 107.328 7.64963L109.385 8.55937C109.643 8.67321 109.84 8.89025 109.929 9.15721L111 12.3636" stroke="#DB542A" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6 mb-3">
                    <div className="card-box-common mb-3 h-100">
                      <div className="prizing-box-wallet profit d-flex align-items-center">
                        <div className="w-100 me-2">
                          <p>$29,600.59</p>
                          <bdi>Total Portfolio Investment</bdi>
                        </div>
                        <div className="ms-auto">
                          <svg width="112" height="27" viewBox="0 0 112 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 3.38095L3.78573 1.90248C4.13727 1.7159 4.56599 1.75555 4.87736 2.00343L7.89668 4.40711C8.2413 4.68146 8.72485 4.698 9.08741 4.44785L13.4339 1.449C13.8153 1.18583 14.3276 1.2192 14.6717 1.52963L18.9888 5.42474C19.3833 5.78071 19.9874 5.76594 20.364 5.3911L23.8859 1.8864C24.0733 1.69992 24.3269 1.59524 24.5913 1.59524H27.4935C27.96 1.59524 28.3645 1.91779 28.4684 2.37258L28.9011 4.26728C28.9853 4.63615 29.2706 4.92589 29.6381 5.01591L33.4597 5.95204C33.7387 6.02037 34.0336 5.96546 34.2692 5.8013L36.2779 4.40211C36.6407 4.14939 37.1264 4.16492 37.4723 4.4403L42.7014 8.6032C42.8131 8.6921 42.9044 8.80388 42.9693 8.93102L47.4525 17.7164C47.6233 18.0512 47.9674 18.2619 48.3432 18.2619H49.7203C50.104 18.2619 50.4538 18.4814 50.6208 18.8269L53.2662 24.3026C53.6151 25.0248 54.6295 25.063 55.0318 24.3691L57.8084 19.5798C58.1693 18.9572 59.05 18.9083 59.4777 19.4871L61.5307 22.2656C61.9232 22.7968 62.7137 22.8083 63.1216 22.2888L63.4402 21.8829C63.8255 21.3922 64.5611 21.3702 64.975 21.837L67.9108 25.1479C68.3112 25.5996 69.0175 25.5962 69.4136 25.1407L71.678 22.5368C71.8983 22.2834 72.2312 22.1575 72.5641 22.2017L76.2226 22.6871C76.4148 22.7126 76.6102 22.6817 76.7851 22.5982L79.9177 21.1018C80.1356 20.9978 80.3084 20.8185 80.4043 20.597L83.2778 13.9629C83.5898 13.2427 84.572 13.1462 85.0182 13.792L87.5412 17.4439C87.8538 17.8964 88.4733 18.0115 88.9276 17.7015L90.4683 16.6502C90.6344 16.5368 90.8308 16.4762 91.0319 16.4762H96.3039C96.5612 16.4762 96.8086 16.5754 96.9947 16.7531L97.5225 17.2574C98.0296 17.7418 98.8649 17.5674 99.1357 16.9205L100.186 14.4114C100.342 14.0396 100.706 13.7976 101.109 13.7976H102.791C103.183 13.7976 103.538 13.5692 103.701 13.2131L106.014 8.1487C106.242 7.65062 106.828 7.42815 107.328 7.64963L109.385 8.55937C109.643 8.67321 109.84 8.89025 109.929 9.15721L111 12.3636" stroke="#DB542A" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6 mb-3">
                    <div className="card-box-common mb-3 h-100">
                      <div className="prizing-box-wallet  d-flex align-items-center">
                        <div className="w-100 me-2">
                          <p>16,600</p>
                          <bdi>Premium User</bdi>
                        </div>
                        <div className="ms-auto">
                          <svg width="112" height="27" viewBox="0 0 112 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 3.38095L3.78573 1.90248C4.13727 1.7159 4.56599 1.75555 4.87736 2.00343L7.89668 4.40711C8.2413 4.68146 8.72485 4.698 9.08741 4.44785L13.4339 1.449C13.8153 1.18583 14.3276 1.2192 14.6717 1.52963L18.9888 5.42474C19.3833 5.78071 19.9874 5.76594 20.364 5.3911L23.8859 1.8864C24.0733 1.69992 24.3269 1.59524 24.5913 1.59524H27.4935C27.96 1.59524 28.3645 1.91779 28.4684 2.37258L28.9011 4.26728C28.9853 4.63615 29.2706 4.92589 29.6381 5.01591L33.4597 5.95204C33.7387 6.02037 34.0336 5.96546 34.2692 5.8013L36.2779 4.40211C36.6407 4.14939 37.1264 4.16492 37.4723 4.4403L42.7014 8.6032C42.8131 8.6921 42.9044 8.80388 42.9693 8.93102L47.4525 17.7164C47.6233 18.0512 47.9674 18.2619 48.3432 18.2619H49.7203C50.104 18.2619 50.4538 18.4814 50.6208 18.8269L53.2662 24.3026C53.6151 25.0248 54.6295 25.063 55.0318 24.3691L57.8084 19.5798C58.1693 18.9572 59.05 18.9083 59.4777 19.4871L61.5307 22.2656C61.9232 22.7968 62.7137 22.8083 63.1216 22.2888L63.4402 21.8829C63.8255 21.3922 64.5611 21.3702 64.975 21.837L67.9108 25.1479C68.3112 25.5996 69.0175 25.5962 69.4136 25.1407L71.678 22.5368C71.8983 22.2834 72.2312 22.1575 72.5641 22.2017L76.2226 22.6871C76.4148 22.7126 76.6102 22.6817 76.7851 22.5982L79.9177 21.1018C80.1356 20.9978 80.3084 20.8185 80.4043 20.597L83.2778 13.9629C83.5898 13.2427 84.572 13.1462 85.0182 13.792L87.5412 17.4439C87.8538 17.8964 88.4733 18.0115 88.9276 17.7015L90.4683 16.6502C90.6344 16.5368 90.8308 16.4762 91.0319 16.4762H96.3039C96.5612 16.4762 96.8086 16.5754 96.9947 16.7531L97.5225 17.2574C98.0296 17.7418 98.8649 17.5674 99.1357 16.9205L100.186 14.4114C100.342 14.0396 100.706 13.7976 101.109 13.7976H102.791C103.183 13.7976 103.538 13.5692 103.701 13.2131L106.014 8.1487C106.242 7.65062 106.828 7.42815 107.328 7.64963L109.385 8.55937C109.643 8.67321 109.84 8.89025 109.929 9.15721L111 12.3636" stroke="#DB542A" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6 mb-3">
                    <div className="card-box-common mb-3 h-100">
                      <div className="prizing-box-wallet profit d-flex align-items-center">
                        <div className="w-100 me-2">
                          <p>18560</p>
                          <bdi>Total User</bdi>
                        </div>
                        <div className="ms-auto">
                          <svg width="112" height="27" viewBox="0 0 112 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 3.38095L3.78573 1.90248C4.13727 1.7159 4.56599 1.75555 4.87736 2.00343L7.89668 4.40711C8.2413 4.68146 8.72485 4.698 9.08741 4.44785L13.4339 1.449C13.8153 1.18583 14.3276 1.2192 14.6717 1.52963L18.9888 5.42474C19.3833 5.78071 19.9874 5.76594 20.364 5.3911L23.8859 1.8864C24.0733 1.69992 24.3269 1.59524 24.5913 1.59524H27.4935C27.96 1.59524 28.3645 1.91779 28.4684 2.37258L28.9011 4.26728C28.9853 4.63615 29.2706 4.92589 29.6381 5.01591L33.4597 5.95204C33.7387 6.02037 34.0336 5.96546 34.2692 5.8013L36.2779 4.40211C36.6407 4.14939 37.1264 4.16492 37.4723 4.4403L42.7014 8.6032C42.8131 8.6921 42.9044 8.80388 42.9693 8.93102L47.4525 17.7164C47.6233 18.0512 47.9674 18.2619 48.3432 18.2619H49.7203C50.104 18.2619 50.4538 18.4814 50.6208 18.8269L53.2662 24.3026C53.6151 25.0248 54.6295 25.063 55.0318 24.3691L57.8084 19.5798C58.1693 18.9572 59.05 18.9083 59.4777 19.4871L61.5307 22.2656C61.9232 22.7968 62.7137 22.8083 63.1216 22.2888L63.4402 21.8829C63.8255 21.3922 64.5611 21.3702 64.975 21.837L67.9108 25.1479C68.3112 25.5996 69.0175 25.5962 69.4136 25.1407L71.678 22.5368C71.8983 22.2834 72.2312 22.1575 72.5641 22.2017L76.2226 22.6871C76.4148 22.7126 76.6102 22.6817 76.7851 22.5982L79.9177 21.1018C80.1356 20.9978 80.3084 20.8185 80.4043 20.597L83.2778 13.9629C83.5898 13.2427 84.572 13.1462 85.0182 13.792L87.5412 17.4439C87.8538 17.8964 88.4733 18.0115 88.9276 17.7015L90.4683 16.6502C90.6344 16.5368 90.8308 16.4762 91.0319 16.4762H96.3039C96.5612 16.4762 96.8086 16.5754 96.9947 16.7531L97.5225 17.2574C98.0296 17.7418 98.8649 17.5674 99.1357 16.9205L100.186 14.4114C100.342 14.0396 100.706 13.7976 101.109 13.7976H102.791C103.183 13.7976 103.538 13.5692 103.701 13.2131L106.014 8.1487C106.242 7.65062 106.828 7.42815 107.328 7.64963L109.385 8.55937C109.643 8.67321 109.84 8.89025 109.929 9.15721L111 12.3636" stroke="#DB542A" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 mb-3">
                <div className="small-header-text d-md-flex align-items-center">
                  <div className="mb-md-0 mb-3">
                    <h3 className="m-0">Members</h3>
                  </div>
                  <div className="ms-auto">
                    <div className="d-sm-flex align-items-center">
                      <div className="d-flex align-items-center mb-sm-0 mb-3">
                        <input type="date" ref={startDateRef} className="form-control form-ans-class" value={startDate} onChange={(e) => setstartDate(e.target.value)} />
                        <span className="px-2">To</span>
                        <input type="date" ref={endDateRef} name="endDate" min={startDate} className="form-control form-ans-class" />
                      </div>
                      <button className="ms-sm-2 btn  red-btn w-100 rounded" onClick={handleExport}>
                        Export
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="user-table border rounded p-2">
                  <RtdDatatable data={data} columns={columns} option={options} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </FrontendLayout>
    </>
  );
}

export default Users;
