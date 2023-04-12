import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';

const App = () => {
  return (
    <div className=''>
      <Header />
      <div className="mx-8 mt-5">
        <Outlet />
      </div>
    </div>
  );
};

export default App;