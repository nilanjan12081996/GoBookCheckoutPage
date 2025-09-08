import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
// import Logo from '../images/logo/logo.svg';
// import SidebarLinkGroup from './SidebarLinkGroup';
import SidebarLinkGroup from "../layout/SidebarLinkGroup";
import { logo } from '../../assets/images/images';

import { AiFillSetting, AiFillTag, AiFillTags, AiOutlineDashboard, AiOutlineLogout, AiOutlineNotification, AiOutlineUser, BiLineChart, BiLineChartDown, BiSolidBook, BsPersonWorkspace, BsViewStacked, FiHome, MdManageAccounts, MdOutlineShoppingCartCheckout, MdSpaceDashboard, MdViewStream, PiChatsTeardropBold, PiClipboardTextBold, RiCoupon2Fill, RiCouponLine, RiUserVoiceFill, RxDashboard } from "../../assets/icons/index";
import { FaCircle, FaFirstOrderAlt, FaLink } from 'react-icons/fa';
import getCookie from '../../pages/Auth/getCookie';
import { refreshToken } from '../../reducers/AuthSlice';
import { useDispatch } from 'react-redux';
import { MdElectricalServices } from 'react-icons/md';
import { AiFillProduct, AiOutlineUsergroupAdd } from 'react-icons/ai';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );
  const dispatch=useDispatch()
  const [isHovered, setIsHovered] = useState(false);
  // const refreshTokenCookie = getCookie('refresh_token');

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     dispatch(refreshToken({ refresh_token: refreshTokenCookie }))
  //   }, 10000);

  //   return () => clearInterval(intervalId);
  // }, [refreshTokenCookie, dispatch]);
  
  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  const onHoverOpenSidebar = () => {
    setSidebarOpen(false);
  }
  //   const onHoverCloseSidebar = () => {
  //   setSidebarOpen(true);
  // }
   useEffect(()=>{
       setSidebarOpen(true);
  },[])
  return (
    <aside
      ref={sidebar}
      style={{zIndex:1}}
      className={`sidebar_area left-0 top-0 lg:top-[50px] z-9999 flex rounded-0 flex-col overflow-y-hidden bg-black duration-300 ease-linear absolute h-full lg:h-full shadow-xl ${
        sidebarOpen ? '-translate-x-full lg:static lg:w-24 lg:translate-x-0 ' : 'lg:translate-x-0 lg:static'
      }`}
      onMouseEnter={onHoverOpenSidebar}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-4 py-5 lg:py-[23px]">
        <NavLink className="text-center w-full" to="/">
          {/* <img src={logo} alt="Logo" className='w-40' /> */}
          { sidebarOpen ? 
            <>
              <div className="text-center mb-8">
                Small Logo
              </div>
            </>
            :
            <>
              <div className="text-center mb-8">
                <img src={logo} alt="logo" className="inline-block w-7/12" />
              </div>
            </>
          }
          
          {/* &nbsp; */}
        </NavLink>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="sidebar_menu no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear overscroll-none">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-0 pb-4 px-4 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}

              <li>
                <NavLink
                  to="/chats"
                  className={`group relative flex items-center gap-2 rounded-lg ${ sidebarOpen ? 'justify-center text-base py-3 px-0' : 'justify-start text-sm py-3 px-5' } font-normal text-[#C8C6C6] duration-300 ease-in-out hover:bg-graydark mb-2 ${
                    pathname.includes('chats') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                
                >
                   { sidebarOpen ? 
                    <>
                    <PiChatsTeardropBold className='text-xl' />
                    </>
                    :
                    <>
                    <PiChatsTeardropBold className='text-xl' />
                    Chats
                    </>
                  }
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/my-characters"
                  className={`group relative flex items-center gap-2 rounded-lg ${ sidebarOpen ? 'justify-center text-base py-3 px-0' : 'justify-start text-sm py-3 px-5' } font-normal text-sm text-[#C8C6C6] duration-300 ease-in-out hover:bg-graydark mb-2 ${
                    pathname.includes('my-characters') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                 
                >
                   { sidebarOpen ? 
                    <>
                    <AiOutlineUsergroupAdd className='text-xl' />
                    </>
                    :
                    <>
                    <AiOutlineUsergroupAdd className='text-xl' />
                    My Characters
                    </>
                  }
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/backstory"
                  className={`group relative flex items-center gap-2 rounded-lg ${ sidebarOpen ? 'justify-center text-base py-3 px-0' : 'justify-start text-sm py-3 px-5' } font-normal text-sm text-[#C8C6C6] duration-300 ease-in-out hover:bg-graydark mb-2 ${
                    pathname.includes('backstory') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  { sidebarOpen ? 
                    <>
                    <BiSolidBook className='text-xl' />
                    </>
                    :
                    <>
                    <BiSolidBook className='text-xl' />
                    Backstory
                    </>
                  }
                </NavLink>
              </li>      
              

            </ul>
          </div>

        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
