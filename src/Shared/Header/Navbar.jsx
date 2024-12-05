import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { Tooltip } from 'react-tooltip'
import logo from "../../assets/logo.svg"

const Navbar = () => {

    const NavMenu = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li>
            <details>
                <summary to="/property">Property</summary>
                <ul className="p-2">
                    <li><Link to='/about'>Single BedRoom</Link></li>
                    <li><Link to='/about'>Duble BedRoom</Link></li>
                    <li><Link to='/about'>Triple BedRoom</Link></li>

                </ul>
            </details>
        </li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact</Link></li>



    </>
    return (
        <div className="max-w-screen-xl  mx-auto font-ubuntu fixed w-full top-0 z-50">
            <div className="navbar bg-base-100 px-4 rounded-full ml-72 mt-4 shadow-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content text-2xl bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-normal text-Primary">
                            {NavMenu}
                        </ul>
                    </div>
                    <img src={logo} alt="logo" />
                </div>
                <div className="navbar-center hidden lg:flex text-Primary font-semibold text-2xl">
                    <ul className="menu menu-horizontal px-1">
                        {NavMenu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link
                        className="text-2xl text-Primary"
                        to="/login"
                        data-tooltip-id="login-account"
                        data-tooltip-content="Log In"
                        data-tooltip-place="bottom"
                    ><VscAccount></VscAccount></Link>

                </div>
            </div>
            <Tooltip id="login-account" />
        </div>
    );
};

export default Navbar;