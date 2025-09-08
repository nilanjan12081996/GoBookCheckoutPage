import React, { useEffect, useState } from "react";
import { LoginImg, logo } from "../../assets/images/images";
import { FaEyeSlash, FcGoogle } from "../../assets/icons";
import { Checkbox, Label, Select } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAlluserType,
  otpVerify,
  otpVerifyWholesaler,
  registerUser,
  registerWholeSeller,
} from "../../reducers/AuthSlice";
import { useForm } from "react-hook-form";

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [sendOtp, setSendOtp] = useState(false);
  const [otpMessage, setOtpMessage] = useState("");
  const { usersRole } = useSelector((state) => state?.auth);

  useEffect(() => {
    dispatch(getAlluserType());
  }, []);
  const handleLogin = () => {
    navigate("/login");
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const userType = watch("userType");
  console.log("userType", userType);
  const {
    register: register1,
    setValue,
    handleSubmit: handleSubmit1,
    formState: { errors: errors1 },
  } = useForm();
  const onSubmit = (data) => {
    if (userType === "Super Admin") {
      const payload = {
        full_name: data?.full_name,
        email: data?.email,
        password: data?.password,
        phone: data?.phone,
      };
      dispatch(registerUser(payload)).then((res) => {
        console.log("res", res);
        if (res?.payload?.status_code === 201) {
          setMessage(res?.payload?.message);
          setSendOtp(true);
        }
      });
    } else if (userType === "Wholesaler") {
      const payload = {
        username: data?.username,
        password: data?.password,
        company_name: data?.company_name,
        email: data?.email,
        phone: data?.phone,
        contact_person: data?.contact_person,
      };
      dispatch(registerWholeSeller(payload)).then((res) => {
        console.log("res", res);
        if (res?.payload?.status_code === 201) {
          setMessage(res?.payload?.message);
          setSendOtp(true);
        }
      });
    }
  };
  const otpSubmit = (data) => {
    if (userType === "Super Admin") {
      dispatch(otpVerify(data)).then((res) => {
        console.log("Res: ", res);
        if (res?.payload?.status_code === 200) {
          navigate("/login");
        } else if (res?.payload?.message?.status_code === 400) {
          setOtpMessage(res?.payload?.message?.message);
        }
      });
    } else if (userType === "Wholesaler") {
      dispatch(otpVerifyWholesaler(data)).then((res) => {
        if (res?.payload?.status_code === 200) {
          navigate("/login");
        } else if (res?.payload?.message?.status_code === 400) {
          setOtpMessage(res?.payload?.message?.message);
        }
      });
    }
  };
  return (
    <div className="my-0 lg:my-0 px-4 lg:mx-0 flex justify-center items-center wrapper_bg_area  bg-black">
      <div className="w-full my-0 mx-auto">
        <div className="lg:flex lg:h-screen py-8 lg:py-0">
          <div className="w-full lg:w-6/12 flex justify-center items-center bg-black">
            <div className="w-full lg:w-7/12">
              <div className="text-center mb-2 lg:mb-5">
                <img src={logo} alt="logo" className="inline-block w-4/12" />
              </div>
              <h1 className="text-center font-medium text-xl lg:text-[25px] leading-[45px] text-white pb-4 lg:pb-6">
                Sign Up
              </h1>
              {!sendOtp && (
                <div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-2">
                      <Label className="text-[15px] text-white font-normal pb-1 block">
                        Choose User Type
                      </Label>
                      <Select
                        {...register("userType")}
                        required
                        className="text-[#888888] py-[12px]"
                      >
                        <option>Choose User Type</option>
                        {usersRole?.data?.map((userrole) => {
                          return (
                            <>
                              <option>{userrole?.role_type_name}</option>
                            </>
                          );
                        })}
                      </Select>
                      {/* {errors.user_name && (
                          <span className="text-red-500">
                            User Name is required
                          </span>
                        )} */}
                    </div>
                    {userType !== "Wholesaler" && (
                      <>
                        <div className="mb-3 ">
                          <Label className="text-[15px] text-white font-normal pb-2 block">
                            Full Name
                          </Label>
                          <input
                            type="text"
                            id="email"
                            className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                            placeholder="First Name"
                            {...register("full_name", {
                              required: true,
                            })}
                          />

                          {console.log("erros: ", errors)}
                          {errors.full_name && (
                            <span className="text-red-500">
                              Full Name is required
                            </span>
                          )}
                        </div>

                        <div className="mb-3">
                          <Label className="text-[15px] text-white font-normal pb-2 block">
                            Password
                          </Label>
                          <input
                            placeholder="Password"
                            type="password"
                            id="password"
                            className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                            {...register("password", { required: true })}
                          />
                          {errors.password && (
                            <span className="text-red-500">
                              Password is required
                            </span>
                          )}
                        </div>
                      </>
                    )}

                    {userType === "Wholesaler" && (
                      <>
                        <div className="mb-3 ">
                          <Label className="text-[15px] text-white font-normal pb-2 block">
                            User Name
                          </Label>
                          <input
                            type="text"
                            id="email"
                            className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                            placeholder="Username"
                            {...register("username", {
                              required: true,
                            })}
                          />

                          {console.log("erros: ", errors)}
                          {errors.username && (
                            <span className="text-red-500">
                              Username is required
                            </span>
                          )}
                        </div>
                        <div className="mb-3">
                          <Label className="text-[15px] text-white font-normal pb-2 block">
                            Password
                          </Label>
                          <input
                            placeholder="Password"
                            type="password"
                            id="password"
                            className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                            {...register("password", { required: true })}
                          />
                          {errors.password && (
                            <span className="text-red-500">
                              Password is required
                            </span>
                          )}
                        </div>
                        <div className="mb-3">
                          <Label className="text-[15px] text-white font-normal pb-2 block">
                            Company Name
                          </Label>
                          <input
                            placeholder="Company Name"
                            type="text"
                            id="password"
                            className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                            {...register("company_name", { required: true })}
                          />
                          {errors.company_name && (
                            <span className="text-red-500">
                              Company Name is required
                            </span>
                          )}
                        </div>

                        <div className="mb-3">
                          <Label className="text-[15px] text-white font-normal pb-2 block">
                            Email
                          </Label>
                          <input
                            placeholder="Email"
                            type="email"
                            id="password"
                            className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                            {...register("email", { required: true })}
                          />
                          {errors.email && (
                            <span className="text-red-500">
                              Email is required
                            </span>
                          )}
                        </div>
                        <div className="mb-3">
                          <Label className="text-[15px] text-white font-normal pb-2 block">
                            Phone
                          </Label>
                          <input
                            placeholder="Phone"
                            type="number"
                            id="password"
                            className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                            {...register("phone", { required: true })}
                          />
                          {errors.phone && (
                            <span className="text-red-500">
                              Phone is required
                            </span>
                          )}
                        </div>

                        <div className="mb-3">
                          <Label className="text-[15px] text-white font-normal pb-2 block">
                            Contact Person
                          </Label>
                          <input
                            placeholder="Contact Person"
                            type="text"
                            id="password"
                            className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                            {...register("contact_person", { required: true })}
                          />
                          {errors.contact_person && (
                            <span className="text-red-500">
                              Contact Person is required
                            </span>
                          )}
                        </div>
                      </>
                    )}

                    {userType !== "Wholesaler" && (
                      <>
                        <div className="mb-3">
                          <Label className="text-[15px] text-white font-normal pb-2 block">
                            Email
                          </Label>
                          <input
                            placeholder="Email"
                            type="email"
                            id="password"
                            className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                            {...register("email", { required: true })}
                          />
                          {errors.email && (
                            <span className="text-red-500">
                              Email is required
                            </span>
                          )}
                        </div>

                        <div className="mb-3">
                          <Label className="text-[15px] text-white font-normal pb-2 block">
                            Phone
                          </Label>
                          <input
                            placeholder="Phone"
                            type="number"
                            id="password"
                            className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                            {...register("phone", { required: true })}
                          />
                          {errors.phone && (
                            <span className="text-red-500">
                              Phone is required
                            </span>
                          )}
                        </div>
                      </>
                    )}

                    <button
                      type="submit"
                      className="text-white bg-[#ff1a03] font-Manrope font-medium text-[23px] mb-2 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-xl text-xl w-full px-5 py-3 text-center"
                    >
                      Sign Up
                    </button>
                  </form>

                  <div className="break_area relative pt-2 pb-2">
                    <p className="text-[#615D5D] text-sm leading-[22px] px-4 relative z-10 text-center w-[160px] mx-auto">
                      Or Continue With
                    </p>
                    {message && (
                      <div className="text-red-500 text-center">{message}</div>
                    )}
                  </div>
                  <div className="flex justify-center items-center mt-2">
                    <div className="flex justify-center items-center border border-[#747474] px-4 py-2 rounded-md">
                      <FcGoogle className="text-2xl mr-1.5" />
                      <p className="text-white text-base">Google</p>
                    </div>
                  </div>

                  <div className="text-center mt-5">
                    <p className="text-[#615D5D] text-sm">
                      Have an account?{" "}
                      <button
                        onClick={() => handleLogin()}
                        className="text-white hover:text-[#615D5D]"
                      >
                        Log In
                      </button>
                    </p>
                  </div>
                </div>
              )}
              {sendOtp && (
                <div>
                  <form onSubmit={handleSubmit1(otpSubmit)}>
                    <div className="mb-4 ">
                      <Label className="text-[15px] text-white font-normal pb-2 block">
                        Email
                      </Label>
                      <input
                        type="text"
                        id="email"
                        className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                        placeholder="Email"
                        {...register1("email", {
                          required: true,
                        })}
                      />

                      {console.log("erros: ", errors)}
                      {errors.email && (
                        <span className="text-red-500">Email is required</span>
                      )}
                    </div>
                    <div className="mb-4 ">
                      <Label className="text-[15px] text-white font-normal pb-2 block">
                        OTP
                      </Label>
                      <input
                        type="text"
                        id="email"
                        className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                        placeholder="OTP"
                        {...register1("otp", {
                          required: true,
                        })}
                      />

                      {console.log("erros: ", errors)}
                      {errors.otp && (
                        <span className="text-red-500">OTP is Required</span>
                      )}
                    </div>
                    <div className="text-red-500">
                      {" "}
                      OTP is Valid Upto 5 mins
                    </div>

                    <button
                      type="submit"
                      className="text-white bg-[#ff1a03] font-Manrope font-medium text-[23px] mb-2 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-xl text-xl w-full px-5 py-3 text-center"
                    >
                      Verify OTP
                    </button>
                    {otpMessage && (
                      <div className="text-red-500">{otpMessage}</div>
                    )}
                  </form>
                </div>
              )}
            </div>
          </div>
          <div
            className="w-6/12 bg-cover hidden lg:block"
            style={{ backgroundImage: `url("${LoginImg}")` }}
          >
            &nbsp;
          </div>
        </div>
      </div>
      {/* {openModal && (
            <AfterLoginModal openModal={openModal} setOpenModal={setOpenModal} />
          )} */}
    </div>
  );
};

export default Registration;
