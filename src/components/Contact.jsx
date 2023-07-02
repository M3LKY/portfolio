import React from 'react'
import './index.scss'
const Contact = () => {
  return (
    <div name='contact' className='home-page z-10 w-full h-screen flex justify-center items-center p-4 '>
      <form action="https://formsubmit.co/melquisedecgonzalez74@gmail.com" method="POST" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-yellow-700 text-yellow-100'>Contact</p>
        </div>
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://m3lky.github.io/cheesy-crust" />
        <input type="hidden" name="_subject" value="New submission!"/>
        <input className='active bg-[rgba(0,0,0)] p-2 border-2 border-blue-300 rounded-md text-yellow-400 text-2xl' type="text" placeholder='Name' name='name' />
        <input className='active my-4 p-2 bg-[rgba(0,0,0)] border-2 border-blue-300 rounded-lg text-yellow-400 text-2xl' type="email" placeholder='Email' name='email' />
        <textarea className='active bg-[rgba(0,0,0)] p-2 border-2 border-blue-300 rounded-md text-yellow-400 text-2xl' name="message" rows="10" placeholder='Message'></textarea>

        <button className='active text-blue-200 font-bold border-2 border-blue-200 hover:bg-black hover:border-yellow-300 hover:text-yellow-300 px-4 py-3 my-8 mx-auto flex items-center rounded-md'>
          Get in touch
        </button>
      </form>
    </div>
  )
}

export default Contact