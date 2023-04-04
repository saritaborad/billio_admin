import React, { useEffect, useState } from "react";
import SideImg from "../../images/login-rgt-image.png";
import SideLogo from "../../images/side-logo.png";
import Logo from "../../images/logo.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { PostApi } from "../api/api-service";
import { API_Path } from "../../const";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setemail] = useState("");

  useEffect(() => {
    setemail(location.email);
  }, []);

  const submitFormData = (formData, resetForm) => {
    const ForgotPassword = new Promise((resolve) => {
      resolve(PostApi(API_Path.forgotPassword, formData));
    });
    ForgotPassword.then((res) => {
      if (res.status === 200) {
        toast.success(res.data.message);
        resetForm(formData);
        navigate("/reset-password");
      } else {
        toast.error(res.data.message);
      }
    });
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
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg p-0 d-lg-block d-none">
          <div className="login-side-img">
            <img src={SideImg} alt="JAMSKE" className="w-100 side-img" />
            <img src={SideLogo} alt="" className="side-logo-fix" />
          </div>
        </div>
        <div className="col-lg-6 p-0 login-form-side">
          <div className="login-main-area">
            <div className="login-main-part-scroll">
              <div className="login-main-side">
                <div className="m-auto login-main-box user-sign-form">
                  <div className="w-100 text-center mb-3">
                    <img src={Logo} alt="BILLIO" className="img-fluid" />
                  </div>
                  <div className="text-center">
                    <h2>Forgot Password</h2>
                    <p>Enter your registered Email ID below, we will send you verification code to verify you email.</p>
                  </div>
                  <Formik
                    enableReinitialize
                    initialValues={{
                      email: email ? email : "",
                    }}
                    validationSchema={Yup.object({
                      email: Yup.string().email("Enter valid Email address.").required("Email is required."),
                    })}
                    onSubmit={(formData, { resetForm }) => {
                      submitFormData(formData, resetForm);
                    }}
                  >
                    {(runform) => (
                      <form className="row" onSubmit={runform.handleSubmit}>
                        <div className="col-12 form-group">
                          <label className="form-lbl-class mb-2">Email Address</label>
                          <input type="email" {...formAttr(runform, "email")} className="form-control form-ans-class" name="email" placeholder="Johndoe@gmail.com" />
                          {errorContainer(runform, "email")}
                        </div>
                        <div className="col-12 form-group text-center">
                          <button type="submit" className="button-class w-100">
                            <span className="position-relative">SEND</span>
                          </button>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
              <div className="no-act-link text-center">
                Remember password?
                <Link to={"/login"}>Sign in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
