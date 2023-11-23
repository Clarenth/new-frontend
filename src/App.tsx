// Libraries
import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Components
import Login from "./Auth/forms/Login";
import Signup from "./Auth/forms/Signup";
import { Toaster } from './components/ui/toaster'

// Layouts
import AuthLayout from "./Auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

// Pages
import { Account, AI, Chat, Docs, DocsCreate, DocsUpdate, Home, Search } from "./_root/pages";

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
            <Route path='/account/:id' element={<Account />} />
            <Route path='/account-update/:id' element={<Account />} />
            <Route path='/docs' element={<Docs />} />
            <Route path='/docs/:id' element={<Docs />} />
            <Route path='/docs-create' element={<DocsCreate />} />
            <Route path='/docs-update' element={<DocsUpdate />} />
            <Route path='/search' element={<Search />} />
            <Route path='/chat' element={<Chat />} />
            <Route path='/ai' element={<AI />} />
          </Route>
        </Route>
      </Routes>
      {/*<RouterProvider router={ routes } />*/}
      <Toaster />
    </main>
  )
}

export default App