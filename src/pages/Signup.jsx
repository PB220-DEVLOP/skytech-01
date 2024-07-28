import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import React from 'react';

function Signup() {
    return (
      <div className="flex min-h-screen bg-gray-900 text-white">
          <div className="flex w-full items-center justify-center p-4 sm:p-6 lg:p-8">
              <div className="bg-gray-800 p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg w-full max-w-md">
                  <h2 className="text-3xl font-semibold text-center mb-6">Sign up</h2>
                  <form>
                      <div className="mb-4">
                          <label className="block text-sm mb-1">Full name</label>
                          <input type="text" className="w-full px-4 py-2 rounded-full bg-gray-700 text-white" placeholder="Jon Snow" />
                      </div>
                      <div className="mb-4">
                          <label className="block text-sm mb-1">Email</label>
                          <input type="email" className="w-full px-4 py-2 rounded-full bg-gray-700 text-white" placeholder="your@email.com" />
                      </div>
                      <div className="mb-4">
                          <label className="block text-sm mb-1">Password</label>
                          <input type="password" className="w-full px-4 py-2 rounded-full bg-gray-700 text-white" placeholder="••••••••" />
                      </div>
                      <div className="mb-4 flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <label className="text-sm">I want to receive updates via email.</label>
                      </div>
                      <button className="w-full py-2 bg-blue-500 rounded-full text-white hover:bg-blue-600">Sign up</button>
                  </form>
                  <div className="mt-4 text-center">
                      <p>Already have an account? <a href="#" className="text-blue-400">Sign in</a></p>
                  </div>
                  <div className="mt-4 text-center">
                      <p>or</p>
                      <button className="w-full py-2 bg-transparent border border-gray-700 hover:bg-gray-700 rounded mt-2 flex items-center justify-center">
                          <FcGoogle className="mr-2" /> Sign up with Google
                      </button>
                      <button className="w-full py-2 bg-transparent border border-gray-700 hover:bg-gray-700 rounded mt-2 flex items-center justify-center">
                          <FaFacebook className="mr-2" /> Sign up with Facebook
                      </button>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Signup;
