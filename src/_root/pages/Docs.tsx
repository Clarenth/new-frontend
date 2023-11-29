// Libraries
import React from 'react'
import { Link } from "react-router-dom"

const Docs = () => {
  return (
    <div>
      Docs
      <Link to="/create-docs" className='text-blue-500'>
        Docs-Create
      </Link>
    </div>
  )
}

export default Docs