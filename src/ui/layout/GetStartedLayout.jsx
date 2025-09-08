/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { Suspense } from "react";

const GetStartedLayout = ({ children }) => {
  return (
    <div className="container-fluid overflow-hidden p-0">
      <div className="get_started_section py-0">
        <div className="w-full">
          <div className="w-full">
            <Suspense fallback={"loading.."}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GetStartedLayout;
