import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {

  return (
    <nav>
      <ol>
        <li>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/other'>
            Other
          </Link>
        </li>
      </ol>
    </nav>
  )
}