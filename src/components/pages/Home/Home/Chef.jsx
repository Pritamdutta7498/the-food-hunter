import React from 'react';
import { FaBriefcase, FaBreadSlice, FaHandPeace } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Chef = ({ chef }) => {
  const { chef_id, chef_name, years_of_experience, num_of_recipes, likes, chef_picture } = chef;
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl mb-5">
        <figure className='md:h-64 md:w-80'>
          <LazyLoadImage
            className='h-full w-full object-cover'
            src={chef_picture}
            effect="blur"
            alt="Album" /></figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{chef_name}</h2>
          <div className='text-red-800 text-1xl md:text-[1.4rem]'>
            <span className='flex gap-2 justify-items-center items-center '>
              <FaHandPeace />
              Review: {likes}
            </span>
            <span className='flex gap-2 justify-items-center items-center'>
              <FaBreadSlice />
              Recipes: {num_of_recipes}
            </span>
            <span className='flex gap-2 justify-items-center items-center'>
              <FaBriefcase />
              Experience: {years_of_experience} years
            </span>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/chef/${chef_id}`}>
              <button className="btn btn-secondary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Chef;