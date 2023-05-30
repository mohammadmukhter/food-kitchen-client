import { useForm } from "react-hook-form";
import regImg from "../../../assets/others/authentication2.png";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formHandler = (data) => {
    // event.preventDefault();
    // const form = event.target;
    // const email = form.email.value;
    // const password = form.password.value;

    console.log(data);
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
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
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
