import React, { useState } from 'react'
import "./Navbar.scss"
import { FiSearch } from "react-icons/fi"
import { BiShoppingBag } from "react-icons/bi"
import { nav, nav_store } from "../../static_data"
import { Link } from 'react-router-dom'
import NavbarChild from '../NavbarChild/NavbarChild'

function Navbar() {
    const [clickDown, setClickDown] = useState(false)
    // console.log(clickDown)
    return (
        <div className='nav'>

            <div onMouseLeave={() => setClickDown(false)}
                onMouseEnter={() => setClickDown(true)}
                className="nav_down" style={clickDown ? { height: "70vh" } : { height: "0" }}></div>

            <div className="nav_logo">
                <Link to="/">
                    <h2>RICHMAN</h2>
                </Link>
            </div>
            <div className="nav_group">
                <ul className='nav_collection' onMouseLeave={() => setClickDown(false)} onMouseEnter={() => setClickDown(true)}>
                    {
                        nav.map(nav_item => (
                            <NavbarChild nav_item={nav_item} />
                        ))
                    }
                </ul>
                <div className='nav_store'>
                    <div className="nav_search">
                        <input type="text" placeholder='Search' />
                        <FiSearch />
                    </div>


                    <li className='nav_list' onMouseLeave={() => setClickDown(false)} onMouseEnter={() => setClickDown(true)}>
                        <Link to={nav_store[0].route}>
                            <span>{nav_store[0].navName}</span></Link>
                    </li>

                    <li className='nav_list'>
                        <Link to={nav_store[1].route}>
                            <span>{nav_store[1].navName}</span></Link>
                    </li>


                    <div className="nav_shop">
                        <BiShoppingBag />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Navbar