import React from 'react'
import { NavLink } from "react-router-dom";

const Home = () => {


  return (
    <>
      <div className='text-[#f7ffff] flex flex-col overflow-x-hidden'>
        <div className='h-screen mb-20 mt-[-40px]'>
          <spline-viewer url="https://prod.spline.design/8Q-TXZHyF66OklDE/scene.splinecode"></spline-viewer>
        </div>




        <div className="py-36 bg-[#272928] text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-6xl text-[#ed5a2d] font-bold mb-4">Our Projects</h2>
              <p className="text-lg  ">Exploring the boundaries of innovation through robotics</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { title: "Line Following Robot", description: "An autonomous robot that follows a path using sensors.", tags: ["Arduino", "Sensors"] },
                { title: "Gesture Controlled Bot", description: "A robot that responds to hand gestures using OpenCV.", tags: ["Python", "OpenCV"] },
                { title: "Smart Home Automation", description: "IoT-based home automation for energy efficiency.", tags: ["IoT", "NodeMCU"] }
              ].map((project, index) => (
                <div
                  key={index}
                  className="bg-[#1f1f1f] border border-[#ed5a2d] rounded-2xl overflow-hidden shadow-lg transition hover:scale-105 duration-300"
                >
                  <div className="h-60 flex items-center justify-center bg-[#333]"></div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-lg  mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="bg-[#ed5a2d] text-white px-3 py-1 rounded-full text-[15px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <NavLink to="/projects" onClick={() => window.scrollTo(0, 0)}>
                <button className="bg-[#ed5a2d] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition hover:scale-110 cursor-pointer">
                  View All Projects
                </button>
              </NavLink>
            </div>
          </div>
        </div>







        <div className="bg-black text-white ">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-2">Our Achievements</h2>
              <div className="h-1 w-32 bg-red-500 mx-auto mb-4"></div>
              <p className=" ">Celebrating our success stories and milestones</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-900 rounded-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-red-500 p-4 rounded-full">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 15l-2-5m0 0l-2.5-7.5L12 6l4.5-3.5L14 7.5m-2 3l2 5m-2-5h6m-9 0H3" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">National Robotics Championship</h3>
                <p className="  mb-4">First Place in Technical Innovation</p>
                <p className="text-red-500 font-bold">2023</p>
              </div>

              <div className="bg-gray-900 rounded-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-red-500 p-4 rounded-full">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">IEEE Robotics Competition</h3>
                <p className="  mb-4">Best Innovation Award</p>
                <p className="text-red-500 font-bold">2022</p>
              </div>

              <div className="bg-gray-900 rounded-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-red-500 p-4 rounded-full">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="8" width="18" height="12" rx="2" />
                      <path d="M7 8V5a2 2 0 012-2h6a2 2 0 012 2v3" />
                      <path d="M12 12v3" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">Smart India Hackathon</h3>
                <p className="  mb-4">Winner in Hardware Category</p>
                <p className="text-red-500 font-bold">2022</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg py-12 px-6 mb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <p className="text-4xl font-bold text-red-500 mb-2">10+</p>
                  <p className=" ">National Awards</p>
                </div>

                <div>
                  <p className="text-4xl font-bold text-red-500 mb-2">5</p>
                  <p className=" ">International Recognitions</p>
                </div>

                <div>
                  <p className="text-4xl font-bold text-red-500 mb-2">15+</p>
                  <p className=" ">Competition Wins</p>
                </div>

                <div>
                  <p className="text-4xl font-bold text-red-500 mb-2">20+</p>
                  <p className=" ">Research Papers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            {/* Heading */}
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold">Upcoming Events</h2>
              <div className="h-1 w-32 bg-red-500 mx-auto my-2"></div>
              <p className=" ">Join us in our exciting robotics events and workshops</p>
            </div>

            {/* Event Cards - Changed BG Color */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  date: "25 Dec 2023",
                  title: "Robotics Workshop 2023",
                  description: "Learn the basics of robotics and automation in this hands-on workshop.",
                  location: "📍 Main Auditorium",
                  icon: "📦",
                },
                {
                  date: "1 Jan 2024",
                  title: "RoboWars Competition",
                  description: "Annual robotics competition featuring battle bots and innovative designs.",
                  location: "📍 College Ground",
                  icon: "💡",
                },
                {
                  date: "15 Jan 2024",
                  title: "Tech Talk Series",
                  description: "Industry experts share insights on the future of robotics and AI.",
                  location: "📍 Seminar Hall",
                  icon: "🖱️",
                },
              ].map((event, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-8 text-center transform transition duration-300 hover:-translate-y-2 shadow-lg"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-red-500 p-4 rounded-full text-4xl">{event.icon}</div>
                  </div>
                  <p className="text-red-500 text-sm font-semibold">{event.date}</p>
                  <h3 className="text-xl font-bold mt-2">{event.title}</h3>
                  <p className="  mt-2">{event.description}</p>
                  <p className="text-gray-500 text-sm mt-4">{event.location}</p>
                  <button className="w-full mt-4 bg-red-600 hover:bg-red-700 py-2 rounded-lg text-white font-semibold">
                    Register Now
                  </button>
                </div>
              ))}
            </div>

            {/* Event Statistics - Matching Width */}
            <div className="bg-gray-900 rounded-lg py-12 px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: "10+", label: "Upcoming Events" },
                  { value: "4", label: "Workshops" },
                  { value: "3", label: "Competitions" },
                  { value: "5", label: "Tech Talks" },
                ].map((stat, index) => (
                  <div key={index}>
                    <p className="text-4xl font-bold text-red-500 mb-2">{stat.value}</p>
                    <p className=" ">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>Photo Gallery</div>
      </div>
    </>
  )
}

export default Home
