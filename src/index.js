import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// import Loginpage from './components/loginpage';
// import Login_form from './components/login_form';
// import Signup from './components/signup_form';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//       <Route path='/' element={<Login_form />}>
//         <Route path='signup' element={<Signup />} />
//         <Route path='login' element={<Login_form />} />
//         </Route>
  
//   )
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
