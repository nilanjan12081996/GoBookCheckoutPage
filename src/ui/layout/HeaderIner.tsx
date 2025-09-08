import React, { useRef, useEffect, useState } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { logo, logoIcon } from '../../assets/images/images';

import DropdownMessage from '../../components/DropdownMessage';
import DropdownNotification from '../../components/DropdownNotification';
import DropdownUser from '../../components/DropdownUser';
import { BiMenu } from "react-icons/bi";
import { FiAlignLeft } from 'react-icons/fi';
import { PiUserList } from 'react-icons/pi';
import { TiThMenu } from 'react-icons/ti';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';

import { Button, Navbar } from "flowbite-react";

function Header(props: {
    sidebarOpen: string | boolean | undefined;
    setSidebarOpen: (arg0: boolean) => void;
  }) {
    const location=useLocation()
    console.log("location",location?.pathname);


  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const nevigate = useNavigate();
  const handleMenuItemClick = (menuItem, flag = null) => {
    setActiveMenuItem(menuItem);
    console.log("nenuItem", menuItem);
  };
    
  return (
    <div className="z-10 sticky top-0 z-999 flex ml-0 lg:rounded-lg lg:mb-6 bg-[#170A2C] shadow-xl">
        <div className="flex flex-grow items-center justify-between px-6 py-2 shadow-2">

            <div className="flex items-center">
                {/* Logo area start here */}
                <div className="mr-8">
                    <Link to="/">
                    <img src={logo} className="my-0" />
                    </Link>
                </div>
                {/* Logo area ends here */}
            </div>

            {/* Main menu start here */}
            <div className="menu_section pb-0">
                <div className="main_menu">
                <Navbar fluid rounded className="bg-transparent pt-0 pb-0">
                    <div className="flex md:order-2 text-white">
                    <Navbar.Toggle  className="p-[3px]"/>
                    </div>
                    <Navbar.Collapse className="w-80 md:w-auto rounded-xl border border-gray-700 md:border-0 absolute right-6 top-16 z-10 bg-white md:bg-transparent md:static px-4 pb-2 md:px-0 md:pb-0 lg:bg-transparent">
                    <li>
                        <NavLink
                        className={
                            activeMenuItem === "item1"
                            ? "active"
                            : "text-black"
                        }
                        onClick={() => handleMenuItemClick("item1")}
                        to="/my-characters"
                        >
                        My Characters
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        className={
                            activeMenuItem === "item2"
                            ? "active"
                            : "text-black"
                        }
                        onClick={() => handleMenuItemClick("item2")}
                        to="/plans"
                        >
                        Plans
                        </NavLink>
                    </li>
                    </Navbar.Collapse>
                </Navbar>
                </div>
            </div>
            {/* Main menu ends here */}

            {/* <div className="hidden sm:block"> &nbsp;</div> */}

            <div className="flex items-center gap-3 2xsm:gap-7 mr-8 lg:mr-0">
                <ul className="flex items-center gap-2 2xsm:gap-4 hidden md:block">
                    {/* <!-- Notification Menu Area --> */}
                    <DropdownNotification />
                    {/* <!-- Notification Menu Area --> */}
                </ul>

                {/* <!-- User Area --> */}
                <DropdownUser />
                {/* <!-- User Area --> */}
            </div>
        </div>
    </div>
  )
}

export default Header