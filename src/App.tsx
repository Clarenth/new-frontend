// Libraries
import React from 'react'
import { RouterProvider } from 'react-router-dom'

// Components

// Routes
import routes from './routes/routes'

// styles
import './global.css'

const App = () => {
  return (
    <main className='flex h-screen'>
      <RouterProvider router={ routes } />
    </main>
  )
}

export default App