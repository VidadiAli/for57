import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink to={'/register'}>Qeydiyyat</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar