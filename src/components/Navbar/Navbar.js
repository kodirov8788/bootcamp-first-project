import React from 'react'
import "./Navbar.scss"
import { FiSearch } from "react-icons/fi"
import { BiShoppingBag } from "react-icons/bi"

function Navbar() {
    return (
        <div className='nav'>
            <div className="nav_logo">
                <a href="#">
                    <h2>RICHMAN</h2>
                </a>
            </div>
            <div className="nav_group">
                <ul className='nav_collection'>
                    <li className='nav_list'>
                        <a href="#">Shop</a>
                    </li>
                    <li className='nav_list'>
                        <a href="#">Bags</a>
                    </li >
                    <li className='nav_list'>
                        <a href="#">Fewer, Better</a>
                    </li>
                    <li className='nav_list'>
                        <a href="#">Gifts</a>
                    </li>
                </ul>
                <div className='nav_store'>
                    <div className="nav_search">
                        <input type="text" placeholder='Search' />
                        <FiSearch />
                    </div>
                    <li className='nav_list'>
                        <a href="#">Store</a>
                    </li>
                    <li className='nav_list'>
                        <a href="#">Sign In</a>
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