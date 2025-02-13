import React from 'react';
import jishnu from "../../assets/team/second/jishnu.jpg"
import Card from './Card.jsx';

const Team = () => {
  return (
    <>
      <div className="text-center text-5xl">
        Our Team
      </div>


      <div id="core" className="flex justify-center gap-40 flex-wrap">
        <Card img={jishnu} name="Jatin" position="Chairman" linkedin="jishnu" />
        <Card img={jishnu} name="Ujjawal" position="Vice-Chairman" linkedin="jishnu" />
      </div>


      <Card img={jishnu} name="Jishnu Khargharia" position="2nd Year" linkedin="jishnu" />

    </>
  );
};

export default Team;
