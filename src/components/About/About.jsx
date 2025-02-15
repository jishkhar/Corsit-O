import React from "react";
import dean from '../../assets/mentors/dean.jpeg'
import mentor from '../../assets/mentors/mentor.jpeg'
import one from '../../assets/founders/team1a.jpg'
import two from '../../assets/founders/team1b.jpg'
import three from '../../assets/founders/team1c.jpg'


const About = () => {
  return (
    <>
      <div className="flex justify-center">
        <div>About Us</div>
      </div>

      <div className="flex justify-center items-center w-[80%] mx-auto mt-10 gap-x-2">
        <div id="left" className="w-[55%]">
          <img src="https://placehold.co/700x500.png" />
        </div>
        <div id="right" className="w-[45%] self-center">
          <p>
            CORSIT, the robotics club of SIT, is a vibrant community of
            passionate robotics enthusiasts dedicated to learning, building, and
            innovating together. Since its inception in 2006, the club has
            organized national-level workshops and actively competed in
            prestigious events across the country. As the official hub for
            robotics activities at SIT, CORSIT provides students with hands-on
            experience, fostering creativity and technical excellence. With a
            mission to inspire and empower future innovators, the club continues
            to push the boundaries of robotics through collaboration and
            practical learning.
          </p>
        </div>
      </div>


      <div>
        <div className="flex justify-center">
          <div>Mentors</div>
        </div>
        <div className="flex justify-center items-center w-[80%] mx-auto mt-10 gap-x-2">
          {[
            { img: dean, name: "Dr. V Siddeswara Prasad", role: "Robotics Lab Co-ordinator" },
            { img: mentor, name: "Sridhara H S", role: "Robotics Lab Mentor" },
          ].map((person, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center w-64">
              <img
                src={person.img}
                alt="Profile Image"
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
              />
              <h2 className="text-xl font-semibold text-gray-800">{person.name}</h2>
              <p className="text-sm text-gray-600">{person.role}</p>
            </div>
          ))}
        </div>

      </div>



      <div>
        <div className="flex justify-center">
          <div>Founders</div>
        </div>
        <div className="flex justify-center items-center w-[80%] mx-auto mt-10 gap-x-2">
          {[
            { img: one, name: "Kiran B K", role: "Product Owner at Bosch Global Software" },
            { img: two, name: "Shivaswaroop P", role: "Procurement Specialist at ZF Group" },
            { img: three, name: "Divyanshu Sahay", role: "Firmware Engineer at Intel Corporation" }
          ].map((person, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center w-64">
              <img
                src={person.img}
                alt="Profile Image"
                className="w-40 h-40 rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">{person.name}</h2>
              <p className="text-sm text-gray-600">{person.role}</p>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default About;
