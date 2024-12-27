import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={"CONTACT"}  text2={"US"}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row justify-center gap-10 mb-28 '>
        <img className='w-full md:max-w-[480px]'  src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our store</p>
          <p className='text-gray-600'>54786 Wills Station <br /> Suites 350, Washington</p>
          <p className='text-gray-600'>Tel: (563) 768-2345 <br />Email: admin@forever.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Optimize</p>
          <p className='text-gray-600'>Learn more about our teams and job opening.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

      <NewsLetterBox/>
      
    </div>
  )
}

export default Contact
