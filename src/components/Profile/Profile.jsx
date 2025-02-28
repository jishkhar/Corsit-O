import React, { useState, useRef } from 'react';
import AddProject from './AddProject';
import Header from './HeaderProfile';
import profilePhoto from '../../assets/team/second/jishnu.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Profile = () => {
  const [showAddProject, setShowAddProject] = useState(false);
  const addProjectRef = useRef(null);

  const handleAddProjectClick = () => {
    setShowAddProject(true);
    setTimeout(() => {
      addProjectRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  return (
    <>
      <Header />

      <div className="h-fit bg-[#080514] text-white py-40 px-52">
        <div className="flex h-fit items-start justify-start px-12 py-12 border border-[rgba(173,216,230,0.8)] rounded-xl bg-[#0b001056]">
          <div className="flex items-center gap-28">

            <div className="max-w-md rounded-3xl p-[0.3rem] bg-gradient-to-b from-slate-300 to-pink-300 dark:from-slate-400 dark:to-[rgba(136,217,244,0.8)]">
              <div className="rounded-[calc(1.5rem-1px)] p-[0.5px] bg-white dark:bg-gray-900">
                <img className="w-full rounded-3xl" src={profilePhoto} alt="Image" />
              </div>
            </div>

            <div>
              <div className="w-[40vw] mx-auto my-12 p-12 rounded-3xl shadow-2xl text-xl">
                <div className="mb-8 flex items-center gap-6">
                  <h2 className="text-3xl font-bold text-white">Name:</h2>
                  <p className="text-gray-300 text-2xl">Jishnu Khargharia</p>
                </div>

                <div className="mb-8 flex items-center gap-6">
                  <h2 className="text-3xl font-bold text-white">Email:</h2>
                  <p className="text-gray-300 text-2xl">jiskhar011@gmail.com</p>
                </div>

                <div className="mb-8 flex items-center gap-6">
                  <h2 className="text-3xl font-bold text-white">Designation:</h2>
                  <p className="text-gray-300 text-2xl">2nd Year</p>
                </div>

                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-8 pl-2">
                    <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} className="text-gray-200 text-3xl transition-all duration-300 hover:scale-125" />
                    </a>
                    <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="text-gray-200 text-3xl transition-all duration-300 hover:text-white hover:bg-black hover:scale-125 p-1 rounded"
                      />

                    </a>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="transition group flex h-14 w-52 items-center justify-center rounded-full bg-gradient-to-r from-slate-500 via-slate-500 to-[rgba(173,216,230,0.8)] p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-sm hover:shadow-[rgba(167,219,236,0.8)]"
                onClick={handleAddProjectClick}
              >
                <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-900 transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out cursor-pointer">
                  Add Project
                </div>
              </button>

            </div>
          </div>
        </div>

        {showAddProject && <div ref={addProjectRef}><AddProject /></div>}
      </div>
    </>
  );
};

export default Profile;
