import React from "react";
import { useContext } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { useEffect } from "react";
import { AppContext } from "../../context/AppContex";
import { assets } from "../../assets/assets";

const DoctorAppointment = () => {
  const { appointments, dToken, getAppointments } = useContext(DoctorContext);
  const { calculateAge, currency } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getAppointments();
    }
  }, [dToken]);
  return (
    <div className="w-full max-w-6xl m-5">
      <p className="mb-3 text-lg font-medium">All Appointments</p>
      <div className="bg-white border rounded text-sm max-h-[80vh] overflow-y-scroll min-h-[50vh]">
        <div className="max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-3 px-6 border-b">
          <p>#</p>
          <p>Patient</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Action</p>
        </div>
        {appointments.map((appointment, index) => (
          <div
            key={index}
            className="flex flex-wrap justify-between hover:bg-gray-50 max-sm:gap-5 max-sm:text-base md:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 items-center text-gray-500 py-3 px-6 border-b"
          >
            <p className="max-sm:hidden">{index + 1}</p>
            <div className="flex items-center gap-2">
              <img className="w-8 rounded-full max-sm:hidden" src={appointment.userData.image} alt="" />
              <p className=" line-clam">{appointment.userData.name}</p>
            </div>
            <div className="">
              <p className="text-xs inline border border-primary px-2 rounded-full">{appointment.payment ? "Online" : "CASH"}</p>
            </div>
            <p className="max-sm:hidden">
              {appointment.userData.dob !== "Not selected"
                ? calculateAge(appointment.userData.dob)
                : "NG"}
            </p>
            <p> 
              {appointment.slotDate},{appointment.appointmentTime}
            </p>
            <p>
              {currency} {appointment.amount}
            </p>
            <div className="flex">
              <img className="w-10 cursor-pointer hover:scale-110" src={assets.cancel_icon} alt="" />
              <img className="w-10 cursor-pointer hover:scale-110" src={assets.tick_icon} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorAppointment;
