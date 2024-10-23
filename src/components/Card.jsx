import React from "react";

const Card = ({ project }) => {
    return (
        <div className=" mx-auto bg-black rounded-xl shadow">
            <a href={project.link}>
                <img className="rounded-t-lg" src={project.image} alt={project.title} />
            </a>
            <div className="p-5 bg-black rounded-lg">
                <a href={project.link}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                        {project.title}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-white">{project.description}</p>
                <a
                    href={project.link}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                    Read more
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
