import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Card = ({ img, name, position, linkedin }) => {
    return (
        <div className="w-64 h-96 rounded-xl border bg-white px-6 pt-8 pb-10 shadow-lg transition-transform hover:scale-105 flex flex-col items-center">
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-gray-300">
                <img className="w-full h-full object-cover" src={img} alt={name} />
            </div>
            <h1 className="mt-4 text-center text-2xl font-bold text-gray-900">{name}</h1>
            <h3 className="text-center text-lg text-gray-600">{position}</h3>
            <div className="mt-auto pb-4 flex justify-center">
                <a href={linkedin} className="text-blue-600 hover:text-blue-800 text-2xl">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </div>

    );
};

export default Card;
