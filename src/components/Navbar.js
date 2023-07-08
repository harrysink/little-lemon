import React from "react";
import { images } from "../../constants";
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import { useState } from "react";
import {Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

function Navbar() {
    const [toggle, setToggle] = useState(false)

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={images.Logo}></img>
            </div>
            {/*for desktop view*/}
            <ul className="navbar-links">
                <Link className="link" to={"/"}>HOME</Link>
                <HashLink className="link" smooth to="/#About">ABOUT</HashLink>
                <HashLink className="link" smooth to="/#Menu">MENU</HashLink>
                <Link className="link" to={"/Reservations"}>RESERVATIONS</Link>
                <Link className="link" to={"/OrderOnline"}>ORDER ONLINE</Link>
                <Link className="link" to={"/Login"}>LOGIN</Link>
            </ul>
            {/*for mobile view*/}
            <div className="navbar-mobile-menu">
                <HiMenuAlt4
                    onClick={() => {setToggle(true)}}
                    className="navbar-hamburger"
                />
                toggle && (
                    <div>
                        <HiX
                            onClick={() => {setToggle(false)}}
                            className="navbar-close-hamburger"
                        />
                        <Link className="link" to={"/"} onClick={() => {setToggle(false)}}>HOME</Link>
                        <HashLink className="link" smooth to="/#About" onClick={() => {setToggle(false)}}>ABOUT</HashLink>
                        <HashLink className="link" smooth to="/#Menu" onClick={() => {setToggle(false)}}>MENU</HashLink>
                        <Link className="link" to={"/Reservations"} onClick={() => {setToggle(false)}}>RESERVATIONS</Link>
                        <Link className="link" to={"/OrderOnline"} onClick={() => {setToggle(false)}}>ORDER ONLINE</Link>
                        <Link className="link" to={"/Login"} onClick={() => {setToggle(false)}}>LOGIN</Link>
                    </div>
                )
            </div>
        </nav>
    );
};

export default Navbar;