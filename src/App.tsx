// Libraries
import React from 'react'
import { RouterProvider } from 'react-router-dom'

// Components
import { Toaster } from './components/ui/toaster'

// Routes
import routes from './routes/routes'

// styles
import './global.css'

const App = () => {
  return (
    <main className='flex h-screen'>
      <RouterProvider router={ routes } />
      <Toaster />
    </main>
  )
}

export default App