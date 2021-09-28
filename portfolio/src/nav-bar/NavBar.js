import React, { Component } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import { PageLinks} from "./PageLinks";
import "./NavBar.css"


class NavBar extends Component {

    render() {
        return(
        <nav>
            <DropdownButton id="smallmenu" title="Menu">
            {PageLinks.map((item, index) => {
                    return (
                        <button key={index} className="nav-item">
                            <Link className="nav-link" to={item.url}>
                                {item.title}
                            </Link>
                        </button>
                    )
                })}
            </DropdownButton>
            <div>
              <ul id="menu">
                <li>
                    <Image width={180} height={60} src="/GEIColored.png" alt="Goldstream Engineering Logo"/>
                </li>
                {PageLinks.map((item, index) => {
                    return (
                        <li key={index} className="nav-item">
                            <Link className="nav-link" to={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
              </ul>
            </div>
         </nav>
        )
    }
}

export default NavBar
