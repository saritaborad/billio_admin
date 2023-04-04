import React, { useEffect, useState } from "react";
import SideImg from "../../images/login-rgt-image.png";
import SideLogo from "../../images/side-logo.png";
import Logo from "../../images/logo.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import OtpInput from "react-otp-input";
import { PostApi } from "../../Pages/api/api-service";
import { API_Path } from "../../const";
import { toast } from "react-toastify";

function Verification(props) {
  const [email, setEmail] = useState();
  const [OTP, setOTP] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user_email")) {
      setEmail(localStorage.getItem("user_email"));
    }
  }, []);

  const submitOTPFormData = (formData, resetForm) => {
    formData.otp = OTP;
    const SignupDataPromise = new Promise((resolve, reject) => {
      resolve(PostApi(API_Path.forgotPassword, formData));
    });
    SignupDataPromise.then((response) => {
      if (response.status === 200) {
        toast.success(response.data.message);
        resetForm(formData)
        props.callbackforstatus()
      } else {
        toast.error(response.data.message);
        resetForm(formData)
      }
    });
  };

  return (
    <>
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
                    <div className="text-center mb-3">
                      <h2>Verification</h2>
                      <p>Enter verification code we send you on</p>
                      <div>
                        <b>
                          <span id="email-id">{email}</span>
                        </b>
                      </div>
                    </div>
                    <Formik
                      enableReinitialize={true}
                      initialValues={{
                        email: email,
                        otp: OTP,
                      }}
                      onSubmit={(formData, { resetForm }) => {
                        submitOTPFormData(formData, resetForm);
                      }}
                    >
                      {(runform) => (
                        <form className="row" onSubmit={runform.handleSubmit}>
                          <div className="col-12 form-group">
                            <div className="row otp-group">
                              <div className="col-12 otp-col px-0">
                                <OtpInput
                                  value={OTP}
                                  onChange={setOTP}
                                  numInputs={4}
                                  separator={<span style={{ width: "8px" }}></span>}
                                  isInputNum={true}
                                  shouldAutoFocus={true}
                                  inputStyle={{
                                    border: "1px solid rgba(32, 33, 36, 0.3)",
                                    backgroundColor: "#F4F5F9",
                                    width: "50px",
                                    height: "50px",
                                    fontSize: "14px",
                                    color: "#000",
                                    fontWeight: "400",
                                  }}
                                  containerStyle={{
                                    justifyContent: "center",
                                  }}
                                  focusStyle={{
                                    border: "1px solid rgba(32, 33, 36, 0.3)",
                                    outline: "none",
                                    boxShadow: "0 0 3px #1081e84d",
                                  }}
                                  className="otp_input justify-content-center px-2"
                                />{" "}
                              </div>
                            </div>
                          </div>
                          <div className="col-12 form-group text-center">
                            <button
                              type="submit"
                              className="button-class w-100"
                            >
                              <span className="position-relative">VERIFY</span>
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
    </>
  );
}

export default Verification;
