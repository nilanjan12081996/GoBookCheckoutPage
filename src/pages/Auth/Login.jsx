import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Checkbox, Label, Select } from "flowbite-react";
import { logo } from "../../assets/images/images";
import {
  getAlluserType,
  login,
  loginServiceProvider,
  wholeSalerLogin,
} from "../../reducers/AuthSlice";

const Login = () => {
  const navigate = useNavigate();

  // const handleLogin = () => {
  //   navigate("/home");
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch=useDispatch()
  const nevigate=useNavigate()

  const onSubmit=(data)=>{
dispatch(login(data)).then((res)=>{
  if(res?.payload?.status_code===200){
nevigate("/home")
  }
})
  }

  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="my-0 lg:my-0 px-4 lg:mx-0 flex justify-center items-center wrapper_bg_area h-screen bg-white">
      <div className="w-full my-0 mx-auto">
        <div className="lg:flex py-8 lg:py-0">
          <div className="w-full lg:w-3/12 mx-auto">
            <div className="w-full">
              <div className="text-center mb-2 lg:mb-10">
                <img
                  src={logo}
                  alt="logo"
                  className="inline-block w-full rounded-md"
                />
              </div>
              <h1 className="text-center font-medium text-xl lg:text-[25px] leading-[45px] text-black pb-4 lg:pb-12">
                Login to Your Account
              </h1>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-6">
                    <Label className="text-[15px] text-black font-normal pb-2 block">
                      Username
                    </Label>
                    <input
                      type="text"
                      id="email"
                      className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                      placeholder="Username"
                      {...register("username")}
                    />
                  </div>
                  <div className="mb-6">
                    <Label className="text-[15px] text-black font-normal pb-2 block">
                      Your Password
                    </Label>
                    <input
                      placeholder="Password"
                      type="password"
                      id="password"
                      className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                    {...register("password")}
                    />
                  </div>

                  <button
                    type="submit"
                    className="text-white bg-[#343434] font-Manrope font-medium text-[23px] mb-2 hover:bg-[#505050] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-xl text-xl w-full px-5 py-3 text-center"
                  >
                    Log In
                  </button>
                  <div className="text-red-500 mb-1 text-center">
                    {errorMessage}
                  </div>
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                      <div className="flex items-center gap-1">
                        <Checkbox />
                        <Label className="text-[#505050] font-normal text-sm">
                          Remember me!
                        </Label>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <Link
                        className="text-black text-sm font-normal hover:text-[#505050]"
                        to="/forgot-password"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
