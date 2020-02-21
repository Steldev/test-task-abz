import React from 'react'

export default function (props) {
    return <div className="nav-spacer">
        <nav className="nav bg-white">
            <div className="nav-logo-wrapper">
                <div className="nav-logo">
                </div>
            </div>
            <ul className="nav-list">
                <li className="nav-item">
                    <a href="#reg" className="nav-link">About me</a>
                </li>
                <li className="nav-item">
                    <a href="#reg" className="nav-link">Relationships</a>
                </li>
                <li className="nav-item">
                    <a href="#reg" className="nav-link">Requirements</a>
                </li>
                <li className="nav-item">
                    <a href="#reg" className="nav-link">Users</a>
                </li>
                <li className="nav-item">
                    <a href="#reg" className="nav-link">Sign Up</a>
                </li>
            </ul>

            <div onClick={props.navToggle} className="nav-toggle">
            </div>

            {props.isNavOpen &&
                <div onClick={props.navToggle} className="nav-mobile-back">
                    <div className="nav-mobile bg-white">
                        <div className="nav-logo-wrapper">
                            <div className="nav-logo">
                            </div>
                        </div>
                        <hr />
                        <ul className="nav-list-mobile">
                            <li className="nav-item">
                                <a href="#reg" className="nav-link">About me</a>
                            </li>
                            <li className="nav-item">
                                <a href="#reg" className="nav-link">Relationships</a>
                            </li>
                            <li className="nav-item">
                                <a href="#reg" className="nav-link">Users</a>
                            </li>
                            <li className="nav-item">
                                <a href="#reg" className="nav-link">Sign Up</a>
                            </li>
                            <li className="nav-item">
                                <a href="#reg" className="nav-link">Terms and Conditions</a>
                            </li>
                        </ul>
                        <hr />
                        <ul className="nav-list-mobile">
                            <li className="nav-item">
                                <a href="#reg" className="nav-link">How it works</a>
                            </li>
                            <li className="nav-item">
                                <a href="#reg" className="nav-link">Partnership</a>
                            </li>
                            <li className="nav-item">
                                <a href="#reg" className="nav-link">Help</a>
                            </li>
                            <li className="nav-item">
                                <a href="#reg" className="nav-link">Leave testimonial</a>
                            </li>
                            <li className="nav-item">
                                <a href="#reg" className="nav-link">Contact us</a>
                            </li>
                        </ul>
                        <hr />
                        <ul className="nav-list-mobile">
                            <li className="nav-item">
                                <a href="#reg" className="nav-link">Articles</a>
                            </li>
                            <li className="nav-item">
                                <a href="#reg" className="nav-link">Our news</a>
                            </li>
                            <li className="nav-item">
                                <a href="#reg" className="nav-link">Testimonials</a>
                            </li>
                            <li className="nav-item">
                                <a href="#reg" className="nav-link">Licenses</a>
                            </li>
                            <li className="nav-item">
                                <a href="#reg" className="nav-link">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            }

        </nav>
    </div>;
}