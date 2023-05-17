import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import 'react-tooltip/dist/react-tooltip.css'
import router from './components/routes/router';
import AuthProviders from './components/providers/AuthProviders';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
    <Toaster />
  </React.StrictMode>,
);