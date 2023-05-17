import React, { useEffect, useState } from 'react';
import SingleRecipe from './SingleRecipe';

const ChefRecipes = ({ chef }) => {
  const { recipes } = chef;
  const [tallCard, setTallCard] = useState(false);

  useEffect(() => {
    const isTall = recipes.some(recipe => recipe.cooking_method.length > 300);
    setTallCard(isTall);
  }, [recipes]);

  return (
    <div className='my-16 md:my-20'>
      <div className='text-center mb-10'>
        <h2 className='text-1xl md:text-3xl'>
          <span className='underline decoration-base-200 text-4xl md:text-5xl pl-1 md:pl-2 font-bold'>Most Liked Recipes</span>
          <span className='text-4xl md:text-5xl text-red-800'> list</span>
        </h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center items-center'>
        {
          recipes.map(recipe =>
            <SingleRecipe
              key={recipe.recipe_id}
              recipe={recipe}
              tallCard={tallCard}
            >
            </SingleRecipe>
          )
        }
      </div>
    </div>
  );
};

export default ChefRecipes;