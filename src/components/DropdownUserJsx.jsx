import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BiSolidUser,
  AiFillSetting,
  AiOutlineLogout,
  TiGroup,
  AiOutlineArrowUp,
  RiLogoutBoxLine,
  GoStarFill,
} from "../assets/icons/index";

// import UserOne from '../assets/imagesource/user/user-01.png';
// import { logout } from "../slices/AuthSlice";
// import { useDispatch, useSelector } from "react-redux";
import { Button } from "flowbite-react";
// import ProfileModal from "../pages/Profile/ProfileModal";

const DropdownUserJsx = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(() => {
    return JSON.parse(localStorage.getItem("userDetails")) || {};
  });

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // const token =
  //   localStorage.getItem("regToken") || localStorage.getItem("userToken");
  // const userDetail = useSelector((state) => state.auth.currentUser);

  // useEffect(() => {
  //   if (Object.keys(userDetail).length) {
  //     setUserDetails(userDetail);
  //     localStorage.setItem("userDetails", JSON.stringify(userDetail));
  //   }
  // }, [userDetail]);
  // const first_name = JSON.parse(localStorage.getItem("first_name"));
  // const name = first_name.first_name;

  const handleLogout = () => {
    navigate("/");
  };

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const [openProfileModal, setOpenProfileModal] = useState("");
  const profileHandler = () => {
    setOpenProfileModal(true);
  };

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="font-semibold text-sm text-gray-600 ml-2 hover:text-[#5e17eb] flex items-center"
        to="#"
      >
        <AiFillSetting className="text-lg mr-1" /> Account Settings
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-3 flex w-52 flex-col rounded-sm border border-stroke bg-white shadow-md ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-3 border-b border-stroke px-4 py-4">
          <li>
            <Link
              to="/myprofile"
              className="flex items-center gap-2 text-sm font-normal duration-300 ease-in-out text-gray-600 hover:text-[#5e17eb]"
            >
              <BiSolidUser className="text-lg" />
              My Profile
            </Link>
          </li>
          <li>
            <Link
              to="/myplan"
              className="flex items-center gap-2 text-sm font-normal duration-300 ease-in-out text-gray-600 hover:text-[#5e17eb]"
            >
              <GoStarFill className="text-lg" />
              My Plan
            </Link>
          </li>
          <li>
            <Link
              to="/preços"
              className="flex items-center gap-2 text-sm font-normal duration-300 ease-in-out text-gray-600 hover:text-[#5e17eb]"
            >
              <AiOutlineArrowUp className="text-lg" />
              Upgrade
            </Link>
          </li>
        </ul>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 py-3 px-4 text-sm font-normal duration-300 ease-in-out text-gray-600 hover:text-[#5e17eb]"
        >
          <RiLogoutBoxLine className="text-lg" />
          Log Out
        </button>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownUserJsx;
