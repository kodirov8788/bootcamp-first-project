import React from 'react'
import { Link } from 'react-router-dom'
import "./NavGrandChild.scss"
function NavGrandChild({ grandchildren, setimgLink }) {
    return (
        <li className='nav_grand_child'
            onMouseEnter={() => setimgLink(grandchildren?.image)}
            onMouseLeave={() => setimgLink("")}>

            <Link

                to={"#"}>
                {grandchildren.grandChildName}
            </Link>
        </li>
    )
}

export default NavGrandChild