import React, { useState } from 'react';

const AddProject = () => {
  const [image, setImage] = useState(null);
  const [doc, setDoc] = useState(null);
  const [description, setDescription] = useState("");

  return (
    <div className="mt-10 flex h-fit items-start justify-start px-12 py-12 border border-[rgba(173,216,230,0.8)] rounded-2xl bg-[#0b001056] text-white w-[50vw] mx-auto">
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Add Project</h2>
        
        <label className="block mb-6">
          <span className="text-lg font-semibold">Upload Image:</span>
          <input 
            type="file" 
            accept="image/*" 
            onChange={(e) => setImage(e.target.files[0])} 
            className="mt-2 block w-full text-white rounded-lg border border-gray-600 cursor-pointer bg-gray-900 p-2 focus:outline-none"
          />
        </label>
        
        <label className="block mb-6">
          <span className="text-lg font-semibold">Upload Document (.docx):</span>
          <input 
            type="file" 
            accept=".docx" 
            onChange={(e) => setDoc(e.target.files[0])} 
            className="mt-2 block w-full text-white rounded-lg border border-gray-600 cursor-pointer bg-gray-900 p-2 focus:outline-none"
          />
        </label>
        
        <label className="block mb-6">
          <span className="text-lg font-semibold">Project Description:</span>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            className="mt-2 block w-full p-3 text-white rounded-lg border border-gray-600 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
            placeholder="Enter project description..."
          />
        </label>

        <button className="w-full px-4 py-3 text-lg font-semibold bg-gradient-to-r from-slate-500 via-slate-500 to-[rgba(173,216,230,0.8)] rounded-full hover:bg-gradient-to-l hover:shadow-sm hover:shadow-[rgba(167,219,236,0.8)] transition-all">
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddProject;
