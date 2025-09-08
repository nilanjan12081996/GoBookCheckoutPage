import { useEffect, useState } from "react";
import { Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../layout/header";
import Sidebar from "../layout/Sidebar";
import HeaderIner from "../layout/HeaderIner";
import { logoMain } from "../../assets/images/images";

const InsideLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const token = sessionStorage.getItem("podToken");
  const parseToken = token ? JSON.parse(token)?.token : null;
  const nevigate = useNavigate();
  // useEffect(() => {
  //   if (parseToken === null || parseToken === null) {
  //     nevigate("/");
  //   }
  // }, []);

  return (
    <div className="inside_wrapper lg:pt-12">
      <div className="bg-[#f9f9f9] mb-0 border-t border-[#c7c7c7] border-b py-3">
        <div className="lg:flex justify-center items-center gap-2 text-center px-4 lg:px-0">
          <img
            src={logoMain}
            alt="logoMain"
            className="w-[32px] inline-block"
          />
          <p className="lg:text-[21px] font-semibold">
            <span className="font-bold">Automate</span> The Creation Of Your
            Print-On-Demand Products
          </p>
        </div>
      </div>
      <div>
        {/* <!-- ===== Page Wrapper Start ===== --> */}
        <div className="flex overflow-hidden">
          {/* <!-- ===== Sidebar Start ===== --> */}
          {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
          {/* <!-- ===== Sidebar End ===== --> */}

          {/* <!-- ===== Content Area Start ===== --> */}
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden max-w-6xl mx-auto">
            {/* <!-- ===== Header Start ===== --> */}
            {/* <HeaderIner
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            /> */}
            {/* <!-- ===== Header End ===== --> */}

            {/* <!-- ===== Main Content Start ===== --> */}
            <main>
              {/* <div className="mx-auto max-w-screen-2xl p-4 md:p-6 lg:py-10 lg:px-0">
                <Outlet />
              </div> */}
              <div className="mx-auto p-4 md:p-0 2xl:py-0 py-8 lg:my-12">
                <Outlet />
              </div>
            </main>
            {/* <!-- ===== Main Content End ===== --> */}
          </div>
          {/* <!-- ===== Content Area End ===== --> */}
        </div>
        {/* <!-- ===== Page Wrapper End ===== --> */}
      </div>
    </div>
  );
};

export default InsideLayout;
