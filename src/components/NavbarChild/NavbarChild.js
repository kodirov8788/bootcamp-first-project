import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import NavGrandChild from '../NavbarGrandChild/NavGrandChild'
import "./NavbarChild.scss"
function NavbarChild({ nav_item }) {
    const [click, setClick] = useState(false)
    const [imgLink, setImageLink] = useState("")
    const getImg = (a) => {
        console.log(a)
        setImageLink(a)
    }



    console.log("Link :", imgLink)
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
                        <div className="nav_child_wrap">
                            <h1>{navChild.childName}</h1>
                            {navChild.grandChild.map(grandchildren => (
                                <NavGrandChild setimgLink={getImg} grandchildren={grandchildren} />
                            ))}
                        </div>
                    ))
                }
                <img className='nav_child_img' src="https://images.freeimages.com/images/previews/b76/meeting-table-1236299.jpg" alt="" />
            </div>

        </li>
    )
}

export default NavbarChild