import React from "react";
import { useContext } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { useEffect } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContex";

const DoctorDashboard = () => {
  const { dToken, getDashdata, setDashData, dashData } =
    useContext(DoctorContext);
  const {currency,slotDateFormat} = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getDashdata();
    }
  }, [dToken]);
  return (
    dashData && (
      <div className="m-5">
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all duration-300 ">
            <img className="w-14" src={assets.earning_icon} alt="" />
            <div className="">
              <p className="text-xl font-semibold text-gray-600">
                { currency} {dashData.earnings}
              </p>
              <p className="text-gray-400 ">Earnings</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all duration-300 ">
            <img className="w-14" src={assets.appointments_icon} alt="" />
            <div className="">
              <p className="text-xl font-semibold text-gray-600">
                {dashData.appointments}
              </p>
              <p className="text-gray-400 ">Appointments</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all duration-300 ">
            <img className="w-14" src={assets.patients_icon} alt="" />
            <div className="">
              <p className="text-xl font-semibold text-gray-600">
                {dashData.patients}
              </p>
              <p className="text-gray-400 ">Patients</p>
            </div>
          </div>
        </div>
        <div className="bg-white ">
          <div className="flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border">
            <img src={assets.list_icon} alt="" />
            <p className="font-semibold">Latest bookings</p>
          </div>
          <div className="pt-4 border border-t-0">
            {dashData?.latestAppointments?.map((appointment, index) => (
              <div className="flex items-center px-6 gap-3 py-3 hover:bg-gray-100" key={index}>
                <img className="rounded-full w-10 bg-gray-200" src={appointment.userData.image} alt="" />
                <div className="flex-1">
                  <p className="text-gray-800 font-medium">{appointment.userData.name}</p>
                  <p className="text-gray-600">{slotDateFormat(appointment.slotDate)}</p>
                </div>
                {appointment.cancelled ? (
              <p className="text-red-400 text-xs font-medium border border-red-400 px-2 py-1 text-center rounded-full">Cancelled </p>
            ) : appointment.isCompleted ? (
              <p className="text-green-500 font-medium text-xs border border-green-500 px-2 py-1 text-center rounded-full">Completed </p>
            ) : (
              <div className="flex">
                <img
                  className="w-10 cursor-pointer hover:scale-110"
                  src={assets.cancel_icon}
                  onClick={() => cancelAppointment(appointment._id)}
                  alt=""
                />
                <img
                  className="w-10 cursor-pointer hover:scale-110"
                  src={assets.tick_icon}
                  onClick={() => completeAppointment(appointment._id)}
                  alt=""
                />
              </div>
            )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorDashboard;
