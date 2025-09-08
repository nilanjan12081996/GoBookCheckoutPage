import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox, Label, Modal } from "flowbite-react";
import RegisterModal from "./RegisterModal";
import { useDispatch } from "react-redux";
import { login } from "../../reducers/AuthSlice";
import { useState } from "react";
import { useForm } from "react-hook-form";

const LoginModal = ({
  openLoginModal,
  setOpenLoginModal,
  setOpenRegistrationModal,
  openRegistrationModal,
}) => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const [msg, setMsg] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleSignup = () => {
    console.log("openRegistrationModal", openRegistrationModal);

    setOpenLoginModal(false);
    setOpenRegistrationModal(true);
    console.log("openRegistrationModal", openRegistrationModal);
  };

  const onSubmit = (data) => {
    dispatch(login(data)).then((res) => {
      console.log("Res:", res);
      if (res?.payload?.status_code === 200) {
        setOpenLoginModal(false);
        nevigate("/my-characters");
        setMsg("");
      } else if (res?.payload?.message?.status_code === 400) {
        setMsg(res?.payload?.message?.message);
      } else if (res?.payload?.message?.status_code === 422) {
        setMsg(res?.payload?.message?.data?.[0]?.message);
      }
    });
  };
  return (
    <>
      <Modal
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
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-6">
                          <input
                            type="text"
                            className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                            placeholder="Username"
                            {...register("username", { required: true })}
                          />
                          {errors?.username && (
                            <span className="text-red-500">
                              User Name is required
                            </span>
                          )}
                        </div>
                        <div className="mb-6">
                          <input
                            placeholder="Password"
                            type="password"
                            id="password"
                            className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                            {...register("password", { required: true })}
                          />
                          {errors?.password && (
                            <span className="text-red-500">
                              Password is required
                            </span>
                          )}
                        </div>

                        <button
                          //   type="button"
                          //   onClick={() => handleLoginClose()}
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
                      {msg && (
                        <div className="text-center mt-5 text-red-600">
                          {msg}
                        </div>
                      )}
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
                  <img src={LoginImg} alt="LoginImg" />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {openRegistrationModal && (
        <RegisterModal
          openRegistrationModal={openRegistrationModal}
          setOpenRegistrationModal={setOpenRegistrationModal}
        />
      )}
    </>
  );
};
export default LoginModal;
