import React from "react";

const Card = ({ project }) => {
    return (
        <div className="mx-auto bg-black rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-transparent hover:border-yellow-400">
            <a href={project.link}>
                <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                        className="rounded-t-lg w-full transition-transform duration-500 hover:scale-110" 
                        src={project.image} 
                        alt={project.title} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            </a>
            <div className="p-5 bg-black rounded-b-lg">
                <a href={project.link}>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-yellow-400 hover:text-white transition-colors duration-300">
                        {project.title}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-200 line-clamp-4">{project.description}</p>
                <a
                    href={project.link}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-yellow-400 rounded-lg hover:bg-white focus:ring-4 focus:outline-none focus:ring-yellow-300 transition-all duration-300"
                >
                    View Project
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Card;
