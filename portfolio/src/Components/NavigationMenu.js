import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const NavigationMenu = () => {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => setShowNav(!showNav);

    return (
        
        <nav className="navbar fixed-top justify-content-end">
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
            <FontAwesomeIcon icon={faBars} />
        </button>

        <div className={`collapse navbar-collapse ${showNav ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-md-0 justify-content-end">
            <li className="nav-item ms-auto">
                <a className="nav-link" href="#">
                home
                </a>
            </li>
            <li className="nav-item ms-auto">
                <a className="nav-link" href="#">
                projects
                </a>
            </li>
            <li className="nav-item ms-auto">
                <a className="nav-link" href="#">
                about
                </a>
            </li>
            <li className="nav-item ms-auto">
                <a className="nav-link" href="#">
                contact
                </a>
            </li>
            </ul>
        </div>
        </nav>
    );
    };