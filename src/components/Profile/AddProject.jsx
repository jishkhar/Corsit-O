import React, { useState } from 'react';

const AddProject = () => {
  const [image, setImage] = useState(null);
  const [doc, setDoc] = useState(null);
  const [description, setDescription] = useState("");

  return (
    <div className="p-6 bg-[#0b001056] h-fit text-white rounded-lg shadow-lg max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Add Project</h2>
      
      <label className="block mb-4">
        <span className="text-lg">Upload Image:</span>
        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} className="mt-2 block w-full text-gray-900 rounded-lg border border-gray-600 cursor-pointer bg-gray-700 focus:outline-none" />
      </label>
      
      <label className="block mb-4">
        <span className="text-lg">Upload Document (.docx):</span>
        <input type="file" accept=".docx" onChange={(e) => setDoc(e.target.files[0])} className="mt-2 block w-full text-gray-900 rounded-lg border border-gray-600 cursor-pointer bg-gray-700 focus:outline-none" />
      </label>
      
      <label className="block mb-4">
        <span className="text-lg">Project Description:</span>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          className="mt-2 block w-full p-2 text-gray-900 rounded-lg border border-gray-600 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="4"
          placeholder="Enter project description..."
        />
      </label>

      <button className="mt-4 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">Submit</button>
    </div>
  );
}

export default AddProject;
