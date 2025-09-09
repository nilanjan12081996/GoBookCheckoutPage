import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { createBooking } from "../../reducers/AuthSlice";


const PaymentRedirect = () => {
const{loading}=useSelector((state)=>state?.auth)
  const dispatch = useDispatch();
  const location = useLocation();

  // Extract query params from location.search
  const searchParams = new URLSearchParams(location.search);
  const secrateKey = searchParams.get("cSecrateKey");
  const serviceId=searchParams.get("serviceId")
  const slot=searchParams.get("slot")
  const date=searchParams.get("date")
  const number=searchParams.get("number")
  const transactionId=searchParams.get("transactionId")


  const [status, setStatus] = useState(false);

  const to24Hour = (time12h) => {
  let [time, modifier] = time12h.trim().split(" ");
  let [hours, minutes] = time.split(":");

  hours = parseInt(hours, 10);

  if (modifier.toUpperCase() === "PM" && hours !== 12) {
    hours += 12;
  }
  if (modifier.toUpperCase() === "AM" && hours === 12) {
    hours = 0;
  }

  return `${hours.toString().padStart(2, "0")}:${minutes}`;
};


  useEffect(() => {
    if (serviceId && slot && secrateKey &&date&& number) {
         const [start, end] = slot.split("-").map((t) => t.trim());

    const start_time = to24Hour(start);
    const end_time = to24Hour(end);
      dispatch(
        createBooking({
        transaction_id:transactionId,
        service_id:serviceId,
        date:date,
        number:number,
        start_time:start_time,
        end_time:end_time
        })
      ).then((res) => {
        console.log("paymentres", res);
        if (res?.payload?.status_code === 201) {
          setStatus("success");
        } else {
          setStatus("fail");
        }
      });
    }
  }, [ secrateKey,serviceId,slot, secrateKey,date,number,dispatch]);

  return (
    <>
      {loading ? (
        <h1 className="text-center text-red-600">
          Please do not refresh this page
        </h1>
      ) : (
        <>
          {status === "success" ? (
            <div className="bg-gray-100 h-screen">
              <div className="bg-white p-6 md:mx-auto">
                <svg
                  viewBox="0 0 24 24"
                  className="text-green-600 w-16 h-16 mx-auto my-6"
                >
                  <path
                    fill="currentColor"
                    d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                  ></path>
                </svg>
                <div className="text-center">
                  <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                    Payment Done!
                  </h3>
                  <p className="text-gray-600 my-2">
                    Thank you for completing your secure online payment.
                  </p>
                  <p> Have a great day! </p>
                  {/* <div className="py-10 text-center">
                    <Link
                      to="/dashboard"
                      className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
                    >
                      GO BACK
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-100 h-screen">
              <div className="bg-white p-6 md:mx-auto">
                <div className="text-center">
                  <h3 className="md:text-2xl text-base text-red-700 font-semibold text-center">
                    Payment Failed!
                  </h3>
                  <p className="text-gray-600 my-2">Try Again Later</p>
                  <p> Have a great day! </p>
                  {/* <div className="py-10 text-center">
                    <Link
                      to="/plans"
                      className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
                    >
                      GO BACK
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default PaymentRedirect;
