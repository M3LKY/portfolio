import React from 'react';
import { data } from "../data/data.js";
import { FaGithub } from 'react-icons/fa'
import { LuScreenShare } from 'react-icons/lu'

const Work = () => {

  // projects file
  const project = data;
  //setProject(data);

  return (
    <div name='work' className='home-page z-10 w-full md:h-screen text-gray-300'>
      <div className='max-w-[1260px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-green-700 text-green-200'>
            Work
          </p>
        </div>
        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="active group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 text-center">
                <h1 className='text-4xl text-white font-bold'>{item.name}</h1>
                <h2>{item.name2}</h2>
                <div className="pt-8 text-center flex">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button className="flex items-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg border border-black">
                      <FaGithub className="mr-2" /> Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button className="flex items-center rounded-lg px-4 py-3 m-2 bg-white text-red-500 font-bold text-lg border border-red-500" >
                      <LuScreenShare className="mr-2" color='red' /> Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
