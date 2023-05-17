import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import { AuthContext } from '../providers/AuthProviders';
import Loading from './Loading';

const Access = () => {
  return (
    <>
      <div className='container mx-auto'>
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Access;
