import React from 'react'

const ContactUs = () => {
  return (
    <div className='w-[100%] h-[80vh] flex flex-col items-center gap-10'>
      <h1 className='text-[#dbdce1] text-3xl'>Connect with us</h1>
      <div className='flex gap-10 font-semibold '>
      <div className='flex flex-col gap-6'>
            <h3 className='text-white text-xl'>Yash Chitransh</h3>
            
           <div className='flex flex-col gap-3'>
           <h2 className='text-[#9299a4]'>Co-Founder & CEO</h2>
           <h5 className='text-[#9299a4]'>xyz@gmail.com</h5>
           </div>
        </div>

        <div className='flex flex-col gap-6'>
            <h3 className='text-white text-xl'>ABC</h3>
           <div className='flex flex-col gap-3'>
           <h2 className='text-[#9299a4]'>Co-Founder & CEO</h2>
           <h5 className='text-[#9299a4]'>xyz@gmail.com</h5>
           </div>
        </div>

        <div className='flex flex-col gap-6'>
            <h3 className='text-white text-xl'>DEF</h3>
           <div className='flex flex-col gap-3'>
           <h2 className='text-[#9299a4]'>Co-Founder & CEO</h2>
           <h5 className='text-[#9299a4]'>xyz@gmail.com</h5>
           </div>
        </div>

        
      </div>
    </div>
  )
}

export default ContactUs
