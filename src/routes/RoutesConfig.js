import React from 'react';
import OutsideLayout from '../ui/layout/OutsideLayout.jsx';
import InsideLayout from '../ui/layout/InsideLayout.jsx';

import Login from '../pages/Auth/Login.jsx';
import Landing from '../pages/Landing/Landing.jsx';
import PaymentRedirect from '../pages/Landing/PaymentRedirect.jsx';




const allRoutes = [
  {
    path: '/',
    element: <OutsideLayout />,
    children: [{ index: true, element: <Login /> }],
  },
  {
    path: '/checkout/:id',
    element: <OutsideLayout />,
    children: [{ index: true, element: <Landing /> }],
  },
    {
    path: '/payment-redirect',
    element: <OutsideLayout />,
    children: [{ index: true, element: <PaymentRedirect /> }],
  },

  {
    path: '*',
    element: 'Outside page not found',
  },
];
export default allRoutes;
