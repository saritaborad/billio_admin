import React, { useState, useRef } from "react";
import FrontendLayout from "../Components/Layout/FrontendLayout";
import Profile from "../images/admin.png";
import { Formik, useFormik, FormikProvider } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  fname: Yup.string().required("First name is required."),
  lname: Yup.string().required("Last name is required."),
  email: Yup.string().email("Enter valid Email address.").required("Email is required."),
  AdminRole: Yup.string().required("User role is required."),
  blockByAdmin: Yup.string().required("Status is required."),
});

function Admin() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setemail] = useState("");
  const [AdminRole, setAdminRole] = useState("");
  const [blockByAdmin, setBlockByAdmin] = useState("");

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      AdminRole: "",
      blockByAdmin: "",
    },
    validationSchema,
    onSubmit: (values) => {
    },
  });

  const formAttr = (form, field) => ({
    onBlur: form.handleBlur,
    onChange: form.handleChange,
    value: form.values[field],
  });

  const errorContainer = (form, field) => {
    return form.touched[field] && form.errors[field] ? <span className="error text-danger">{form.errors[field]}</span> : null;
  };

  const fnameRef = useRef(null);
  const lnameRef = useRef(null);
  const emailRef = useRef(null);
  const userRoleRef = useRef(null);
  const statusRef = useRef(null);

  const handleReset = () => {
    fnameRef.current.value = "";
    lnameRef.current.value = "";
    emailRef.current.value = "";
    userRoleRef.current.value = "";
    statusRef.current.value = "";
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
                              Admins
                            </li>
                          </ol>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="dash-top-box">
                  <div className="set-box-head mb-4 pb-4">
                    <div className="d-lg-flex d-block user-info-hdr">
                      <div className="user-info-pro">
                        <img src={Profile} alt="User Profile" />
                      </div>
                      <div className="ms-lg-4 mt-3 mt-lg-0">
                        <bdi>Jane Doe</bdi>
                        <div className="user-role">Sub admin</div>
                        <div className="user-info">janedoe@gmail.com</div>
                      </div>
                      <div className="ms-lg-auto admin-status-class mt-3">
                        <span className="user-status active">Active</span>
                      </div>
                    </div>
                  </div>

                  <FormikProvider value={formik}>
                    <form className="row" onSubmit={formik.handleSubmit}>
                      <div className="set-box-head mb-4 pb-4">
                        <div className="row">
                          <div className="col-xl-4 col-sm-6 mb-3">
                            <label className="d-block form-lbl-class mb-2">First Name</label>
                            <input type="text" {...formAttr(formik, "fname")} ref={fnameRef} className="form-control form-ans-class bg-white" name="fname" placeholder="Enter Your First Name" />
                            {errorContainer(formik, "fname")}
                          </div>
                          <div className="col-xl-4 col-sm-6 mb-3">
                            <label className="d-block form-lbl-class mb-2">Last Name</label>
                            <input type="text" {...formAttr(formik, "lname")} ref={lnameRef} className="form-control form-ans-class bg-white" name="lname" placeholder="Enter Your Last Name" />
                            {errorContainer(formik, "lname")}
                          </div>
                          <div className="col-xl-4 col-sm-6 mb-3">
                            <label className="d-block form-lbl-class mb-2">Email Address</label>
                            <input type="email" {...formAttr(formik, "email")} ref={emailRef} className="form-control form-ans-class bg-white" name="email" placeholder="Enter Your Email Address" />
                            {errorContainer(formik, "email")}
                          </div>
                          <div className="col-xl-4 col-sm-6 mb-3">
                            <label className="d-block form-lbl-class mb-2">User Role</label>

                            <select name="AdminRole" className="form-select form-ans-class px-3 bg-white" {...formAttr(formik, "AdminRole")} ref={userRoleRef}>
                              <option selected disabled value="">
                                {" "}
                                Select Role{" "}
                              </option>
                              <option value="Admin">Admin</option>
                              <option value="Sub Admin">Sub Admin</option>
                              <option value="Contributor">Contributor</option>
                              <option value="Staff">Staff</option>
                            </select>

                            {errorContainer(formik, "AdminRole")}
                          </div>
                          <div className="col-xl-4 col-sm-6 mb-3">
                            <label className="d-block form-lbl-class mb-2">Status</label>
                            <select className="form-select form-ans-class px-3 bg-white" name="blockByAdmin" {...formAttr(formik, "blockByAdmin")} ref={statusRef}>
                              <option selected disabled value="">
                                Select Status
                              </option>
                              <option value="0">Active</option>
                              <option value="1">Deactive</option>
                            </select>
                            {errorContainer(formik, "blockByAdmin")}
                          </div>
                        </div>
                      </div>

                      <div className="mt-3">
                        <div className="set-box-head border-0">
                          <div className="dash-part-hdr permission-table">
                            <div className="dash-part-table-hdr">
                              <span>Role Permissions</span>
                            </div>
                            <div className="table-responsive">
                              <table className="table table-striped mb-0">
                                <thead>
                                  <tr>
                                    <th scope="col">Module</th>
                                    <th scope="col">Read</th>
                                    <th scope="col">Write</th>
                                    <th scope="col">Create</th>
                                    <th scope="col">Delete</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">Admin</th>
                                    <td>
                                      <span>
                                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M5.52422 12.1568L0.574219 7.20677L1.98822 5.79277L5.52572 9.32627L5.52422 9.32777L14.0092 0.842773L15.4232 2.25677L6.93822 10.7428L5.52522 12.1558L5.52422 12.1568Z" fill="#52E5BB" />
                                        </svg>
                                      </span>
                                    </td>
                                    <td>
                                      <span>
                                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M5.52422 12.1568L0.574219 7.20677L1.98822 5.79277L5.52572 9.32627L5.52422 9.32777L14.0092 0.842773L15.4232 2.25677L6.93822 10.7428L5.52522 12.1558L5.52422 12.1568Z" fill="#52E5BB" />
                                        </svg>
                                      </span>
                                    </td>
                                    <td>
                                      <span>
                                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M5.52422 12.1568L0.574219 7.20677L1.98822 5.79277L5.52572 9.32627L5.52422 9.32777L14.0092 0.842773L15.4232 2.25677L6.93822 10.7428L5.52522 12.1558L5.52422 12.1568Z" fill="#52E5BB" />
                                        </svg>
                                      </span>
                                    </td>
                                    <td>
                                      <span>
                                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M5.52422 12.1568L0.574219 7.20677L1.98822 5.79277L5.52572 9.32627L5.52422 9.32777L14.0092 0.842773L15.4232 2.25677L6.93822 10.7428L5.52522 12.1558L5.52422 12.1568Z" fill="#52E5BB" />
                                        </svg>
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Sub Admin</th>
                                    <td>
                                      <span>
                                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M5.52422 12.1568L0.574219 7.20677L1.98822 5.79277L5.52572 9.32627L5.52422 9.32777L14.0092 0.842773L15.4232 2.25677L6.93822 10.7428L5.52522 12.1558L5.52422 12.1568Z" fill="#52E5BB" />
                                        </svg>
                                      </span>
                                    </td>
                                    <td>
                                      <span>
                                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M5.52422 12.1568L0.574219 7.20677L1.98822 5.79277L5.52572 9.32627L5.52422 9.32777L14.0092 0.842773L15.4232 2.25677L6.93822 10.7428L5.52522 12.1558L5.52422 12.1568Z" fill="#52E5BB" />
                                        </svg>
                                      </span>
                                    </td>
                                    <td>
                                      <span>
                                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M5.52422 12.1568L0.574219 7.20677L1.98822 5.79277L5.52572 9.32627L5.52422 9.32777L14.0092 0.842773L15.4232 2.25677L6.93822 10.7428L5.52522 12.1558L5.52422 12.1568Z" fill="#52E5BB" />
                                        </svg>
                                      </span>
                                    </td>
                                    <td>
                                      <span>
                                        <svg width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <rect opacity="0.8" y="0.5" width="14" height="2" fill="#6A6E83" />
                                        </svg>
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Staff</th>
                                    <td>
                                      <span>
                                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M5.52422 12.1568L0.574219 7.20677L1.98822 5.79277L5.52572 9.32627L5.52422 9.32777L14.0092 0.842773L15.4232 2.25677L6.93822 10.7428L5.52522 12.1558L5.52422 12.1568Z" fill="#52E5BB" />
                                        </svg>
                                      </span>
                                    </td>
                                    <td>
                                      <span>
                                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M5.52422 12.1568L0.574219 7.20677L1.98822 5.79277L5.52572 9.32627L5.52422 9.32777L14.0092 0.842773L15.4232 2.25677L6.93822 10.7428L5.52522 12.1558L5.52422 12.1568Z" fill="#52E5BB" />
                                        </svg>
                                      </span>
                                    </td>
                                    <td>
                                      <span>
                                        <svg width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <rect opacity="0.8" y="0.5" width="14" height="2" fill="#6A6E83" />
                                        </svg>
                                      </span>
                                    </td>
                                    <td>
                                      <span>
                                        <svg width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <rect opacity="0.8" y="0.5" width="14" height="2" fill="#6A6E83" />
                                        </svg>
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Contributor</th>
                                    <td>
                                      <span>
                                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M5.52422 12.1568L0.574219 7.20677L1.98822 5.79277L5.52572 9.32627L5.52422 9.32777L14.0092 0.842773L15.4232 2.25677L6.93822 10.7428L5.52522 12.1558L5.52422 12.1568Z" fill="#52E5BB" />
                                        </svg>
                                      </span>
                                    </td>
                                    <td>
                                      <span>
                                        <svg width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <rect opacity="0.8" y="0.5" width="14" height="2" fill="#6A6E83" />
                                        </svg>
                                      </span>
                                    </td>
                                    <td>
                                      <span>
                                        <svg width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <rect opacity="0.8" y="0.5" width="14" height="2" fill="#6A6E83" />
                                        </svg>
                                      </span>
                                    </td>
                                    <td>
                                      <span>
                                        <svg width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <rect opacity="0.8" y="0.5" width="14" height="2" fill="#6A6E83" />
                                        </svg>
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="row mt-4">
                          <div className="col-xxl-2 col-sm-4 mb-2">
                            <button type="submit" className="ms-sm-2 btn red-btn w-100 rounded">
                              Save Changes
                            </button>
                          </div>
                          <div className="col-xxl-2 col-sm-4 mb-2">
                            <button type="button" className="ms-sm-2 btn red-reset-btn w-100 rounded" onClick={handleReset}>
                              Reset
                            </button>
                          </div>
                          <div className="col-xxl-2 col-sm-4 mb-2">
                            <button type="button" className="ms-sm-2 btn red-delet-btn w-100 rounded">
                              Delete User
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </FormikProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FrontendLayout>
    </>
  );
}

export default Admin;
