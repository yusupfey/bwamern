import React from 'react';


import Button from '../elements/Button';
import  IconText  from "../parts/IconText";
function Header(props) {
    console.log(props)
    const getNavlinkClass = path => {
        console.log(window.location.pathname)
        // let link_active 
        // link_active= '/browse-by' === path ? "active" : ""
        return window.location.pathname  === path ? "active" : ""
    }
    return (
        <header className="spacing-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <IconText></IconText>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className={`nav-item ${getNavlinkClass('/')}`}>
                                <Button className="nav-link" type="link" href="">Home</Button>
                            </li>
                            <li className={`nav-item ${getNavlinkClass('/browse-by')}`}>
                                <Button className="nav-link" type="link" href="/browse-by">Browse By</Button>
                            </li>
                            <li className={`nav-item${getNavlinkClass('/stories')}`}>
                                <Button className="nav-link" type="link" href="/stories">Stories</Button>
                            </li>
                            <li className={`nav-item ${getNavlinkClass('/agens')}`}>
                                <Button className="nav-link" type="link" href="/agens">Agens</Button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;