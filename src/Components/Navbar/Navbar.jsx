import React from "react";
import { useRef } from "react";

import img from "../../assets/images/qartelz-logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <div className="h-20 flex justify-between mx-6 sm:mx-28">
      <div className="flex  gap-5 items-center ">
        <img className="h-16  " src={img} />

        <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
          <nav className="text-l sm:text-xl">
            <ul className="nav__list ">
              <li>
                <a className="nav__item" href="/">
                  Home
                </a>
              </li>

              <li>
                {/* <a className="nav__item" href="/opstmt">
                  Opstmt
                </a> */}
                <Link className="nav__item" to='/opstmt'>Opmtst</Link>
              </li>
              <li>
                {/* <a className="nav__item" href="/assetliab">
                  Asset & Liab
                </a> */}
                <Link className="nav__item" to='/assetliab'>Asset & Liab</Link>
              </li>
              <li>
                {/* <a className="nav__item" href="/ocaocl">
                  OCA & OCL
                </a> */}
                <Link className="nav__item" to='/ocaocl'>OCA & OCL</Link>
              </li>
              <li>
                {/* <a className="nav__item" href="/ratios">
                  Ratios
                </a> */}
              </li>
              <li>
                {/* <a className="nav__item" href="/ff">
                  FF
                </a> */}
                <Link className="nav__item" to='/ratio'>Ratios</Link>
                
              </li>
              <li>
                {/* <a className="nav__item" href="/wctlassmt">
                  WC TL ASSMT
                </a> */}
                <Link className="nav__item" to='/wctlassmt'>WC TL ASSMT</Link>

              </li>
              <li>
                {/* <a className="nav__item" href="/ff">
                  FF
                </a> */}
                <Link className="nav__item" to='/ff'>FF</Link>
                
              </li>
              

              <li>
                {/* <a className="nav__item" href="/ff">
                  FF
                </a> */}
                <Link className="nav__item" to='/kfi'>KFI</Link>
                
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="hidden sm:flex  items-center justify-center gap-3">
        <a href="/">
          <button className=" rounded-full  text-red-800 border border-solid border-red-800 w-28 p-1">
            Contact us
          </button>
        </a>

        <a href="/">
          <button className="text-white  rounded-full border border-solid bg-red-800 w-28 p-1">
            Login
          </button>
        </a>
      </div>
      <div
        className="flex sm:hidden  items-center justify-center text-xl"
        onClick={menuToggle}
      >
        <i class="fa fa-bars" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default Navbar;
