import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./NavbarChild.scss"
function NavbarChild({ nav_item }) {

    const [click, setClick] = useState(false)

    return (
        <li onMouseEnter={() => setClick(true)}
            onMouseLeave={() => setClick(false)}
            key={nav_item.id} className='nav_list'>
            <Link to={nav_item.route}>
                <span>{nav_item.navName}</span>
            </Link>
            <div className="nav_child_down"
                onMouseEnter={() => setClick(true)}
                onMouseLeave={() => setClick(false)}
                style={click ? { transform: "scale(1)", transformOrigin: "top left" }
                    : { transform: "scale(0)", transformOrigin: "top left" }}>
                {
                    nav_item.nav_child?.map(navChild => (
                        <h1>{navChild.childName}</h1>
                    ))
                }
            </div>
        </li>
    )
}

export default NavbarChild