import React from 'react';
import Banner from './Banner';
import Chefs from './Chefs';
import { useNavigation } from 'react-router-dom';
import Loading from '../../../layout/Loading';
import Menu from './Menu';
import Question from './Question';
import BestRecipes from './BestRecipes';

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Chefs></Chefs>
      <Menu></Menu>
      <Question></Question>
      <BestRecipes></BestRecipes>
    </>
  );
};

export default Home;