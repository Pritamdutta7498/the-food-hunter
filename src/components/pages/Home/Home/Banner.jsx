import React from "react";
import {
  FaSearchengin,
  FaJenkins,
  FaBreadSlice,
  FaHandPeace,
} from "react-icons/fa";

const Banner = () => {
  return (
    <div className="px-5 md:px-36">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-5 md:p-10 justify-items-center items-center	">
        {/* left side */}
        <div className="px-2 md:px-5">
         
          <h2 className="text-1xl md:text-3xl">
            <span className="text-3xl md:text-5xl">Welcome to</span>
            <span className=" text-3xl md:text-5xl pl-1 md:pl-2 font-bold text-orange-500">
              The Food Hunter
            </span> 
          </h2>
          <br />
          <p className=" text-slate-500">
            This recipes and chef website is a platform dedicated to providing
            recipes, cooking tips, and techniques to individuals who are
            interested in cooking. The website can offer a wide range of
            recipes, from simple and easy-to-follow dishes to more complex and
            elaborate meals. The website may also include information on the
            latest cooking trends, food-related news, and interviews with
            renowned chefs.
            <br />
            On your website, you can showcase recipes of American cuisines and
            cultures, including appetizers, entrees, desserts, and more. You can
            also provide detailed cooking instructions, ingredient lists, and
            tips and tricks for preparing each dish.
          </p>
          <br />
          <div className="text-1xl text-red-800 grid grid-cols-2">
            <span className="flex gap-2 justify-items-center items-center">
              <FaSearchengin />
              Founding year: 2021
            </span>
            <span className="flex gap-2 justify-items-center items-center">
              <FaJenkins />
              Chefs: 6
            </span>
            <span className="flex gap-2 justify-items-center items-center">
              <FaBreadSlice />
              Recipes: 120+
            </span>
            <span className="flex gap-2 justify-items-center items-center">
              <FaHandPeace />
              Review: 29200+
            </span>
          </div>
        </div>
        {/* using carosal */}

        <div className="sm:order-first">
          <div className="h-48 md:h-72 carousel carousel-vertical rounded">
            <div className="carousel-item max-w-screen-lg mx-auto flex justify-center">
              <img
                className="max-w-full max-h-full"
                src="https://i.ibb.co/tLGmDjr/Grilled-Salmon-with-Dill-Butter.jpg"
              />
            </div>
            <div className="carousel-item max-w-screen-lg mx-auto flex justify-center">
              <img
                className="max-w-full max-h-full"
                src="https://i.ibb.co/NTQvPGJ/New-York-Strip-Steak-with-Red-Wine-Sauce.jpg"
              />
            </div>
            <div className="carousel-item max-w-screen-lg mx-auto flex justify-center">
              <img
                className="max-w-full max-h-full"
                src="https://i.ibb.co/NTQvPGJ/New-York-Strip-Steak-with-Red-Wine-Sauce.jpg"
              />
            </div>
            <div className="carousel-item max-w-screen-lg mx-auto flex justify-center">
              <img
                className="max-w-full max-h-full"
                src="https://i.ibb.co/BVXdvGJ/Pesto-Pasta-Salad.jpg"
              />
            </div>
            <div className="carousel-item max-w-screen-lg mx-auto flex justify-center">
              <img
                className="max-w-full max-h-full"
                src="https://i.ibb.co/fQB39V1/Barbecue-Pork-Ribs.jpg"
              />
            </div>
            <div className="carousel-item max-w-screen-lg mx-auto flex justify-center">
              <img
                className="max-w-full max-h-full"
                src="https://i.ibb.co/RD9GBDf/Shrimp-Scampi.jpg"
              />
            </div>
            <div className="carousel-item max-w-screen-lg mx-auto flex justify-center">
              <img
                className="max-w-full max-h-full"
                src="https://i.ibb.co/j4d93Cf/Macaroni-and-Cheese.jpg"
              />
            </div>
            <div className="carousel-item max-w-screen-lg mx-auto flex justify-center">
              <img
                className="max-w-full max-h-full"
                src="https://i.ibb.co/Rhv98Hm/Roast-Turkey.jpg"
              />
            </div>
            <div className="carousel-item max-w-screen-lg mx-auto flex justify-center">
              <img
                className="max-w-full max-h-full"
                src="https://i.ibb.co/YNNZqYF/Mac-and-Cheese.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
