import React, { useEffect, useState } from "react";
import FrontendLayout from "../Components/Layout/FrontendLayout";
import User_Profile from "../images/profile-img.png";
import { Dropdown, Modal } from "react-bootstrap";
import RtdDatatable from "./Common/DataTable/RtdDatatable";
import { GetApi } from "./api/api-service";
import { API_Path } from "../const";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Formik, useFormik, FormikProvider } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  fname: Yup.string().required("First name is required."),
  lname: Yup.string().required("Last name is required."),
  email: Yup.string().email("Enter valid Email address.").required("Email is required."),
  AdminRole: Yup.string().required("User role is required."),
});

function Admin() {
  const [add_admin_modal_show, setAdd_admin_modal_show] = useState(false);
  const [admins, setAdmins] = useState([]);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setemail] = useState("");
  const [AdminRole, setAdminRole] = useState("");
    

  useEffect(() => {
    getAdminsData();
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      fname: fname ? fname : "",
      lname: lname ? lname : "",
      email: email ? email : "",
      AdminRole: AdminRole ? AdminRole : "",
    },
    validationSchema,
    onSubmit: (values) => {
      setAdd_admin_modal_show(false);

      // const data = {values};
      // const UserProfilePromise = new Promise((resolve) => {
      //   resolve(PostApi(API_Path.userProfile, data));
      // });
      // UserProfilePromise.then((response) => {
      //   if (response.status === 200) {
      //     toast.success(response.data.message);
      //     // resetForm(formData);
      //     // navigate("/login");
      //   } else {
      //     toast.error(response.data.message);
      //     // resetForm(formData);
      //   }
      // });
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

  const getAdminsData = () => {
    const getAdmins = new Promise((resolve) => {
      resolve(GetApi(API_Path.getAdmins));
    });
    getAdmins.then((res) => {
      if (res.status === 200) {
        setAdmins(res.data.data);
      } else {
        toast.error(res.data.message);
      }
    });
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
      value: "role",
      label: "Role",
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
      role: "Admin",
    },
    {
      no: "1",
      name: "John Doe",
      email: "johndoe@gmail.com",
      role: "Sub Admin",
    },
    {
      no: "1",
      name: "John Doe",
      email: "johndoe@gmail.com",
      role: "Contributor",
    },
    {
      no: "1",
      name: "John Doe",
      email: "johndoe@gmail.com",
      role: "Sub Admin",
    },
    {
      no: "1",
      name: "John Doe",
      email: "johndoe@gmail.com",
      role: "Staff",
    },
  ]);

  const [option, set_option] = useState({
    sizePerPage: 10,
    search: "",
    totalRecord: 100,
    page: 0,
    sort: "createdAt",
    order: "ASC",
  });

  let tableCallBack = (option) => {
    set_option(option);
  };

  const add_adminShow = () => {
    setAdd_admin_modal_show(true);
  };

  const add_adminClose = () => {
    setAdd_admin_modal_show(false);
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
              <div className="col-12 mb-3">
                <div className="small-header-text d-md-flex align-items-center">
                  <div className="mb-md-0 mb-3">
                    <h3 className="m-0">Admins</h3>
                  </div>
                  <div className="ms-auto">
                    <div className="d-sm-flex align-items-center">
                      <div>
                        <button type="button" className="btn red-delet-btn w-100 bg-light rounded">
                          Manage Roles
                        </button>
                      </div>
                      <div className="ms-sm-2">
                        <button className=" btn red-btn w-100 rounded" onClick={add_adminShow}>
                          Add Admin
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="user-table border rounded">
                  <RtdDatatable data={data} columns={columns} option={option} tableCallBack={tableCallBack} needPagination={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </FrontendLayout>

      {/* ========== modal (Add Admin) =============== */}

      <Modal show={add_admin_modal_show} onHide={add_adminClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton className="border-0 pb-0">
          <div className="text-center add-device-modal-txt w-100">
            <p>Add New Admin</p>
          </div>
        </Modal.Header>
        <Modal.Body className="pt-0">
          <div className="">
            <div className="text-center add-device-modal-txt">
              <span>Lorem Ipsum is just a dummy text uses as per industries standard.</span>
            </div>

            <FormikProvider value={formik}>
              <form className="row" onSubmit={formik.handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="d-block form-lbl-class mb-2">First Name</label>
                    <bdi className="d-block position-relative">
                      <input type="text" {...formAttr(formik, "fname")} className="form-control form-ans-class bg-white ps-5" name="fname" placeholder="Enter Your First Name" />
                      <svg width="16" height="20" viewBox="0 0 16 20" className="fix-in-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5C12 7.20914 10.2091 9 8 9C5.79086 9 4 7.20914 4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5Z" stroke="#1A202C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 12C4.13401 12 1 15.134 1 19H15C15 15.134 11.866 12 8 12Z" stroke="#1A202C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </bdi>
                    {errorContainer(formik, "fname")}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="d-block form-lbl-class mb-2">Last Name</label>
                    <bdi className="d-block position-relative">
                      <input type="text" {...formAttr(formik, "lname")} className="form-control form-ans-class bg-white ps-5" name="lname" placeholder="Enter Your Last Name" />
                      <svg width="16" height="20" viewBox="0 0 16 20" className="fix-in-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5C12 7.20914 10.2091 9 8 9C5.79086 9 4 7.20914 4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5Z" stroke="#1A202C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 12C4.13401 12 1 15.134 1 19H15C15 15.134 11.866 12 8 12Z" stroke="#1A202C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </bdi>
                    {errorContainer(formik, "lname")}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="d-block form-lbl-class mb-2">Email Address</label>
                    <bdi className="d-block position-relative">
                      <input type="email" {...formAttr(formik, "email")} className="form-control form-ans-class bg-white ps-5" name="email" placeholder="Enter Your Email" />
                      <svg width="20" height="16" viewBox="0 0 20 16" className="fix-in-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z" fill="#1A202C" />
                      </svg>
                      <span className="correct-mark">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#219653" className="bi bi-check2" viewBox="0 0 16 16">
                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                      </span>
                    </bdi>
                    {errorContainer(formik, "email")}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="d-block form-lbl-class mb-2">User Role</label>
                    <bdi className="d-block position-relative">
                      <select name="AdminRole" className="form-select form-ans-class bg-white ps-5" {...formAttr(formik, "AdminRole")}>
                      <option selected disabled value=""> Admin </option>
                        <option value="Admin" >Admin</option>
                        <option value="Sub-Admin">Sub-Admin</option>
                        <option value="Staff">Staff</option>
                        <option value="Contributor">Contributor</option>
                      </select>
                      <svg width="21" height="17" viewBox="0 0 21 17" className="fix-in-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.54 7.99969L11 4.45969L12.41 3.04969L14.53 5.16969L18.77 0.929688L20.18 2.33969L14.54 7.99969ZM9 3.99969H0V5.99969H9V3.99969ZM19 10.4097L17.59 8.99969L15 11.5897L12.41 8.99969L11 10.4097L13.59 12.9997L11 15.5897L12.41 16.9997L15 14.4097L17.59 16.9997L19 15.5897L16.41 12.9997L19 10.4097ZM9 11.9997H0V13.9997H9V11.9997Z" fill="#323232" />
                      </svg>
                    </bdi>
                    {errorContainer(formik, "AdminRole")}
                  </div>

                  <div className="col-12 mt-3">
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
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">Admin</th>
                                <td>
                                  {/* <input type="checkbox"  /> */}  
                                  <span>
                                    <svg width="16" height="18" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 mt-3 mx-auto">
                    <button type="submit" className="ms-sm-2 btn red-btn w-100 rounded">
                      Add admin
                    </button>
                  </div>
                </div>
              </form>
            </FormikProvider>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Admin;
