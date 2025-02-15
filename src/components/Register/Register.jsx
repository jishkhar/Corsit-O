import React from 'react';

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Register</h1>

        <form className="flex flex-col space-y-4">
          <div>
            <label className="block text-lg font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="w-full h-12 px-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full h-12 px-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Phone No</label>
            <input
              type="tel"
              className="w-full h-12 px-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">USN</label>
            <input
              type="text"
              className="w-full h-12 px-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Year</label>
            <select className="w-full h-12 px-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="" disabled selected>Select Year</option>
              <option value="1">First Year</option>
              <option value="2">Second Year</option>
            </select>
          </div>

          <input
            type="submit"
            value="Submit"
            className="w-full mt-10 h-12 bg-blue-600 text-white text-lg font-semibold rounded-md cursor-pointer transition duration-300 hover:bg-blue-700"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
