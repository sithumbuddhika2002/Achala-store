import React, { useState } from "react";
import loginIcons from "../assest/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", data);
  };

  return (
    <section id="login" className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-10 max-w-md w-full">
        {/* Logo/Icon */}
        <div className="flex justify-center mb-8">
          <img
            src={loginIcons}
            alt="Login Icon"
            className="w-20 h-20 object-contain animate-bounce"
          />
        </div>

        {/* Login Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                name="email"
                value={data.email}
                onChange={handleOnChange}
                className="w-full border rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                name="password"
                value={data.password}
                onChange={handleOnChange}
                className="w-full border rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <div
                className="absolute right-3 top-2 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </div>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-red-600 hover:underline hover:text-red-700"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
            >
              Login
            </button>
          </div>
        </form>

        {/* Sign-Up Redirect */}
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/sign-up"
            className="text-red-600 hover:underline hover:text-red-700 font-medium"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
