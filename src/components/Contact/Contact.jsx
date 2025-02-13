import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-[90%] mx-auto my-36 gap-16">
  
      <div className="w-full md:w-[60%] rounded-lg overflow-hidden shadow-lg">
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
      </div>

      <div className="w-full md:w-[40%] bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl lg:text-5xl font-semibold text-gray-800 mb-6">
          <span>Contact Us</span>
        </h1>

        <form className="flex flex-col space-y-5">
          <div>
            <label className="block text-lg font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="w-full h-12 px-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full h-12 px-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Message</label>
            <textarea
              className="w-full h-32 p-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
          </div>

          <input
            type="submit"
            value="Submit"
            className="w-full h-12 bg-slate-600 text-white text-lg font-semibold rounded-md cursor-pointer transition duration-300 hover:bg-red-700"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
