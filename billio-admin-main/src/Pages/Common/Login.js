import React, { useState, useEffect } from "react";
import SideImg from "../../images/login-rgt-image.png";
import SideLogo from "../../images/side-logo.png";
import Logo from "../../images/logo.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { PostApi } from "../api/api-service";
import { API_Path } from "../../const";
const sign = require("jwt-encode");
const secret = "^HkNZ*AqT$1Nyi_1zVf)pzp0i7y6kz#Uf4%sxs!s4Ae&G5u";

export default function Login() {
  const Navigate = useNavigate();
  const [is_remember, setremember] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setshowPassword] = useState("password");
  const [IconPassword, setIconPassword] = useState("bi-eye-slash");

  useEffect(() => {
    let remember_me_token = localStorage.getItem("billio_rememberme_admin");
    if (remember_me_token !== null) {
      let temp = jwt_decode(remember_me_token);
      setremember(true);
      setemail(temp.email);
      setpassword(temp.password);
    }
  }, []);

  const goTo = (path) => {
    Navigate(path, { state: { email: email } });
  };

  const encode_token_jwt = (formData) => {
    var date = new Date();
    var time = date.getTime();
    const data = { exp: time + 3600, email: formData.email, password: formData.password, iat: time };
    const jwt = sign(data, secret);
    if (is_remember) {
      localStorage.setItem("billio_rememberme_admin", jwt);
    }
  };

  const submitFormData = (formData, resetForm) => {
    const LoginDataPromise = new Promise((resolve, reject) => {
      resolve(PostApi(API_Path.login, formData));
    });
    LoginDataPromise.then((response) => {
      if (response.status === 200) {
        if (response.data.data.user.role > 0) {
          localStorage.setItem("admin_token", response.data.data.token);
          toast.success(response.data.message);
          encode_token_jwt(formData);
          resetForm(formData);
          Navigate("/dashboard");
        } else {
          resetForm(formData);
          toast.error("Your are not Admin");
        }
      } else {
        toast.error(response.data.message);
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

  const showpassword = () => {
    if (showPassword === "password") {
      setshowPassword("text");
      setIconPassword("bi-eye");
    } else {
      setshowPassword("password");
      setIconPassword("bi-eye-slash");
    }
  };

  const handelCheckbox = (e) => {
    if (e.target.checked) {
      setremember(true);
    } else {
      setremember(false);
      localStorage.removeItem("billio_rememberme_admin");
    }
  };

  const handelSetEmail = (e) => {
    setemail(e.target.value);
  };

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
                    <h2>Admin Login</h2>
                  </div>
                  <Formik
                    enableReinitialize
                    initialValues={{
                      email: email ? email : "",
                      password: password ? password : "",
                    }}
                    validationSchema={Yup.object({
                      email: Yup.string().email("Enter valid Email address.").required("Email is required."),
                      password: Yup.string().required("Password is required."),
                    })}
                    onSubmit={(formData, { resetForm }) => {
                      submitFormData(formData, resetForm);
                    }}
                  >
                    {(runform) => (
                      <form className="row" onSubmit={runform.handleSubmit}>
                        <div className="col-12 form-group">
                          <label className="form-lbl-class mb-2">Email Address</label>
                          <input type="email" {...formAttr(runform, "email")} onChangeCapture={handelSetEmail} className="form-control form-ans-class" name="email" placeholder="Johndoe@gmail.com" />
                          {errorContainer(runform, "email")}
                        </div>
                        <div className="col-12 form-group">
                          <label className="form-lbl-class mb-2">Password</label>
                          <bdi className="d-block  password-class">
                            <div className="position-relative">
                              <input id="toggle-pass" type={showPassword} {...formAttr(runform, "password")} className="form-control form-ans-class" name="password" placeholder="Enter your new password" />
                              <span id="eye-pwd" className="eye-pwd bg-transparent" onClick={showpassword}>
                                <i className={"bi " + IconPassword} />
                              </span>
                            </div>
                          </bdi>
                          {errorContainer(runform, "password")}
                        </div>
                        <div className="col-6 form-group">
                          <div className="custom-checkbox">
                            <label className="custom-lbl-part" htmlFor="rememberme">
                              <input type="checkbox" id="rememberme" checked={is_remember} onChange={handelCheckbox} />
                              <span className="custom-checkbox-class"></span>
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <div className="col-6 form-group text-end">
                          <div className="d-inline-block form-link-style">
                            <span onClick={() => goTo("/forgot-password")}>Forgot Password ?</span>
                          </div>
                        </div>
                        <div className="col-12 form-group text-center">
                          <button type="submit" className="button-class w-100">
                            <span className="position-relative">LOGIN</span>
                          </button>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
