import React from 'react';
import meat from './../../../assets/icon/meat.png';
import breakfast from './../../../assets/icon/breakfast.png';
import dessert from './../../../assets/icon/cupcake.png';
import salad from './../../../assets/icon/salad.png';
import starter from './../../../assets/icon/snacks.png';
import wine from './../../../assets/icon/wine.png';

const Menu = () => {
  return (
    <div className='px-5 md:px-36 my-10'>
      <div className='bg-slate-200 rounded p-5 md:p-10 py-10 md:py-16'>
        <div className='text-start mb-5'>
          <p className=''>---- <span className='text-black tracking-widest'>Our Chefs are export on</span></p>
          <h2 className='text-1xl md:text-3xl'>
            <span className='underline decoration-slate-400 text-4xl md:text-5xl pl-1 md:pl-2 font-bold'>Main</span>
            <span className='text-4xl md:text-5xl text-red-800'> Menu</span>
          </h2>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
          <div className='bg-white rounded p-5 md:p-10 group'>
            <div className='relative'>
              <img className='h-16 w-16 mb-5 transition-transform duration-500 group-hover:-translate-y-4 opacity-100' src={starter} alt="starter" />
              <p className='text-2xl md:text-3xl pl-1 font-bold transition-transform duration-500 group-hover:-translate-y-4 opacity-100'>Starters</p>
              <p className='text-xs md:text-lg pl-1 md:pl-2 transition-all duration-500 group-hover:opacity-100 opacity-0 '>Chicken wings (most viewed)</p>
            </div>
          </div>
          <div className='bg-white rounded p-5 md:p-10 group'>
            <div className='relative'>
              <img className='h-16 w-16 mb-5 transition-transform duration-500 group-hover:-translate-y-4 opacity-100' src={meat} alt="meat" />
              <p className='text-2xl md:text-3xl pl-1 font-bold transition-transform duration-500 group-hover:-translate-y-4 opacity-100'>Mains</p>
              <p className='text-xs md:text-lg pl-1 md:pl-2 transition-all duration-500 group-hover:opacity-100 opacity-0'>Classic Lasagna (most viewed)</p>
            </div>
          </div>
          <div className='bg-white rounded p-5 md:p-10 group'>
            <div className='relative'>
              <img className='h-16 w-16 mb-5 transition-transform duration-500 group-hover:-translate-y-4 opacity-100' src={salad} alt="salad" />
              <p className='text-2xl md:text-3xl pl-1 font-bold transition-transform duration-500 group-hover:-translate-y-4 opacity-100'>Salads</p>
              <p className='text-xs md:text-lg pl-1 md:pl-2 transition-all duration-500 group-hover:opacity-100 opacity-0'>Frog Eye Salad (most viewed)</p>
            </div>
          </div>
          <div className='bg-white rounded p-5 md:p-10 group'>
            <div className='relative'>
              <img className='h-16 w-16 mb-5 transition-transform duration-500 group-hover:-translate-y-4 opacity-100' src={wine} alt="wine" />
              <p className='text-2xl md:text-3xl pl-1 font-bold transition-transform duration-500 group-hover:-translate-y-4 opacity-100'>Wine</p>
              <p className='text-xs md:text-lg pl-1 md:pl-2 transition-all duration-500 group-hover:opacity-100 opacity-0'>The Prisoner Red (most viewed)</p>
            </div>
          </div>
          <div className='bg-white rounded p-5 md:p-10 group'>
            <div className='relative'>
              <img className='h-16 w-16 mb-5 transition-transform duration-500 group-hover:-translate-y-4 opacity-100' src={breakfast} alt="breakfast" />
              <p className='text-2xl md:text-3xl pl-1 font-bold transition-transform duration-500 group-hover:-translate-y-4 opacity-100'>Breakfast</p>
              <p className='text-xs md:text-lg pl-1 md:pl-2 transition-all duration-500 group-hover:opacity-100 opacity-0'>Avocado Toast (most viewed)</p>
            </div>
          </div>
          <div className='food-card bg-white rounded p-5 md:p-10 group'>
            <div className='relative'>
              <img className='h-16 w-16 mb-5 transition-transform duration-500 group-hover:-translate-y-4 opacity-100' src={dessert} alt="dessert" />
              <p className='text-2xl md:text-3xl pl-1 font-bold transition-transform duration-500 group-hover:-translate-y-4 opacity-100'>Dessert</p>
              <p className='text-xs md:text-lg pl-1 md:pl-2 transition-all duration-500 group-hover:opacity-100 opacity-0'>Chocolate Chip Cookies (most viewed)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;