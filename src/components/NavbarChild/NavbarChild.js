import React from 'react'
import { Link } from 'react-router-dom'
import "./NavbarChild.scss"
function NavbarChild({ nav_item }) {
    return (
        <li key={nav_item.id} className='nav_list'>
            <Link to={nav_item.route}>
                <span>{nav_item.navName}</span>
            </Link>
            <div className="nav_child_down">

            </div>
        </li>
    )
}

export default NavbarChild