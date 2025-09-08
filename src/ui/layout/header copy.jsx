import React, { useRef, useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Navbar, Button, Modal, Label, TextInput } from "flowbite-react";
import logo from "../../assets/imagesource/logo.png";
import {
  AiOutlineSearch,
  HiOutlineUser,
  SlLocationPin,
} from "../../assets/icons";
import { cartIcon } from "../../assets/images/images";

const Header = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const handleMenuItemClick = (menuItem, flag = null) => {
    setActiveMenuItem(menuItem);
    console.log("nenuItem", menuItem);
    if (flag == "blog") {
      location.href = "https://aioasis.com/blog/";
    }
  };
  return (
    <>
      <div className="header_section w-full bg-white shadow-md">
        <div className="pt-0 pb-0 px-3 md:px-3 md:pt-4 flex max-w-screen-2xl mx-auto">
          <div className="w-full">
            <div className="header_top flex justify-between items-center flex-row-reverse md:flex-row xl:flex">
              <div className="w-5/12 mr-10">
                <div className="flex justify-center items-center">
                  <div className="w-2/12">
                    <img src={cartIcon} alt="cartIcon" />
                  </div>
                  <div className="w-2/12">Lang</div>
                  <div className="w-4/12 flex justify-end items-center">
                    <p className="text-[15px] text-[#231000] font-medium">
                      Sign in / Sign up
                    </p>
                    <HiOutlineUser className="text-2xl text-[#BE7A3A] ml-2" />
                  </div>
                  <div className="w-4/12 flex justify-end items-center">
                    <p className="text-[15px] text-[#231000] font-medium">
                      Delivery to Gada-Gada
                    </p>
                    <SlLocationPin className="text-2xl text-[#BE7A3A] ml-2" />
                  </div>
                </div>
              </div>
              <div className="w-6/12 pr-10">
                <div className="bg-[#f3f3f3] border border-[#e8e5e3] w-full mx-auto p-0 rounded-xl mb-0 overflow-hidden">
                  <form className="flex items-center justify-between w-full mx-auto h-[43px]">
                    <div className="relative w-[88%] lg:w-[92%] ml-0">
                      <input
                        type="text"
                        id="simple-search"
                        className="bg-[#f3f3f3] border-none text-[#988f88] text-right text-sm lg:text-sm rounded-lg focus:ring-[#f3f3f3] focus:border-[#f3f3f3] block w-full ps-5 p-2.5"
                        placeholder="Search..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-[8%] p-0 flex justify-center items-center ms-0 text-base lg:text-2xl font-medium text-[#988f88] bg-[#f3f3f3] hover:text-black rounded-r-lg overflow-hidden focus:ring-4 focus:outline-none focus:ring-[#f3f3f3]"
                    >
                      <AiOutlineSearch />
                    </button>
                  </form>
                </div>
              </div>
              <div className="w-1/12 flex justify-end items-end">
                <Link to="/">
                  <img src={logo} className="my-0" />
                </Link>
              </div>

              {/* <div className="block md:hidden w-4/12">
                <Link to="/">
                  <img src={logo} className="w-full my-3" />
                </Link>
              </div> */}
            </div>

            <div className="menu_section">
              <div className="main_menu">
                <Navbar fluid rounded className="bg-transparent pt-8">
                  <div className="flex md:order-2">
                    <Navbar.Toggle />
                  </div>
                  <Navbar.Collapse className="w-80 rounded-xl border border-gray-700 md:border-0 absolute right-6 top-16 z-10 bg-white md:bg-transparent md:static px-4 pb-2 md:px-0 md:pb-0 lg:bg-transparent">
                    <li>
                      <NavLink
                        className={
                          activeMenuItem === "item1" ? "active" : "text-black"
                        }
                        onClick={() => handleMenuItemClick("item1")}
                        active
                        to="milk-cheese"
                      >
                        Milk and cheese
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={
                          activeMenuItem === "item1" ? "active" : "text-black"
                        }
                        onClick={() => handleMenuItemClick("item2")}
                        active
                        to="vegetables-fruits"
                      >
                        Vegetables and fruits
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={
                          activeMenuItem === "item1" ? "active" : "text-black"
                        }
                        onClick={() => handleMenuItemClick("item3")}
                        active
                        to="Dairy-cheese"
                      >
                        Dairy and cheese
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={
                          activeMenuItem === "item1" ? "active" : "text-black"
                        }
                        onClick={() => handleMenuItemClick("item4")}
                        active
                        to="all-categories"
                      >
                        All categories
                      </NavLink>
                    </li>
                  </Navbar.Collapse>
                </Navbar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
