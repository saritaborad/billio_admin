import React, { useState } from "react";
import FrontendLayout from "../Components/Layout/FrontendLayout";
import { Nav, Row, Col, Tab } from "react-bootstrap";
import Profile from "../images/admin.png";
import { Formik, useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import { PostApi } from "./api/api-service";
import { API_Path } from "../const";

const validationSchema = Yup.object().shape({
  fname: Yup.string().required("First name is required."),
  lname: Yup.string().required("Last name is required."),
  email: Yup.string().email("Enter valid Email address.").required("Email is required."),
  contact_no: Yup.string()
    .required("Phone number is required.")
    .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, "Phone number is not valid"),
});

function Setting() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setemail] = useState("");
  const [contact_no, setContact_no] = useState("");

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      fname: fname ? fname : "",
      lname: lname ? lname : "",
      email: email ? email : "",
      contact_no: contact_no ? contact_no : "",
    },
    validationSchema,
    onSubmit: (values) => {
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

  const handleChange = (newValue) => {
    if (newValue == null) {
      formik.setFieldValue("contact_no", "");
    } else {
      formik.setFieldValue("contact_no", newValue);
    }
  };

  const formAttr = (form, field) => ({
    onBlur: form.handleBlur,
    onChange: form.handleChange,
    value: form.values[field],
  });

  const errorContainer = (form, field) => {
    return form.touched[field] && form.errors[field] ? <span className="error text-danger">{form.errors[field]}</span> : null;
  };

  const showpassword = () => {
    document.getElementById("showpwd-class").classList.toggle("active");
    var x = document.getElementById("toggle-pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  const shownewpassword = () => {
    document.getElementById("showpwd-class").classList.toggle("active");
    var x = document.getElementById("toggle-new-pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  const showconfirmpassword = () => {
    document.getElementById("showpwd-class").classList.toggle("active");
    var x = document.getElementById("toggle-confirm-pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  const submitFormData = (formData, resetForm) => {
    console.log(formData, "form data");
    // const data = { password: formData.opassword, new_password: formData.npassword };
    // const SignupDataPromise = new Promise((resolve) => {
    //   resolve(PostApi(API_Path.changepassword, data));
    // });
    // console.log(data);
    // SignupDataPromise.then((response) => {
    //   if (response.status === 200) {
    //     toast.success(response.data.message);
    //     resetForm(formData);
    //   } else {
    //     toast.error(response.data.message);
    //     resetForm(formData);
    //   }
    // });
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
                              Settings
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                              My Profile
                            </li>
                          </ol>
                        </nav>
                      </div>
                    </div>
                    <div className="col-12 settings-main-part mt-3">
                      <Tab.Container id="left-tabs-example" defaultActiveKey="my_profile">
                        <Row>
                          <Col lg={3}>
                            <Nav variant="pills" className="flex-lg-column mb-lg-0 mb-3 nav-tabs-custom-class">
                              <Nav.Item>
                                <Nav.Link eventKey="my_profile">My Profile</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="change_password">Change Password</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="logout" className="border-0" href="/login">
                                  <button type="button" className="border-0 bg-white text-start w-100">
                                    Logout
                                  </button>
                                </Nav.Link>
                              </Nav.Item>
                            </Nav>
                          </Col>
                          <Col lg={9}>
                            <Tab.Content>
                              <Tab.Pane eventKey="my_profile">
                                <div className="dash-top-box">
                                  <div className="set-box-head mb-4 pb-4">
                                    <div className="set-comn-title">
                                      <h2>My Account</h2>
                                    </div>
                                    <div className="mt-3">
                                      <div className="d-md-flex d-block user-info-hdr me-auto">
                                        <div className="user-info-pro">
                                          <img src={Profile} alt="User Profile" />
                                        </div>
                                        <div className="ms-md-4">
                                          <bdi>John Doe</bdi>
                                          <div className="user-role">Admin</div>
                                          <div className="d-sm-flex d-block mt-2">
                                            <button type="button" className="btn red-btn w-100">
                                              <label className=" w-100" htmlFor="choose-file">
                                                Change
                                                <input className="hide-input" type="file" id="choose-file" name="image" accept=".png, .jpg, .jpeg" />
                                              </label>
                                            </button>
                                            <button type="button" className="btn red-delet-btn mt-2 mt-sm-0 ms-sm-2 w-100">
                                              Remove
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="set-box-head pb-3">
                                    <div className="set-comn-title">
                                      <h2>Personal Information</h2>
                                    </div>

                                    <FormikProvider value={formik}>
                                      <form className="row" onSubmit={formik.handleSubmit}>
                                        <div className="">
                                          <div className="row">
                                            <div className="col-md-6 mb-3">
                                              <label className="d-block form-lbl-class mb-2">First Name</label>
                                              <input type="text" onChange={handleChange} {...formAttr(formik, "fname")} className="form-control form-ans-class bg-white" name="fname" placeholder="Enter Your First Name" />
                                              {errorContainer(formik, "fname")}
                                            </div>

                                            <div className="col-md-6 mb-3">
                                              <label className="d-block form-lbl-class mb-2">Last Name</label>
                                              <input type="text" onChange={handleChange} {...formAttr(formik, "lname")} className="form-control form-ans-class bg-white" name="lname" placeholder="Enter Your Last Name" />
                                              {errorContainer(formik, "lname")}
                                            </div>

                                            <div className="col-md-6 mb-3">
                                              <label className="d-block form-lbl-class mb-2">Email Address</label>
                                              <input type="email" onChange={handleChange} {...formAttr(formik, "email")} className="form-control form-ans-class bg-white" name="email" placeholder="Enter Your Email Address" />
                                              {errorContainer(formik, "email")}
                                            </div>

                                            <div className="col-md-6 mb-3">
                                              <label className="d-block form-lbl-class mb-2">Mobile Number</label>

                                              <PhoneInput className="form-control-PhoneInput" {...formAttr(formik, "contact_no")} name="contact_no" onChange={handleChange} disableAreaCodes country={"us"} placeholder="Enter your phone number" />
                                              {errorContainer(formik, "contact_no")}
                                            </div>
                                          </div>
                                        </div>

                                        <div className="row">
                                          <div className="col-md-7 mt-3">
                                            <div className="row">
                                              <div className="col-sm-4">
                                                <button type="submit" className="btn red-btn w-100">
                                                  Save Changes
                                                </button>
                                              </div>
                                              <div className="col-sm-4  mt-2 mt-sm-0">
                                                <button type="button" className="btn red-delet-btn w-100">
                                                  Cancel
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </form>
                                    </FormikProvider>
                                  </div>
                                </div>
                              </Tab.Pane>

                              <Tab.Pane eventKey="change_password">
                                <Formik
                                  enableReinitialize
                                  initialValues={{
                                    opassword: "",
                                    npassword: "",
                                    cpassword: "",
                                  }}
                                  validationSchema={Yup.object({
                                    opassword: Yup.string().required("Password is required."),
                                    npassword: Yup.string()
                                      .when("opassword", {
                                        is: (val) => (val && val.length > 0 ? true : false),
                                        then: Yup.string().notOneOf([Yup.ref("opassword")], "Password must be different from old password."),
                                      })
                                      .required( "Password is required."),
                                    cpassword: Yup.string()
                                      .when("npassword", {
                                        is: (val) => (val && val.length > 0 ? true : false),
                                        then: Yup.string().oneOf([Yup.ref("npassword")], "Password must match."),
                                      })
                                      .required("Confirmation of Password is required."),
                                  })}
                                  onSubmit={(formData, resetForm) => {
                                    submitFormData(formData, resetForm);
                                    
                                  }}
                                >
                                  {(runform) => (
                                    <form className="row" onSubmit={runform.handleSubmit}>
                                      <div className="dash-top-box">
                                        <div className="col-md-6 mb-3">
                                          <label className="d-block form-lbl-class mb-2">Old Password</label>
                                          <bdi className="d-block position-relative show-class" id="show-id">
                                            <input id="toggle-pass" type="password" className="form-control form-ans-class bg-white" {...formAttr(runform, "opassword")} name="opassword" placeholder="Enter Your Old Password." />
                                            {errorContainer(runform, "opassword")}
                                            <span id="showpwd-class" className="show-pwd" onClick={showpassword}>
                                              <i className="bi bi-eye-slash"></i>
                                            </span>
                                          </bdi>
                                        </div>
                                        <div className="col-12">
                                          <div className="row">
                                            <div className="col-md-6 mb-3">
                                              <label className="d-block form-lbl-class mb-2">New Password</label>
                                              <bdi className="d-block position-relative show-class" id="show-id1">
                                                <input id="toggle-new-pass" type="password" className="form-control form-ans-class bg-white" {...formAttr(runform, "npassword")} name="npassword" placeholder="Enter Your New Password." />
                                                {errorContainer(runform, "npassword")}
                                                <span className="show-pwd" id="showpwd-class" onClick={shownewpassword}>
                                                  <i className="bi bi-eye-slash"></i>
                                                </span>
                                              </bdi>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                              <label className="d-block form-lbl-class mb-2">Retype New Password</label>
                                              <bdi className="d-block position-relative show-class" id="show-id2">
                                                <input id="toggle-confirm-pass" type="password" className="form-control form-ans-class bg-white" {...formAttr(runform, "cpassword")} name="cpassword" placeholder="Retype Your New Password." />
                                                {errorContainer(runform, "cpassword")}
                                                <span className="show-pwd" id="showpwd-class" onClick={showconfirmpassword}>
                                                  <i className="bi bi-eye-slash"></i>
                                                </span>
                                              </bdi>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-7 mt-sm-3">
                                          <div className="row">
                                            <div className="col-sm-4">
                                              <button type="submit" className="btn red-btn w-100">
                                                Save Changes
                                              </button>
                                            </div>
                                            <div className="col-sm-4  mt-2 mt-sm-0">
                                              <button type="button" className="btn red-delet-btn w-100">
                                                Cancel
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </form>
                                  )}
                                </Formik>
                              </Tab.Pane>
                            </Tab.Content>
                          </Col>
                        </Row>
                      </Tab.Container>
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

export default Setting;
