// Libraries
import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Components
// Components
import Login from "./Auth/forms/Login";
import Signup from "./Auth/forms/Signup";

import { Home } from "./_root/pages";
import AuthLayout from "./Auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Toaster } from './components/ui/toaster'

// Routes
//import routes from './routes/routes'

// styles
import './global.css'

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        <Route>
          {/* public routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          
          {/* private routes */}
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
      {/*<RouterProvider router={ routes } />*/}
      <Toaster />
    </main>
  )
}

export default App