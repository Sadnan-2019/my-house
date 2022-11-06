import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
const Login = () => {


     const { register, handleSubmit, watch, formState: { errors } } = useForm();

     return (
          <div>
             <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Login</h2>

          <form  >
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Please file the Email field",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Please provide correct email ",
                  },
                })}
                type="email"
                placeholder="your email"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Paasword</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Please file the password field",
                  },
                  minLength: {
                    value: 6,
                    message: "Please provide six more digit  ",
                  },
                })}
                type="password"
                placeholder="your password"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            

            <input
              type="submit"
              className="btn w-full max-w-xs   btn-outline btn-accent "
              value="Login"
            />
          </form>
          <p>
            <small className="text-primary">
              Forget Password?{" "}
              <Link className="btn btn-link text-primary" to="/signup">
                Create New Account
              </Link>
            </small>
          </p>

          <div className="divider">OR</div>
          <button
           
            className="btn btn-outline btn-accent"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>  
          </div>
     );
};

export default Login;