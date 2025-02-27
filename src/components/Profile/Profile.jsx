import React from 'react'
import Header from './HeaderProfile'
import profilePhoto from '../../assets/team/second/jishnu.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Profile = () => {
  return (
    <>
      <Header />

      <div className="h-[100vh] bg-[#080514] text-white pt-40 px-52">
        <div class="flex h-fit items-start justify-start px-12 py-12 border border-[rgba(173,216,230,0.8)] rounded-2xl">
          <div class="flex items-center gap-28">

            <div class="max-w-md rounded-3xl p-[0.3rem] bg-gradient-to-b from-slate-300 to-pink-300 dark:from-slate-400 dark:to-[rgba(136,217,244,0.8)]">
              <div class="rounded-[calc(1.5rem-1px)] p-[0.5px] bg-white dark:bg-gray-900">
                <img class="w-full rounded-3xl" src={profilePhoto} alt="Image" />
              </div>
            </div>


            <div>
              <div class="w-[40vw] mx-auto my-12 p-12 rounded-3xl shadow-2xl text-xl">
                <div class="mb-8 flex items-center gap-6">
                  <h2 class="text-4xl font-bold text-white">Name:</h2>
                  <p class="text-gray-300 text-3xl">Jishnu Khargharia</p>
                </div>

                <div class="mb-8 flex items-center gap-6">
                  <h2 class="text-4xl font-bold text-white">Email:</h2>
                  <p class="text-gray-300 text-3xl">jiskhar011@gmail.com</p>
                </div>

                <div class="mb-8 flex items-center gap-6">
                  <h2 class="text-4xl font-bold text-white">Designation:</h2>
                  <select class="p-4 w-full rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option value="" disabled selected>Choose Designation</option>
                    <option value="1st-year">1st Year</option>
                    <option value="2nd-year">2nd Year</option>
                    <option value="3rd-year">3rd Year</option>
                    <option value="4th-year">4th Year</option>
                    <option value="chairman">Chairman</option>
                    <option value="vice-chairman">Vice-Chairman</option>
                    <option value="tech-lead">Tech Lead</option>
                    <option value="treasurer">Treasurer</option>
                    <option value="web-dev-lead">Web Dev Lead</option>
                    <option value="android-dev-lead">Android Dev Lead</option>
                    <option value="photoshop-lead">Photoshop Lead</option>
                    <option value="digital-lead">Digital Lead</option>
                  </select>
                </div>

                <div class="flex items-center gap-8">
                  <div class="flex items-center gap-8 pl-2">
                    <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} className="text-gray-200 text-4xl transition-all duration-300 hover:text-blue-400 hover:scale-110" />
                    </a>
                    <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} className="text-gray-200 text-4xl transition-all duration-300 hover:text-blue-400 hover:scale-110" />
                    </a>
                  </div>

                </div>

              </div>

              <button type="button" class="transtion group flex h-14 w-52 items-center justify-center rounded-full bg-gradient-to-r from-slate-500 via-slate-500 to-[rgba(173,216,230,0.8)] p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-sm hover:shadow-[rgba(167,219,236,0.8)]">
                <div class="flex h-full w-full items-center justify-center rounded-full bg-gray-900 transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out cursor-pointer">
                  Add Project
                </div>
              </button>
            </div>


          </div>
        </div>
      </div>



    </>
  )
}

export default Profile
