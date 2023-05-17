import React, { useContext } from 'react';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import { Outlet, useNavigation } from 'react-router-dom';
import Loading from './Loading';
import { AuthContext } from '../providers/AuthProviders';

const Main = () => {
  const {loading} = useContext(AuthContext);
  if(loading) {
    return <Loading></Loading>
  }
  return (
    <>
      <div className='container mx-auto'>
        <Header></Header>
        <div className='min-h-[calc(100vh-350px)]'>
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
