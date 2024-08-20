import React from 'react';
import MainNav from '../components/MainNav';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <>
      <MainNav />
      <Outlet />
    </>
  );
}

export default RootLayout;
