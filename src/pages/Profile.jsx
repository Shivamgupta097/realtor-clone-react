import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const auth = getAuth();

  const [formData, setFormData] = useState({
    fullName: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const navigate = useNavigate();

  const { fullName, email } = formData;

  const logout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col ">
        <h1 className="text-3xl text-center mt-6 mb-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mb-6 px-3">
          <form>
            <input
              type="text"
              name="fullName"
              value={fullName}
              placeholder="Enter your name"
              disabled
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out mb-6"
            />
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              disabled
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out mb-6"
            />

            <div className="flex justify-between text-sm whitespace-nowrap sm:text-lg mb-6">
              <p>
                Do you want to change your name ?
                <span className="text-red-600 transition duration-200 ease-in-out ml-1 hover:cursor-pointer">
                  Edit
                </span>
              </p>
              <p
                onClick={logout}
                className="text-blue-600 transition duration-200 ease-in-out ml-1 hover:cursor-pointer"
              >
                Sign out
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700  transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800 "
            >
              Sign In
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Profile;
