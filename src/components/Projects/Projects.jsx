import React from 'react'

import lfr from '../../assets/projects/LFR.jpg'
import gesture from '../../assets/projects/gesture.png'
import obstacle from '../../assets/projects/obstacle.png'
import blue from '../../assets/projects/blue.jpg'
import ar from '../../assets/projects/augmented.jpg'
import soccer from '../../assets/projects/soccer.jpeg'
import rfid from '../../assets/projects/RFID.png'

const projects = [
  {
    title: 'Line Following Robot',
    description: 'Line Following Robot is an autonomous robot which follows either black line in white are or white line in black area. The robot follows the line by using infrared sensors. The robot is programmed to follow the line and to take the turns whenever it encounters a turn.',
    image: lfr,
  },
  {
    title: 'Gesture Controlled Robot',
    description: 'Gesture controlled robot is a robot which can be controlled by simple hand gestures. The robot is controlled by the movement of the hand. The robot can move forward, backward, left and right by the movement of the hand.',
    image: gesture,
  },
  {
    title: 'Obstacle Avoiding Robot',
    description: 'Obstacle Avoiding Robot is an autonomous robot which avoids the obstacles in its path. The robot is programmed to detect the obstacles in its path and to avoid them by changing its path.',
    image: obstacle,
  },
  {
    title: 'Bluetooth Controlled Robot',
    description: 'Bluetooth Controlled Robot is a robot which can be controlled by a smartphone using Bluetooth. The robot can move forward, backward, left and right by using the smartphone.',
    image: blue,
  },
  {
    title: 'Augmented Reality',
    description: 'Augmented Reality is an interactive experience of a real-world environment where the objects that reside in the real world are enhanced by computer-generated perceptual information, sometimes across multiple sensory modalities, including visual, auditory, haptic, somatosensory, and olfactory.',
    image: ar,
  },
  {
    title: 'Soccer Robot',
    description: 'Soccer Robot is an autonomous robot which plays soccer. The robot is programmed to play soccer by using sensors to detect the ball and to kick the ball into the goal.',
    image: soccer,
  },
  {
    title: 'RFID Based Robot',
    description: 'RFID Based Robot is a robot which can be controlled by RFID tags. The robot can move forward, backward, left and right by using the RFID tags.',
    image: rfid,
  }
]


const Projects = () => {
  return (
    <>
      <div className='flex justify-center items-center w-[80%] mx-auto gap-72'>
        <h1 className='text-4xl font-bold'>Bots & Projects</h1>
        <div>
          Group projects thrive on synergy, combining diverse skills to drive innovation and boost efficiency. Collaboration enables individuals to contribute their expertise toward shared goals, resulting in meaningful outcomes. A unified vision fosters cohesion and alignment, ensuring ambitious objectives are achieved with greater impact.
        </div>
      </div>


      <div className="flex justify-center">
        <div id="projects" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg shadow-lg overflow-hidden w-[33rem]">
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default Projects
