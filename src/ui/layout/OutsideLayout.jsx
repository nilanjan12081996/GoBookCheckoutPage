/* eslint-disable react/prop-types */
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { Suspense, useEffect } from "react";

const OutsideLayout = ({ children }) => {
  const token = sessionStorage.getItem("podToken");
  const parseToken = token ? JSON.parse(token)?.token : null;
  const nevigate = useNavigate();
  // useEffect(() => {
  //   if (parseToken !== null || parseToken !== null) {
  //     nevigate("/my-characters");
  //   }
  // }, []);
  return (
    <div className="container-fluid overflow-hidden p-0">
      {/* <Header /> */}
      <div className="wrapper_section py-0">
        <div className="w-full">
          <div className="w-full">
            <Suspense fallback={"loading.."}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default OutsideLayout;
