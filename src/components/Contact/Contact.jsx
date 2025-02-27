import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-[90%] mx-auto my-36 gap-20">
      <div className="w-full md:w-[60%] rounded-lg overflow-hidden shadow-lg relative">
        <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6437.483263773803!2d77.124437705653!3d13.327329070140145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02e826fb691ef%3A0xe78608813c36f380!2sSiddaganga%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1739469272484!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[550px] rounded-lg"
        />

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[85%] md:w-[75%] bg-[#242424] text-white p-6 rounded-lg shadow-xl border-2 border-orange-600">
          <div className="flex flex-col md:flex-row justify-between items-start text-left gap-40">
            <div className="w-full md:w-1/2">
              <h2 className="text-sm font-semibold uppercase mb-1">Address</h2>
              <p>
                E-Yantra Robotics Lab, Siddaganga Institute of Technology, Tumkur, Karnataka
              </p>
            </div>

            <div className="w-full md:w-1/2 mt-4 md:mt-0 flex flex-col items-start">
              <div className="mb-2">
                <h2 className="text-sm font-semibold uppercase mb-1">Email</h2>
                <a href="mailto:corsit@sit.ac.in" className="cursor-pointer hover:underline hover:text-orange-500">
                  corsit@sit.ac.in
                </a>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase mb-1">Phone</h2>
                <p>8104882160</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[40%] bg-[#1a1a1a] border-2 border-orange-500 shadow-lg rounded-lg p-6">
        <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
          <span>Contact Us</span>
        </h1>

        <form className="flex flex-col space-y-5">
          <div>
            <label className="block text-lg font-medium text-gray-300">Name</label>
            <input
              type="text"
              className="w-full h-12 px-4 text-lg border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-300">Email</label>
            <input
              type="email"
              className="w-full h-12 px-4 text-lg border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-300">Message</label>
            <textarea
              className="w-full h-32 p-4 text-lg border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>

          <input
            type="submit"
            value="Submit"
            className="w-full h-12 bg-orange-500 text-white text-lg font-semibold rounded-md cursor-pointer transition duration-300 hover:bg-orange-600"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
