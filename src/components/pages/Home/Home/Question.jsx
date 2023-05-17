import React from 'react';

const Question = () => {
  return (
    <div className='px-8 md:px-36 grid grid-cols-1 md:grid-cols-2 items-center'>
      <div className='p-5 md:p-10 py-10 md:py-16'>
        <p className=''>---- <span className='text-black tracking-widest'>Read cooking methods</span></p>
        <h2 className='text-1xl md:text-3xl'>
          <span className='text-2xl md:text-3xl pl-1 md:pl-2 font-bold'>Want to cook something <span className='text-red-800'>testy</span>? Read our <span className='text-red-800'>best recipes</span> </span>
        </h2>
        <button className="btn btn-outline btn-secondary">Recipes</button>
      </div>
      <div className='bg-pink-100 p-10 rounded-xl text-center'>
        <p className=''>---- <span className='text-red-800 tracking-widest'>Talk with chefs</span></p>
        <div className='py-3'>
          <hr className='bg-red-800' />
        </div>
        <h2 className='text-1xl md:text-3xl'>
          <span className='text-2xl md:text-3xl pl-1 md:pl-2 font-bold'>Opening Hours</span>
          <div className='grid grid-cols-2 text-base mt-3'>
            <div className='flex flex-col'>
              <span>Sunday to Tuesday</span>
              <span className='text-3xl text-red-800'>10:00</span>
              <span className='text-3xl text-red-800'>22:00</span>
            </div>
            <div className='flex flex-col'>
              <span>Friday to Saturday</span>
              <span className='text-3xl text-red-800'>12:00</span>
              <span className='text-3xl text-red-800'>19:00</span>
            </div>
          </div>
            <p className='w-2/3 md:w-1/2 mx-auto border border-red-900 p-2 my-2 rounded-lg'>+8801860239857</p>
        </h2>
      </div>
    </div>
  );
};

export default Question;