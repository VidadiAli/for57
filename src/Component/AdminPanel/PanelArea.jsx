import React from 'react'
import { NavLink } from 'react-router-dom'
import './PanelArea.css'

const PanelArea = () => {
    return (
        <div className='panel-area'>
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
            </ul>
        </div>
    )
}

export default PanelArea