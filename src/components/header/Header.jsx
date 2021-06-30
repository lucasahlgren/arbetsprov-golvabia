import React from 'react';
import golvabiaLogo from '../../assets/images/golvabialogo.png';
import { ReactComponent as User } from '../../assets/icons/user.svg';
import { ReactComponent as Search } from '../../assets/icons/search.svg';
import { ReactComponent as Heart } from '../../assets/icons/heart.svg';
import './Header.css';

export default function Header() {
    return (
        /* No mobile nav */
        <header className="golvabia-primary">
            <div className="container-fluid">
                <nav className="navbar">
                    <div className="d-flex justify-content-end flex-fill">
                        <ul className="header-product-categories px-2 d-flex m-0 flex-md-row align-items-center font-light">
                            <li className="nav-item fs-7 p-3"><a className="golvabia-nav-link" href="/kakelochklinker">Kakel &amp; Klinker</a></li>
                            <li className="nav-item p-2"><a className="golvabia-nav-link" href="/tragolv">Trägolv</a></li>
                            <li className="nav-item p-2"><a className="golvabia-nav-link" href="/vinylgolv">Vinylgolv</a></li>
                            <li className="nav-item p-2"><a className="golvabia-nav-link" href="/textilgolv">Textilgolv</a></li>
                        </ul>
                    </div>
                    <div className="header-logo-container">
                        <a href="/">
                            <img className="header-logo px-3 my-2 img-fluid" src={golvabiaLogo} alt="Golvabia logo" />
                        </a>
                    </div>
                    <div className="d-flex justify-content-start flex-fill">
                        <ul className="header-about-golvabia px-2 d-flex m-0 flex-md-row font-light">
                            <li className="nav-item p-2"><a className="golvabia-nav-link" href="/inspiration">Bli inspirerad</a></li>
                            <li className="nav-item p-2"><a className="golvabia-nav-link" href="/omgolvabia">Om Golvabia</a></li>
                        </ul>
                        <ul className="header-user-settings px-2 d-flex m-0 flex-md-row font-light">
                            <li className="nav-item p-2"><a className="golvabia-nav-link" href="/sprak">Svenska</a></li>
                            <li className="nav-item mx-2 align-items-center d-flex"><a className="golvabia-nav-link" href="/sparadeprodukter"><Heart className="header-icon icon" /></a></li>
                            <li className="nav-item mx-2 align-items-center d-flex"><a className="golvabia-nav-link" href="/sok"><Search className="header-icon icon" /></a></li>
                            <li className="nav-item mx-2 align-items-center d-flex"><a className="golvabia-nav-link" href="/minprofil"><User className="header-icon icon" /></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}