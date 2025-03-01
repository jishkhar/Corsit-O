import React from 'react'
import { NavLink } from "react-router-dom";

const Home = () => {


  return (
    <>
      <div className='text-[#f7ffff] flex flex-col overflow-x-hidden'>
        <div className='h-screen mb-20 mt-[-40px]'>
          <spline-viewer url="https://prod.spline.design/8Q-TXZHyF66OklDE/scene.splinecode"></spline-viewer>
        </div>




        <div className="py-36 bg-[#191a1a] text-white">
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





        <div className="py-36 bg-[#272928] text-white">
          <div className="container mx-auto px-6">

            <div className="text-center mb-24">
              <h2 className="text-6xl text-[#ed5a2d] font-bold mb-4">Our Events</h2>
              <p className="text-lg">Join us in our exciting robotics events and workshops</p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  date: "Date",
                  title: "RoboExpo",
                  description: "A showcase of cutting-edge robotics, AI, and automation innovations.",
                  location: "📍 Birla Auditorium",
                  icon: "📦",
                },
                {
                  date: "Date",
                  title: "Robotics Workshop",
                  description: "Learn the basics of robotics and automation in this hands-on workshop.",
                  location: "📍 Location",
                  icon: "💡",
                },
                {
                  date: "Date",
                  title: "RoboCor",
                  description: "The ultimate battleground for innovation, where robots clash and creativity thrives!",
                  location: "📍 SIT",
                  icon: "🖱️",
                },
              ].map((event, index) => (
                <div
                  key={index}
                  className="bg-[#1f1f1f] border border-[#ed5a2d] rounded-2xl overflow-hidden shadow-lg transition hover:scale-105 duration-300 p-6 text-center"
                >
                  <div className="text-5xl mb-4">{event.icon}</div>
                  <p className="text-[#ed5a2d] text-sm font-semibold">{event.date}</p>
                  <h3 className="text-2xl font-bold mt-2 mb-3">{event.title}</h3>
                  <p className="text-lg mb-4">{event.description}</p>
                  <p className="text-gray-400 text-sm mb-4">{event.location}</p>
                  <NavLink to="/register" onClick={() => window.scrollTo(0, 0)}>
                    <button className="bg-[#ed5a2d] hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition hover:scale-110 cursor-pointer">
                      Register Now
                    </button>
                  </NavLink>
                </div>
              ))}
            </div>

            <div className="text-center">
              <NavLink to="/events" onClick={() => window.scrollTo(0, 0)}>
                <button className="bg-[#ed5a2d] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition hover:scale-110 cursor-pointer">
                  Events
                </button>
              </NavLink>
            </div>
          </div>
        </div>


        <div className='bg-[#191a1a]'>Photo Gallery</div>
      </div>
    </>
  )
}

export default Home
