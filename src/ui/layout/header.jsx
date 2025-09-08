import React, { useRef, useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Button,
  Modal,
  Label,
  TextInput,
  Select,
  MegaMenu,
  Checkbox,
} from "flowbite-react";
import logo from "../../assets/imagesource/logo.png";
import {} from "../../assets/images/images";
import { FcGoogle, RxArrowRight } from "../../assets/icons";
import LoginModal from "../../pages/Auth/LoginModal";
import RegisterModal from "../../pages/Auth/RegisterModal";

const Header = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const nevigate = useNavigate();
  const handleMenuItemClick = (menuItem, flag = null) => {
    setActiveMenuItem(menuItem);
    console.log("nenuItem", menuItem);
  };
  // Select Language start here
  // const [userLanguage, setUserLanguage] = useState("english");
  // useEffect(() => {
  //   console.log("userLanguageheader", userLanguage);

  //   localStorage.setItem("userLanguage", userLanguage ? userLanguage : "");
  // }, [userLanguage]);
  // // Select Language ends here
  // console.log(userLanguage, "userLanguage");

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    localStorage.setItem("userLanguage", selectedLanguage);
    // Trigger a custom event to notify other components of the change
    window.dispatchEvent(new Event("storage"));
  };
  const [userLanguage, setUserLanguage] = useState(
    localStorage.getItem("userLanguage") || "english"
  );
  useEffect(() => {
    const handleStorageChange = () => {
      setUserLanguage(localStorage.getItem("userLanguage") || "english");
    };

    // Listen for the custom storage event
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const [isVisible, setIsVisible] = useState(true);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };
  const naviagte = useNavigate();

  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegistrationModal, setOpenRegistrationModal] = useState(false);

  const handleLogin = () => {
    setOpenRegistrationModal(false);
    setOpenLoginModal(true);
  };
  const handleSignup = () => {
    setOpenLoginModal(false);
    setOpenRegistrationModal(true);
  };

  const handleLoginClose = () => {
    setOpenLoginModal(false);
    nevigate("/home");
  };

  const handleMyCharacters = () => {
    nevigate("/my-characters");
  };

  return (
    <>
      <div className="header_section w-full lg:pb-16">
        <div className="pt-3 pb-8 lg:pb-16 px-5 md:px-3 md:pt-4 flex max-w-6xl mx-auto">
          <div className="w-full">
            <div className="header_top flex justify-between items-center">
              <div className="flex items-center w-3/12">
                {/* Logo area start here */}
                <div className="mr-2">
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
                      <Navbar.Toggle className="p-[5px]" />
                    </div>
                    <Navbar.Collapse className="w-80 md:w-auto rounded-xl border border-gray-700 md:border-0 absolute right-6 top-16 z-10 bg-white md:bg-transparent md:static px-4 pb-2 md:px-0 md:pb-0 lg:bg-transparent">
                      <li>
                        <NavLink
                          className={
                            activeMenuItem === "item1" ? "active" : "text-black"
                          }
                          onClick={() => handleMenuItemClick("item1")}
                          to="/"
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={
                            activeMenuItem === "item5" ? "active" : "text-black"
                          }
                          onClick={() => handleMenuItemClick("item4")}
                          to="/about-us"
                        >
                          About us
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={
                            activeMenuItem === "item5" ? "active" : "text-black"
                          }
                          onClick={() => handleMenuItemClick("item4")}
                          to="/pricing"
                        >
                          Pricing
                        </NavLink>
                      </li>
                    </Navbar.Collapse>
                  </Navbar>
                </div>
              </div>
              {/* Main menu ends here */}
              {/* Login section start here */}
              <div className="mr-0 lg:mr-0 lg:flex items-center justify-end lg:mt-6 lg:mt-0 w-full lg:w-3/12">
                <div className="w-full lg:w-auto">
                  <button
                    onClick={() => handleLogin()}
                    className="text-white h-[34px] lg:h-[42px] bg-transparent font-medium text-xs lg:text-base rounded-md px-2.5 py-1 lg:px-5 lg:py-2 hover:text-[#6f41fe] mr-2"
                  >
                    Log In
                  </button>
                  <button
                    onClick={handleSignup}
                    className="text-white h-[34px] lg:h-[42px] bg-transparent font-medium text-xs lg:text-base rounded-md px-2.5 py-1 lg:px-5 lg:py-2 hover:bg-[#333333] hover:text-white get_started_banner"
                  >
                    <div className="flex items-center text-white">
                      Get Started
                    </div>
                  </button>
                </div>
                <div className="ml-2 md:ml-4 w-6/12 lg:w-auto">
                  <div id="google_translate_element"></div>
                </div>
              </div>
              {/* Login section ends here */}
            </div>
          </div>
        </div>
        <div className="banner_content px-5 lg:px-0">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-full lg:py-6">
                <h1 className="text-3xl leading-[35px] lg:text-[50px] lg:leading-[60px] text-white font-semibold pb-5 banner_title_text w-full lg:w-8/12 mx-auto font-SatoshiBold">
                  Build Smarter <span>Campaigns with AI-Powered </span>
                  Customer
                </h1>
                <div className="lg:w-9/12 mx-auto">
                  <p className="text-base text-white font-normal pb-8 pr-0 font-SatoshiMedium">
                    Turn your real customer data into lifelike digital personas
                    you can chat with. Predict buying behavior, test campaigns,
                    and refine strategy — before you launch.
                  </p>
                </div>
                <div className="flex justify-center items-center gap-4">
                  <button
                    onClick={handleSignup}
                    className="text-white bg-transparent font-medium text-sm lg:text-base rounded-md px-5 py-3 lg:px-10 lg:py-3.5 hover:bg-[#333333] hover:text-white get_started_banner font-SatoshiBlack"
                  >
                    <div className="flex items-center text-white">
                      Book a Demo
                    </div>
                  </button>
                  <button
                    onClick={handleSignup}
                    className="bg-[#180a40] border border-[#b146fe] text-[#b146fe] font-medium text-sm lg:text-base rounded-md px-5 py-3 lg:px-10 lg:py-3.5 hover:bg-[#333333] hover:text-white font-SatoshiBlack"
                  >
                    <div className="flex items-center">See Sample Avatar</div>
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:mt-10 py-6 lg:py-0">
              <div className="border border-[#583a87] rounded-xl overflow-hidden relative">
                <img src={support01} alt="support01" className="w-full" />
                <div className="bg-[#472386] text-center w-full h-[60px] lg:h-[98px] absolute left-0 bottom-0">
                  <div className="flex justify-center items-center h-full">
                    <p className="text-sm lg:text-[18px] text-white font-medium px-2 lg:px-4 font-SatoshiBold">
                      24x7 <br></br> Customer Support
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-[#583a87] rounded-xl overflow-hidden relative">
                <img src={support02} alt="support02" className="w-full" />
                <div className="bg-[#472386] text-center w-full h-[60px] lg:h-[98px] absolute left-0 bottom-0">
                  <div className="flex justify-center items-center h-full">
                    <p className="text-sm lg:text-[18px] text-white font-medium px-2 lg:px-4 font-SatoshiBold">
                      Automated Employee Support
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-[#583a87] rounded-xl overflow-hidden relative">
                <img src={support03} alt="support03" className="w-full" />
                <div className="bg-[#472386] text-center w-full h-[60px] lg:h-[98px] absolute left-0 bottom-0">
                  <div className="flex justify-center items-center h-full">
                    <p className="text-sm lg:text-[18px] text-white font-medium px-2 lg:px-4 font-SatoshiBold">
                      Conversational <br></br> Commerce
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-[#583a87] rounded-xl overflow-hidden relative">
                <img src={support04} alt="support04" className="w-full" />
                <div className="bg-[#472386] text-center w-full h-[60px] lg:h-[98px] absolute left-0 bottom-0">
                  <div className="flex justify-center items-center h-full">
                    <p className="text-sm lg:text-[18px] text-white font-medium px-2 lg:px-4 font-SatoshiBold">
                      Sales Character <br></br> trained on your data
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Login Start here */}
      {/* <Modal
        className="lg:w-[1000px] mx-auto"
        size="4xl"
        show={openLoginModal}
        onClose={() => setOpenLoginModal(false)}
      >
        <Modal.Header className="border-0 absolute right-10 top-10 bg-white rounded-lg">
          &nbsp;
        </Modal.Header>
        <Modal.Body>
          <div className="my-0 lg:my-0 px-0 lg:mx-0 flex justify-center items-center">
            <div className="w-full my-0 mx-auto">
              <div className="lg:flex py-8 lg:py-0">
                <div className="w-full lg:w-6/12 lg:pr-10 lg:pl-4 flex justify-center items-center">
                  <div className="w-full lg:w-full">
                    <h1 className="text-center font-medium text-xl lg:text-[30px] leading-[45px] text-black pb-4 lg:pb-12">
                      Login
                    </h1>
                    <div>
                      <form>
                        <div className="mb-6">
                          <input
                            type="email"
                            id="email"
                            className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                            placeholder="Username"
                          />
                        </div>
                        <div className="mb-6">
                          <input
                            placeholder="Password"
                            type="password"
                            id="password"
                            className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                          />
                        </div>

                        <button
                          type="button"
                          onClick={() => handleLoginClose()}
                          className="login_btn text-white font-Manrope font-medium mb-2 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg lg:text-xl w-full px-5 py-2.5 text-center"
                        >
                          Log In
                        </button>
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center">
                            <div className="flex items-center gap-1">
                              <Checkbox />
                              <Label className="text-black font-normal text-sm">
                                Remember me!
                              </Label>
                            </div>
                          </div>
                          <div className="hidden md:block">
                            <Link className="text-[#626ADF] text-sm font-normal hover:text-black">
                              Forgot Password?
                            </Link>
                          </div>
                        </div>
                      </form>
                      <div className="break_area relative pt-2 pb-2">
                        <p className="text-[#615D5D] text-sm leading-[22px] px-4 relative z-10 text-center w-[160px] mx-auto bg-white">
                          Or Continue With
                        </p>
                      </div>
                      <div className="flex justify-center items-center mt-4">
                        <div className="flex justify-center items-center border border-[#747474] px-4 py-2 rounded-md">
                          <FcGoogle className="text-2xl mr-1.5" />
                          <p className="text-black text-base">Google</p>
                        </div>
                      </div>
                      <div className="text-center mt-10">
                        <p className="text-[#615D5D] text-sm">
                          Don’t have an account?{" "}
                          <button
                            onClick={() => handleSignup()}
                            className="text-[#626ADF] hover:text-blackblack"
                          >
                            Sign Up
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-6/12 bg-cover hidden lg:block">
                  img
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal> */}

      {openLoginModal && (
        <LoginModal
          openLoginModal={openLoginModal}
          setOpenLoginModal={setOpenLoginModal}
          setOpenRegistrationModal={setOpenRegistrationModal}
          openRegistrationModal={openRegistrationModal}
        />
      )}
      {/* Login Start here */}
      {/* Registration Start here */}
      {/* <Modal
        className="lg:w-[1000px] mx-auto"
        size="4xl"
        show={openRegistrationModal}
        onClose={() => setOpenRegistrationModal(false)}
      >
        <Modal.Header className="border-0 absolute right-10 top-10 bg-white rounded-lg">
          &nbsp;
        </Modal.Header>
        <Modal.Body>
          <div className="my-0 lg:my-0 px-0 lg:mx-0 flex justify-center items-center">
            <div className="w-full my-0 mx-auto">
              <div className="lg:flex py-8 lg:py-0">
                <div className="w-full lg:w-6/12 lg:pr-10 lg:pl-4 flex justify-center items-center">
                  <div className="w-full lg:w-full">
                    <h1 className="text-center font-medium text-xl lg:text-[30px] leading-[45px] text-black pb-4 lg:pb-12">
                      Sign Up
                    </h1>
                    <div>
                      <form>
                        <div className="mb-4">
                          <Select required>
                            <option>Choose User type</option>
                            <option>User 1</option>
                            <option>User 2</option>
                            <option>User 3</option>
                          </Select>
                        </div>
                        <div className="flex gap-4">
                          <div className="mb-4">
                            <input
                              type="text"
                              className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                              placeholder="First Name"
                            />
                          </div>
                          <div className="mb-4">
                            <input
                              placeholder="Last Name"
                              type="text"
                              className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <input
                            type="email"
                            className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                            placeholder="Email"
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="text"
                            className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                            placeholder="Username"
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            placeholder="Password"
                            type="password"
                            className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                          />
                        </div>

                        <button
                          onClick={handleMyCharacters}
                          type="button"
                          className="login_btn text-white font-Manrope font-medium mb-2 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg lg:text-xl w-full px-5 py-2.5 text-center"
                        >
                          Sign Up
                        </button>
                      </form>
                      <div className="break_area relative pt-2 pb-2">
                        <p className="text-[#615D5D] text-sm leading-[22px] px-4 relative z-10 text-center w-[160px] mx-auto bg-white">
                          Or Continue With
                        </p>
                      </div>
                      <div className="flex justify-center items-center mt-4">
                        <div className="flex justify-center items-center border border-[#747474] px-4 py-2 rounded-md">
                          <FcGoogle className="text-2xl mr-1.5" />
                          <p className="text-black text-base">Google</p>
                        </div>
                      </div>
                      <div className="text-center mt-10">
                        <p className="text-[#615D5D] text-sm">
                          Have an account?
                          <button
                            onClick={() => handleLogin()}
                            className="text-[#626ADF] hover:text-blackblack pl-[5px]"
                          >
                            Log In
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-6/12 bg-cover hidden lg:block">
                  <img src={RegistrationImg} alt="RegistrationImg" />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal> */}
      {openRegistrationModal && (
        <RegisterModal
          openRegistrationModal={openRegistrationModal}
          setOpenRegistrationModal={setOpenRegistrationModal}
          openLoginModal={openLoginModal}
          setOpenLoginModal={setOpenLoginModal}
          // getStarted={getStarted}
        />
      )}
      {/* Registration Start here */}
    </>
  );
};

export default Header;
