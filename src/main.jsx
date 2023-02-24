import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { App } from './App'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './pages/Login/Login.jsx'
import { Profile } from './pages/Profile/Profile.jsx'
import { store } from './store/Store.jsx'

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />
//   },
//   {
//     path: '/sign-in',
//     element: <Login />
//   },
//   {
//     path: '/profile',
//     element: <Profile />
//   },
  // {
  //   path: '/profile/edit',
  //   element: <EditProfile />
  // }
// ])

root.render(
  // <React.StrictMode>
  //   <App />
  //   </React.StrictMode>
    <BrowserRouter>
      {/* <RouterProvider router={router} /> */}
      <Provider store={store}>
        <App />
      </Provider>
      </BrowserRouter>
);
