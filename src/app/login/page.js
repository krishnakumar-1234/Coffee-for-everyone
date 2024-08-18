import React from "react";
import { FaGoogle, FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black-500 to-gray-600 p-3">
      <div className="bg-black p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-gray-300 mb-6">
          Login with
        </h2>

        <div className="space-y-4">
          <button className="flex items-center justify-center w-full p-3 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-300">
            <FaGoogle className="mr-2" />
            Login with Google
          </button>

          <button className="flex items-center justify-center w-full p-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300">
            <FaFacebookF className="mr-2" />
            Login with Facebook
          </button>

          <button className="flex items-center justify-center w-full p-3 text-white bg-gray-800 rounded-lg hover:bg-gray-900 transition duration-300">
            <FaGithub className="mr-2" />
            Login with GitHub
          </button>

          <button className="flex items-center justify-center w-full p-3 text-white bg-blue-400 rounded-lg hover:bg-blue-500 transition duration-300">
            <FaTwitter className="mr-2" />
            Login with Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
