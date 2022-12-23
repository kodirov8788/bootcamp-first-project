import React from 'react'
import { Link } from 'react-router-dom'
import "./NavGrandChild.scss"
function NavGrandChild({ grandchildren, setimgLink, defaultImg }) {
    return (
        <li className='nav_grand_child'
            onMouseEnter={() => setimgLink(grandchildren?.image)}
            onMouseLeave={() => setimgLink(defaultImg)}>

            <Link

                to={"#"}>
                {grandchildren.grandChildName}
            </Link>
        </li>
    )
}

export default NavGrandChild