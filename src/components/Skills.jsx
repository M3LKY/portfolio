import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/java.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Git from '../assets/git.png';
import Posgre from '../assets/posgre.png';
import Aws from '../assets/awss.png';
import './index.scss'
const Skills = () => {
    return (
        <div name='skills' className='hid home-page z-10 w-full h-screen text-white mt-20 mb-10'>
            {/* Container */}
            <div className='max-w-[800px] mx-auto p-4 flex flex-col justify-center w-full h-full mt-5'>
                <div className='mt-9'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-700 text-blue-100 pt-8'>Skills</p>
                    <p className='py-4'></p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
                        <p className='my-4'>JAVA</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Posgre} alt="HTML icon" />
                        <p className='my-4'>POSGRESQL</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Git} alt="HTML icon" />
                        <p className='my-4'>GIT</p>
                    </div>
                    <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500 rounded'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500 rounded'>
                        <img className='w-20 mx-auto' src={Aws} alt="HTML icon" />
                        <p className='my-4'>AWS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                        <p className='my-4'>GITHUB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                        <p className='my-4'>NODE JS</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                        <p className='my-4'>TAILWIND</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skills;
