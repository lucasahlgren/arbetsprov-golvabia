import React from 'react';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg';
import golvabiaLogo from '../../assets/images/golvabialogo.png';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="golvabia-primary d-flex align-items-center">
            <div className="container-fluid p-3">
                <div className="row">
                    <div className="col-lg-6 col-md-3 col-12">
                        <div className="footer-social-media justify-content-center d-flex flex-column p-3">
                            <img className="footer-logo pb-4 me-md-auto" src={golvabiaLogo} alt="Golvabia logo" />
                            <div className="d-flex flex-md-column flex-row col">
                                <a className="golvabia-nav-link my-md-2 ms-0 m-2 me-md-auto" href="/facebook">
                                    <Facebook className="footer-icon icon" />
                                </a>
                                <a className="golvabia-nav-link my-md-2 ms-md-0 m-2 me-md-auto" href="/instagram">
                                    <Instagram className="footer-icon icon" />
                                </a>
                                <a className="golvabia-nav-link my-md-2 ms-md-0 m-2 me-md-auto" href="/linkedin">
                                    <Linkedin className="footer-icon icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="footer-products p-3 d-flex flex-column me-auto align-content-start">
                            <h3 className="footer-column-title me-auto">Produkter</h3>
                            <a className="golvabia-nav-link" href="kakelochklinker">Kakel &amp; klinker</a>
                            <a className="golvabia-nav-link" href="tragolv">Trägolv</a>
                            <a className="golvabia-nav-link" href="vinylgolv">Vinylgolv</a>
                            <a className="golvabia-nav-link" href="textilgolv">Textilgolv</a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="footer-contact p-3 d-flex flex-column me-auto align-content-start">
                            <h3 className="footer-column-title me-auto">Kontakt</h3>
                            <a className="golvabia-nav-link" href="kontakt">Kontakta oss</a>
                            <a className="golvabia-nav-link" href="jobb">Jobba med oss</a>
                            <a className="golvabia-nav-link" href="aterforsaljare">Återförsäljare</a>
                            <a className="golvabia-nav-link" href="showroom">Showroom &amp; butik i Anderstorp</a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="footer-adress p-3 d-flex flex-column align-content-start">
                            <h3 className="footer-column-title me-auto">Adress</h3>
                            <p>AB Golvabia</p>
                            <p>Långgatan 10</p>
                            <p>33 433 Anderstorp</p>
                            <p>Sverige</p>
                            <a className="golvabia-nav-link" href="mailto:info@golvabia.se">info@golvabia.se</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
