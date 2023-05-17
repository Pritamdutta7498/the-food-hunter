import React, { useEffect, useState } from 'react';
import Loading from '../../../layout/Loading';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const BestRecipes = () => {
  const newArray = [];
  const [chefs, setChefs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/chefs`)
      .then(res => res.json())
      .then(data => {
        setChefs(data);
        setIsLoading(false);
      })
  }, []);

  chefs.map(chef =>
    chef.recipes.map(recipe => {
      if (recipe.rating > 4.8) {
        newArray.push(recipe);
      }
    }))

  const slicedArray = newArray.slice(0, 3);

  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div className='px-8 md:px-36 my-5'>
      <div className='p-5 md:p-10'>
        <div className=' mb-5 text-center'>
          <p className=''> <span className='text-black tracking-widest'>Top Viewed Recipes</span></p>
          <h2 className='text-1xl md:text-3xl'>
            <span className=' decoration-slate-400 text-4xl md:text-5xl pl-1 md:pl-2 font-bold'>Most</span>
            <span className='text-4xl font-bold md:text-5xl text-orange-500'> Popular</span>
          </h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
          {
            slicedArray.map(recipe => {
              return (
                <div key={recipe.recipe_id} className=''>
                  <div className="card bg-base-100 shadow-xl rounded-lg flex items-stretch">
                    <figure className="h-60 relative overflow-hidden">
                      <img className='h-full w-full object-cover transition-opacity duration-500 ease-in-out hover:opacity-50' src={recipe.recipe_url} alt="recipe" />
                      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-500 ease-in-out"></div>
                    </figure>
                    <div className='p-5'>
                      <h2 className="card-title text-2xl text-pink-800">{recipe.recipe_name}</h2>
                      <div>
                        <span className='font-bold'>Rating</span>
                        <Rating
                          style={{ maxWidth: 100 }}
                          value={recipe.rating}
                          readOnly />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  );
};

export default BestRecipes;