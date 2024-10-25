import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currency = "$";
  const calculateAge = (dob) => {
    const birthdate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();
    return age;
  };
  const months = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split("-");
    return (
      dateArray[0] + " " + months[parseInt(dateArray[1])] + " " + dateArray[2]
    );
  };

  const value = {
    calculateAge,
    slotDateFormat,
    currency,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
