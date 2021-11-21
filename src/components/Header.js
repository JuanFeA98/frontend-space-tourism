import React from 'react'
import {Link} from 'gatsby'

import '../styles/header.css'
import Logo from '../assets/shared/logo.svg'

export default function Header() {
    return (
        <div className="Header">
            <img src={Logo} alt="" />
            <div className="Header__Navbar">
                <ul>
                    <Link to="/">
                        <li>
                            <p>
                                <strong>00 </strong>HOME
                            </p>
                        </li>
                    </Link>
                    <Link to="/destination">
                        <li>
                            <p>
                                <strong>01 </strong>DESTINATION
                            </p>
                        </li>
                    </Link>
                    <Link to="/crew">
                        <li>
                            <p>
                                <strong>02 </strong>CREW
                            </p>
                        </li>
                    </Link>
                    <Link to="/technology">
                        <li>
                            <p>
                                <strong>03 </strong>TECHNOLOGY
                            </p>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
