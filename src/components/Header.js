import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



export default function Header() {
    return(
        <header>
            <nav className="container-nav">
            <h1>SEND FREIGHT</h1>
            <div className="form-field">
                <FontAwesomeIcon icon={faSearch} className='fa-icon' />
            <input type='text' placeholder="Search" className="nav-input" />
            </div>
            <div className="nav-buttons">
            <button>Request Quote</button>
            <button>Book Shipment</button>
            </div>
            </nav>
        </header>
    )
}