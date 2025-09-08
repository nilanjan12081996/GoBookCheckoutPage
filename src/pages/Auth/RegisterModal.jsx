import { FcGoogle } from "react-icons/fc";
import { Modal } from "flowbite-react";
import LoginModal from "./LoginModal";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "../../reducers/AuthSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterModal = ({
  openRegistrationModal,
  setOpenRegistrationModal,
  openLoginModal,
  setOpenLoginModal,
}) => {
  const handleLogin = () => {
    setOpenRegistrationModal(false);
    setOpenLoginModal(true);
  };
  const [error, setError] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const password = watch("password");
  const onSubmit = (data) => {
    console.log("Data", data);

    dispatch(registerUser(data)).then((res) => {
      console.log("Resp", res);
      if (res?.payload?.status_code === 201) {
        nevigate("/my-characters");
        // nevigate("/get-started");
        //dispatch(getDetails());
        //  setIsRegistered(true);
        //  setUserId(res?.payload?.user_data?.id);
      } else if (res?.payload?.response?.status === 422) {
        const errorMessage = res?.payload?.response?.data?.data
          .map((item) => item.message)
          .join(", ");

        setError(errorMessage);
      }
    });
  };
  return (
    <>
      <Modal
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
                      <form onSubmit={handleSubmit(onSubmit)}>
                        {/* <div className="mb-4">
                                  <Select required>
                                    <option>Choose User type</option>
                                    <option>User 1</option>
                                    <option>User 2</option>
                                    <option>User 3</option>
                                  </Select>
                                </div> */}
                        <div className="flex gap-4">
                          <div className="mb-4">
                            <input
                              type="text"
                              className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                              placeholder="First Name"
                              {...register("first_name", {
                                required: "true",
                              })}
                            />
                            {errors.first_name && (
                              <span className="text-red-500">
                                First Name is required
                              </span>
                            )}
                          </div>
                          <div className="mb-4">
                            <input
                              placeholder="Last Name"
                              type="text"
                              className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                              {...register("last_name", {
                                required: true,
                              })}
                            />
                            {errors.last_name && (
                              <span className="text-red-500">
                                Last Name is required
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="mb-4">
                          <input
                            type="email"
                            className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                            placeholder="Email"
                            {...register("email", { required: true })}
                          />
                          {errors.email && (
                            <span className="text-red-500">
                              Email is required
                            </span>
                          )}
                        </div>
                        <div className="mb-4">
                          <input
                            type="text"
                            className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                            placeholder="Username"
                            {...register("username", { required: true })}
                          />
                          {errors.username && (
                            <span className="text-red-500">
                              User Name is required
                            </span>
                          )}
                        </div>
                        <div className="mb-4">
                          <input
                            placeholder="Password"
                            type="password"
                            className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                            {...register("password", { required: true })}
                          />
                          {errors.password && (
                            <span className="text-red-500">
                              Password is required
                            </span>
                          )}
                        </div>
                        <div className="mb-4">
                          <input
                            placeholder="Confirm Password"
                            type="password"
                            className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                            {...register("confirm_password", {
                              required: "Confirm Password is required",
                              validate: (value) =>
                                value === password || "Password do not Match",
                            })}
                          />
                          {errors.confirm_password && (
                            <span className="text-red-500">
                              {errors.confirm_password.message}
                            </span>
                          )}
                        </div>

                        <button
                          //   onClick={handleMyCharacters}
                          //   type="button"
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
                      {error && (
                        <div className="text-center mt-5 text-red-600">
                          {error}
                        </div>
                      )}
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
      </Modal>
      {openLoginModal && (
        <LoginModal
          openLoginModal={openLoginModal}
          setOpenLoginModal={setOpenLoginModal}
        />
      )}
    </>
  );
};
export default RegisterModal;
