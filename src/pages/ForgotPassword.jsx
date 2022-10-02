import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { OAuth } from "../components";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const inputChangeHandler = (event) => {
    setEmail(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <section className="max-w-6xl mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      <div className="flex justify-center flex-wrap px-6 py-12 gap-20">
        <div className="md:w-[67%] lg:w-[50%]  md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
            alt="signImage"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%]">
          <form onSubmit={handleSubmit}>

          
            <input
              type="email"
              name="email"
              value={email}
              onChange={inputChangeHandler}
              placeholder="Email address"
              className="mb-6 w-full px-4 py-2 text-xl text-grey-700 bg-white border-gray-300 rounded transition ease-in-out "
            />
            
            <div className="flex justify-between text-sm whitespace-nowrap sm:text-lg mb-6">
              <p>
                Don't have an account?
                <Link
                  to="/sign-up"
                  className="text-red-600 transition duration-200 ease-in-out ml-1"
                >
                  Register
                </Link>
              </p>

              <p>
                <Link
                  to="/sign-in"
                  className="text-blue-600 transition duration-200 ease-in-out ml-1"
                >
                  Sign in instead?
                </Link>
              </p>
            </div>
          </form>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700  transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
          >
            Send reset email
          </button>

          <div
            className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-300
          after:border-t after:flex-1 after:border-gray-300
          "
          >
            <p className="text-center font-semibold mx-4">OR</p>
          </div>

          <OAuth/>

        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;