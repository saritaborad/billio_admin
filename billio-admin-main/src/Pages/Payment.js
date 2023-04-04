import React, { useState } from "react";
import FrontendLayout from "../Components/Layout/FrontendLayout";
import { Dropdown } from "react-bootstrap";
import RtdDatatable from "./Common/DataTable/RtdDatatable";
import { Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Payment() {
  const [subcription_options, setsubcription_options] = useState({
    sizePerPage: 10,
    search: "",
    totalRecord: 100,
    page: 0,
    sort: "id",
    order: "ASC",
  });

  const subcription_columns = [
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
      value: "email",
      label: "Email address",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      value: "transation_id",
      label: "Transation Id",
      options: {
        filter: false,
        sort: true,
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
      value: "issued_date",
      label: "Issued Date",
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
          return <span className="user-status active">Successful</span>;
        },
      },
    },
    {
      value: "amount",
      label: "Amount",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      value: "action",
      label: "Action",
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
  ];

  const subcription_data = [
    { no: "1", name: "John Doe", email: "johndoe@gmail.com", transation_id: "#152931898445", subscription: "Basic plan", issued_date: "1/17/2022 7:50PM", amount: "$19.49" },
    { no: "2", name: "John Doe", email: "johndoe@gmail.com", transation_id: "#152931898445", subscription: "Basic plan", issued_date: "1/17/2022 7:50PM", amount: "$19.49" },
    { no: "3", name: "John Doe", email: "johndoe@gmail.com", transation_id: "#152931898445", subscription: "Basic plan", issued_date: "1/17/2022 7:50PM", amount: "$19.49" },
    { no: "4", name: "John Doe", email: "johndoe@gmail.com", transation_id: "#152931898445", subscription: "Basic plan", issued_date: "1/17/2022 7:50PM", amount: "$19.49" },
    { no: "5", name: "John Doe", email: "johndoe@gmail.com", transation_id: "#152931898445", subscription: "Basic plan", issued_date: "1/17/2022 7:50PM", amount: "$19.49" },
  ];

  const [wallet_options, setwallet_options] = useState({
    sizePerPage: 10,
    search: "",
    totalRecord: 100,
    page: 0,
    sort: "id",
    order: "ASC",
  });

  const wallet_columns = [
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
      value: "email",
      label: "Email address",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      value: "transation_id",
      label: "Transation Id",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      value: "date",
      label: "Date",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      value: "description",
      label: "Description",
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
          return <span className="user-status active">Successful</span>;
        },
      },
    },
    {
      value: "amount",
      label: "Amount",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      value: "action",
      label: "Action",
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
  ];

  const wallet_data = [
    { no: "1", name: "John Doe", email: "johndoe@gmail.com", transation_id: "#152931898445", date: "1/17/2022 7:50PM", description: "", amount: "$19.49" },
    { no: "2", name: "John Doe", email: "johndoe@gmail.com", transation_id: "#152931898445", date: "1/17/2022 7:50PM", description: "", amount: "$19.49" },
    { no: "3", name: "John Doe", email: "johndoe@gmail.com", transation_id: "#152931898445", date: "1/17/2022 7:50PM", description: "", amount: "$19.49" },
    { no: "4", name: "John Doe", email: "johndoe@gmail.com", transation_id: "#152931898445", date: "1/17/2022 7:50PM", description: "", amount: "$19.49" },
    { no: "5", name: "John Doe", email: "johndoe@gmail.com", transation_id: "#152931898445", date: "1/17/2022 7:50PM", description: "", amount: "$19.49" },
  ];

  return (
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
                            Payments
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Tab.Container id="controlled-tab-example" defaultActiveKey="subcription">
              <div className="col-12 mb-3">
                <div className="small-header-text d-md-flex align-items-center justify-content-between">
                  <div className="mb-md-0 mb-3">
                    <h3 className="m-0">Payments</h3>
                  </div>
                  <div className="payment-tab-sec mb-3">
                    <Nav variant="pills">
                      <Nav.Item>
                        <Nav.Link eventKey="subcription">Subcription</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="wallet">Wallet</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                  <div className="d-sm-flex align-items-center mb-sm-0 mb-3">
                    <div className="">
                      <input type="date" className="form-control form-ans-class" />
                    </div>
                    <div className="mt-3 ms-sm-2 mt-sm-0">
                      <button className="btn red-btn w-100 rounded">Export</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <Tab.Content>
                  <Tab.Pane eventKey="subcription">
                    <div className="user-table border rounded p-2">
                      <RtdDatatable data={subcription_data} columns={subcription_columns} option={subcription_options} />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="wallet">
                    <div className="user-table border rounded p-2">
                      <RtdDatatable data={wallet_data} columns={wallet_columns} option={wallet_options} />
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </Tab.Container>
          </div>
        </div>
      </div>
    </FrontendLayout>
  );
}
