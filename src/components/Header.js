import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from "react-router-dom";
import anandLogo from "../img/anand_logo_white.png";

export default function Header() {
    const [toggled, setToggled] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header>
            <Link to="/" className="header-logo-link" aria-label="Anand Home">
                <img src={anandLogo} alt="Anand" className="header-logo-img" />
            </Link>

            <button
                className={`menu-btn-square ${toggled ? "open" : ""}`}
                onClick={() => setToggled(!toggled)}
                aria-label="Toggle navigation menu"
                type="button"
            >
                <span className="bar bar-top"></span>
                <span className="bar bar-mid"></span>
                <span className="bar bar-bot"></span>
            </button>
            {
                isMobile ?
                    <Sidebar
                        onBackdropClick={() => setToggled(false)}
                        toggled={toggled}
                        breakPoint="always"
                        image="https://i.pinimg.com/564x/ee/17/91/ee1791186d610736dd3ce5e24714196a.jpg"
                        rtl
                    >
                        <nav className="mobile-navbar">
                            <Menu
                                menuItemStyles={{
                                    button: {
                                        color: '#000000',
                                        fontFamily: "'Pacifico', cursive",
                                        fontSize: '1.2rem',
                                        textAlign: 'center',
                                        justifyContent: 'center',
                                        '&:hover': {
                                            color: '#e11874',
                                            backgroundColor: 'transparent',
                                        },
                                    },
                                }}
                            >
                                <MenuItem className="nav-item">
                                    <Link to="/" onClick={() => setToggled(false)}>Home</Link>
                                </MenuItem>
                                <MenuItem className="nav-item">
                                    <Link to="/products" onClick={() => setToggled(false)}>Product</Link>
                                </MenuItem>
                                <MenuItem className="nav-item">
                                    <a href="/#about-section" onClick={() => setToggled(false)}>About</a>
                                </MenuItem>
                                <MenuItem className="nav-item">
                                    <a href="/#review-card" onClick={() => setToggled(false)}>Reviews</a>
                                </MenuItem>
                                <MenuItem className="nav-item">
                                    <a href="/#contact" onClick={() => setToggled(false)}>Contact</a>
                                </MenuItem>
                            </Menu>
                        </nav>
                    </Sidebar>
                    :
                    <nav className="navbar">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-link">Product</Link>
                            </li>
                            <li className="nav-item">
                                <a href="/#about-section" className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="/#review-card" className="nav-link">Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a href="/#contact" className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </nav>
            }
        </header>
    );
}
