import React, {Component} from 'react';
import {ReactComponent as Phone} from '../assets/icons/phone.svg';
import {ReactComponent as Mail} from '../assets/icons/mail.svg';
import {ReactComponent as FaceBook} from '../assets/icons/facebook.svg';
import {ReactComponent as GitHub} from '../assets/icons/github.svg';
import {ReactComponent as LinkedIn} from '../assets/icons/linkedin.svg';
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <footer className="py-5">
                <div className="row">
                    <div className="col-6 col-md-2 mb-3">
                        <h5>Pages</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link className="nav-link p-0 text-muted" to="/">Home </Link></li>
                            <li className="nav-item mb-2"><Link className="nav-link p-0 text-muted" to="/about">About </Link></li>
                            <li className="nav-item mb-2"><Link className="nav-link p-0 text-muted" to="/login">Login </Link></li>
                            <li className="nav-item mb-2"><Link className="nav-link p-0 text-muted" to="/">Home </Link></li>
                            <li className="nav-item mb-2"><Link className="nav-link p-0 text-muted" to="/">Home </Link></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>Category</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link className="nav-link p-0 text-muted" to="/">Home </Link></li>
                            <li className="nav-item mb-2"><Link className="nav-link p-0 text-muted" to="/">About </Link></li>
                            <li className="nav-item mb-2"><Link className="nav-link p-0 text-muted" to="/">Login </Link></li>
                            <li className="nav-item mb-2"><Link className="nav-link p-0 text-muted" to="/">Home </Link></li>
                            <li className="nav-item mb-2"><Link className="nav-link p-0 text-muted" to="/">Home </Link></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>Legal</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link className="nav-link p-0 text-muted" to="/terms-and-conditions">Terms and Conditions </Link></li>
                            <li className="nav-item mb-2"><Link className="nav-link p-0 text-muted" to="/">About </Link></li>
                            <li className="nav-item mb-2"><Link className="nav-link p-0 text-muted" to="/">Login </Link></li>
                            <li className="nav-item mb-2"><Link className="nav-link p-0 text-muted" to="/">Home </Link></li>
                            <li className="nav-item mb-2"><Link className="nav-link p-0 text-muted" to="/">Home </Link></li>
                        </ul>
                    </div>

                    <div className="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control"
                                       placeholder="Email address"/>
                                <button className="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>© 2023 Ruksak, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="link-dark"
                                                href="https://www.facebook.com/lucianionut.turiac/">
                            <FaceBook className="bi" width="30" height="30"></FaceBook>
                        </a></li>
                        <li className="ms-3"><a className="link-dark" href="https://github.com/luci0130">
                            <GitHub className="bi" width="30" height="30"></GitHub>
                        </a></li>
                        <li className="ms-3"><a className="link-dark" href="https://www.linkedin.com/in/lucian-turiac/">
                            <LinkedIn className="bi" width="30" height="30"></LinkedIn>
                        </a></li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default Footer;
