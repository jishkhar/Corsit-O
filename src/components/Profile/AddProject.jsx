import React, { useState } from 'react';

const AddProject = () => {
  const [image, setImage] = useState(null);
  const [doc, setDoc] = useState(null);
  const [description, setDescription] = useState("");

  return (
    <div className="bg-[#080514] my-40 border border-[rgba(173,216,230,0.8)] rounded-xl max-w-3xl mx-auto p-10 shadow-xl">
      <h2 className="text-4xl font-bold text-center text-white mb-8">Add Project</h2>

      <label className="block mb-8">
        <span className="text-xl text-gray-200 font-medium">Upload Image:</span>
        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} className="mt-4 block w-full text-white bg-transparent border-2 border-gray-500 rounded-lg p-3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </label>

      <label className="block mb-8">
        <span className="text-xl text-gray-200 font-medium">Upload Document (.docx):</span>
        <input type="file" accept=".docx" onChange={(e) => setDoc(e.target.files[0])} className="mt-4 block w-full text-white bg-transparent border-2 border-gray-500 rounded-lg p-3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </label>

      <label className="block mb-8">
        <span className="text-xl text-gray-200 font-medium">Project Description:</span>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-4 block w-full p-5 text-white bg-transparent border-2 border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="5"
          placeholder="Enter project description..."
        />
      </label>

      <div className="flex justify-center mt-8">
        <button
          type="button"
          className="transition group flex h-14 w-[100vh] items-center justify-center rounded-full bg-gradient-to-r from-slate-500 via-slate-500 to-[rgba(173,216,230,0.8)] p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-sm hover:shadow-[rgba(167,219,236,0.8)]"
        >
          <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-900 transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 cursor-pointer">
            Submit
          </div>
        </button>
      </div>
    </div>
  );
}

export default AddProject;
