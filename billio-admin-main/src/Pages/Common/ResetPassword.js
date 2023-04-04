import React, { useEffect, useState } from "react";
import SideImg from "../../images/login-rgt-image.png";
import SideLogo from "../../images/side-logo.png";
import Logo from "../../images/logo.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import { API_Path } from "../../const";
import { PostApi } from "../api/api-service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Verification from "../../Components/modal/Verification";

export default function ResetPassword() {

  const navigate = useNavigate();

  const [verificationShow, setverificationShow] = useState(true);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user_email")) {
      setEmail(localStorage.getItem("user_email"));
    }
  }, []);

  const submitFormData = (formData, resetForm) => {
    const resetPassword = new Promise((resolve) => {
      resolve(PostApi(API_Path.changepassword, formData));
    });
    console.log(formData)
    resetPassword.then((res) => {
      if (res.status === 200) {
        toast.success(res.data.message);
        resetForm(formData);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    });
  };

  const errorContainer = (form, field) => {
    return form.touched[field] && form.errors[field] ?
      (
        <span className="error text-danger">
          {form.errors[field]}
        </span>
      ) : null
  }

  const formAttr = (form, field) => ({
    onBlur: form.handleBlur,
    onChange: form.handleChange,
    value: form.values[field]
  })

  const showpassword = () => {
    document.getElementById("eye-pwd").classList.toggle("active");
    var x = document.getElementById("toggle-pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  const showconfirmpassword = () => {
    document.getElementById("eye-confirm-pwd").classList.toggle("active");
    var x = document.getElementById("toggle-confirm-pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  const callbackforstatus =()=>{
    setverificationShow(false)
  }

  return (
    <>
      {
        verificationShow === true ?
          <Verification callbackforstatus ={callbackforstatus} />
          :
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
                          <h2>Reset your password</h2>
                          <p>Enter and confirm your new password below. </p>
                        </div>
                        <Formik
                          enableReinitialize
                          initialValues={{
                            password: '',
                            cpassword: '',
                            email: email
                          }}
                          validationSchema={
                            Yup.object({
                              password: Yup.string().required('Password is required.'),
                              cpassword: Yup.string().when("password", {
                                is: val => (val && val.length > 0 ? true : false),
                                then: Yup.string().oneOf(
                                  [Yup.ref("password")],
                                  "Password must match."
                                )
                              }).required('Confirmation of Password is required.'),
                            })
                          }
                          onSubmit={(formData, { resetForm }) => {
                            submitFormData(formData, resetForm)
                          }} >
                          {(runform) => (
                            <form className='row' onSubmit={runform.handleSubmit}>
                              <div className='col-12 form-group'>
                                <label className='form-lbl-class mb-2'>Password</label>
                                <bdi className='d-block position-relative password-class'>
                                  <input id="toggle-pass" type='password' className='form-control form-ans-class' {...formAttr(runform, 'password')} name='password' placeholder='Enter your new password' />
                                  <span id='eye-pwd' className='eye-pwd bg-transparent' onClick={showpassword}>
                                    <i className='bi bi-eye-slash'></i>
                                  </span>
                                </bdi>
                                {errorContainer(runform, 'password')}
                              </div>
                              <div className='col-12 form-group'>
                                <label className='form-lbl-class mb-2'>Confirm Password</label>
                                <bdi className='d-block position-relative password-class'>
                                  <input id="toggle-confirm-pass" type='password' className='form-control form-ans-class' {...formAttr(runform, 'cpassword')} name='cpassword' placeholder='Enter your new confirm password' />

                                  <span id='eye-confirm-pwd' className='eye-pwd bg-transparent' onClick={showconfirmpassword}>
                                    <i className='bi bi-eye-slash'></i>
                                  </span>
                                </bdi>
                                {errorContainer(runform, 'cpassword')}
                              </div>
                              <div className='col-12 form-group text-center'>
                                <button type='submit' className='button-class w-100'>
                                  <span className='position-relative'>Submit Password</span></button>
                              </div>
                            </form>)}
                        </Formik>
                      </div>
                    </div>
                  </div>
                </div>
                <Formik
                  enableReinitialize
                  initialValues={{
                    password: "",
                    cpassword: "",
                  }}
                  validationSchema={Yup.object({
                    password: Yup.string().required(
                      "Password is required."
                    ),
                    cpassword: Yup.string()
                      .when("password", {
                        is: (val) => (val && val.length > 0 ? true : false),
                        then: Yup.string().oneOf(
                          [Yup.ref("password")],
                          "Password must match."
                        ),
                      })
                      .required("Confirmation of Password is required."),
                  })}
                  onSubmit={(formData, { resetForm }) => {
                    submitFormData(formData, resetForm);
                  }}
                >
                  {(runform) => (
                    <form className="row" onSubmit={runform.handleSubmit}>
                      <div className="col-12 form-group">
                        <label className="form-lbl-class mb-2">
                          Password
                        </label>
                        <bdi className="d-block position-relative password-class">
                          <input
                            id="toggle-pass"
                            type="password"
                            className="form-control form-ans-class"
                            {...formAttr(runform, "password")}
                            name="password"
                            placeholder="Enter your new password"
                          />

                          <span
                            id="eye-pwd"
                            className="eye-pwd bg-transparent"
                            onClick={showpassword}
                          >
                            <i className="bi bi-eye-slash"></i>
                          </span>
                        </bdi>
                        {errorContainer(runform, "password")}
                      </div>
                      <div className="col-12 form-group">
                        <label className="form-lbl-class mb-2">
                          Confirm Password
                        </label>
                        <bdi className="d-block position-relative password-class">
                          <input
                            id="toggle-confirm-pass"
                            type="password"
                            className="form-control form-ans-class"
                            {...formAttr(runform, "cpassword")}
                            name="cpassword"
                            placeholder="Enter your new confirm password"
                          />

                          <span
                            id="eye-confirm-pwd"
                            className="eye-pwd bg-transparent"
                            onClick={showconfirmpassword}
                          >
                            <i className="bi bi-eye-slash"></i>
                          </span>
                        </bdi>
                        {errorContainer(runform, "cpassword")}
                      </div>
                      <div className="col-12 form-group text-center">
                        <button
                          type="submit"
                          className="button-class w-100"
                        >
                          <span className="position-relative">
                            Submit Password
                          </span>
                        </button>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
      }
    </>
  );
}
