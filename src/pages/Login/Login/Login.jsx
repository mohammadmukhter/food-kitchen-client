import { useEffect, useState } from "react";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";

import { Link } from "react-router-dom";
import loginImg from "../../../assets/others/authentication2.png";

const Login = () => {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handlerCaptcha = (e) => {
    const captchaValue = e.target.value;
    if (validateCaptcha(captchaValue)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const formHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ email, password });
  };

  return (
    <div className="mx-28 my-16">
      <div className="hero  py-8 bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow bg-base-100/30">
            <div className="card-body">
              <form onSubmit={formHandler}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <LoadCanvasTemplate />
                  <input
                    onBlur={handlerCaptcha}
                    type="text"
                    name="captchaField"
                    placeholder="Enter Above Captcha"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" disabled={disabled}>
                    Login
                  </button>
                </div>
              </form>
              <div className="form-control">
                <label className="label">
                  <p className="label-text-alt link link-hover">
                    Forgot password?
                  </p>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <p className="label-text-alt">
                    Don't Have an account?{" "}
                    <Link className="link link-hover" to="/register">
                      Register
                    </Link>
                  </p>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
