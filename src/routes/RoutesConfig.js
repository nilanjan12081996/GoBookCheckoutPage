import React from 'react';
import OutsideLayout from '../ui/layout/OutsideLayout.jsx';
import InsideLayout from '../ui/layout/InsideLayout.jsx';

import Login from '../pages/Auth/Login.jsx';
import Landing from '../pages/Landing/Landing.jsx';




const allRoutes = [
  {
    path: '/',
    element: <OutsideLayout />,
    children: [{ index: true, element: <Login /> }],
  },
  {
    path: '/home',
    element: <InsideLayout />,
    children: [{ index: true, element: <Landing /> }],
  },

  {
    path: '*',
    element: 'Outside page not found',
  },
];
export default allRoutes;
