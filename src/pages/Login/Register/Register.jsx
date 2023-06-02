import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import regImg from "../../../assets/others/authentication2.png";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
  const { registerHandler, updateUserProfileHandler } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formHandler = (data) => {
    if (data) {
      registerHandler(data.email, data.password)
        .then((res) => {
          const registeredUser = res.user;
          console.log(registeredUser);
          if (registeredUser) {
            updateUserProfileHandler(data.name, data.photoUrl)
              .then(() => {
                const userData = {
                  name: registeredUser.displayName,
                  email: registeredUser.email,
                };
                fetch("http://localhost:5000/users", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(userData),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log("User data inserted successfully");
                  });
                console.log("user profile info updated");
                reset();
              })
              .catch((err) => console.log(err));
          }
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="mx-28 my-8">
      <div className="hero  py-8 bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img src={regImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow bg-base-100/30">
            <div className="card-body">
              <h3 className="text-xl text-center font-medium uppercase">
                Please Register
              </h3>
              <form onSubmit={handleSubmit(formHandler)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Name"
                    className="input input-bordered"
                  />
                  <span className="text-red-600 text-xs ms-2 mt-1">
                    {errors.name && <p>Name is required.</p>}
                  </span>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    {...register("photoUrl", { required: true })}
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />
                  <span className="text-red-600 text-xs ms-2 mt-1">
                    {errors.photoUrl && <p>Photo URL is required.</p>}
                  </span>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="email"
                    className="input input-bordered"
                  />
                  <span className="text-red-600 text-xs ms-2 mt-1">
                    {errors.email && <p>Email is required.</p>}
                  </span>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8}/,
                    })}
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <span className="text-red-600 text-xs ms-2 mt-1">
                    {errors.password?.type === "required" && (
                      <p>Password is required.</p>
                    )}
                    {errors.password?.type === "pattern" && (
                      <p>
                        Password must be 8 character and at least one upper
                        letter and one small letter one number.
                      </p>
                    )}
                  </span>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
              <div className="form-control">
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">
                    Already Have an account?
                  </Link>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
