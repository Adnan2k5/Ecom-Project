import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
// import {useForm} from 'react-hook-form';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from './counter/counterSlice';
import './App.css';
import { SignIn } from './components/login';
import { Reg } from './components/Reg';

import { Home } from './components/Shop/Home';
import { Men } from './components/Shop/Men';




function App(){

  const router = createBrowserRouter([
    {
      path: "login",
      element: <><SignIn/></>
    },

    {
      path: "/register",
      element: <Reg/>
    },

    {
      path: "/",
      element: <Home/>
    },
    {
      path: 'men',
      element: <Men/>
    }

  ])



  // const delay = (d)=>{
  //   return new Promise((resolve,reject)=>{
  //     setTimeout(()=>{
  //       resolve()
  //     }, d*1000);
  //   })
  // }

  
  return(
    <div className="app">
      <RouterProvider router={router}/>
    </div>
  )
}


export default App;
