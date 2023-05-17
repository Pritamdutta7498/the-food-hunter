import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';


const SingleRecipe = ({ recipe, tallCard }) => {
  const { recipe_id, recipe_url, recipe_name, ingredients, cooking_method, rating } = recipe;
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite(true);
    toast('Recipe added in your favorite list ✌️');
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="card bg-base-100 shadow-xl rounded-lg flex items-stretch">
        <figure className="h-60"><img className='h-full w-full object-cover' src={recipe_url} alt="recipe" /></figure>
        <div className={tallCard ?
          'card-body md:min-h-[630px] flex-1' :
          'card-body md:min-h-[470px] flex-1'}>
          <h2 className="card-title text-2xl text-pink-800 min-h-[5vh]">{recipe_name}</h2>
          <div>
            <span className='font-bold'>Rating</span>
            <Rating
              style={{ maxWidth: 100 }}
              value={rating}
              readOnly />
          </div>
          <div>
            <span className='font-bold'>Ingredients</span>
            <div>
              {ingredients.map((ingredient, index) => {
                if ((index + 1) === ingredients.length) {
                  return <span key={index}> {ingredient}</span>
                }
                else
                  return <span key={index}> {ingredient},</span>
              })}
            </div>
          </div>
          <div>
            <span className='font-bold'>Cooking method</span>
            <p>{cooking_method}</p>
          </div>
          <div className="card-actions justify-end mt-auto">
            <button
              className="btn btn-secondary"
              onClick={handleFavorite}
              disabled={favorite}
            >
              Make Favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;