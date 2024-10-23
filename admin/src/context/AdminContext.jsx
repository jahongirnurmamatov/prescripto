import { createContext, useEffect, useState } from "react";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const [aToken, setAToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'');
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(()=>{
    setAToken(localStorage.getItem("aToken") || null)
  },[aToken]);

  const value = {
    aToken,
    setAToken,
    backendUrl,
  };
  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
