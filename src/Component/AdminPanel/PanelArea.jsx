import React from 'react'
import { NavLink } from 'react-router-dom'

const PanelArea = () => {
    return (
        <div>
            <ul className='menu'>
                <li className='menu-element'>
                    <NavLink to={'/teachers'} className="menu-link">
                        Müəllimlər
                    </NavLink>
                </li>
                <li className='menu-element'>
                    <NavLink to={'/groups'} className="menu-link">
                        Qruplar
                    </NavLink>
                </li>
                <li className='menu-element'>
                    <NavLink to={'/students'} className="menu-link">
                        Students
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default PanelArea