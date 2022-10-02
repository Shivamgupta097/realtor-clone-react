import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { db } from "../firebase";

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link , Navigate, useNavigate} from "react-router-dom";
import { OAuth } from "../components";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { fullName, email, password } = formData;

  const inputChangeHandler = (event) => {
    let { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    console.log("sub");
    event.preventDefault();


    try {
    const auth = getAuth();

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );


    updateProfile(auth.currentUser, {
        displayName:fullName,
    })
      console.log(userCredential.user);

      const user = userCredential.user;
      const formDataCopy = {...formData};
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db , "users" , user.uid) , formDataCopy);
      navigate("/")
      toast.success("signUp successfull")
    } catch (error) {
      console.log(error.code);
      toast.error(error.code);
    }
  };
  return (
    <section className="max-w-6xl mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">Sign up</h1>
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
              type="text"
              name="fullName"
              value={fullName}
              onChange={inputChangeHandler}
              placeholder="Full Name"
              className="mb-6 w-full px-4 py-2 text-xl text-grey-700 bg-white border-gray-300 rounded transition ease-in-out "
            />

            <input
              type="email"
              name="email"
              value={email}
              onChange={inputChangeHandler}
              placeholder="Email address"
              className="mb-6 w-full px-4 py-2 text-xl text-grey-700 bg-white border-gray-300 rounded transition ease-in-out "
            />
            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={inputChangeHandler}
                placeholder="Enter your password"
                className="w-full px-4 py-2 text-xl text-grey-700 bg-white border-gray-300 rounded transition ease-in-out"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute top-3 right-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              ) : (
                <AiFillEye
                  className="absolute top-3 right-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              )}
            </div>

            <div className="flex justify-between text-sm whitespace-nowrap sm:text-lg mb-6">
              <p>
                Have a account?
                <Link
                  to="/sign-in"
                  className="text-red-600 transition duration-200 ease-in-out ml-1"
                >
                  Sign In
                </Link>
              </p>

              <p>
                <Link
                  to="/forgot-password"
                  className="text-blue-600 transition duration-200 ease-in-out ml-1"
                >
                  Forgot Password?
                </Link>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700  transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
            >
              Sign Up
            </button>

            <div
              className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-300
          after:border-t after:flex-1 after:border-gray-300
          "
            >
              <p className="text-center font-semibold mx-4">OR</p>
            </div>

            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
