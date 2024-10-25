import { useState } from "react";
import { createContext } from "react";
import {toast} from "react-toastify";
import axios from 'axios';

export const DoctorContext = createContext();

const DoctorContextProvider = (props)=>{
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [dToken, setDToken] = useState(localStorage.getItem('dToken') ? localStorage.getItem('dToken') : '' );
    const [appointments,setAppointements] = useState([]);

    const getAppointments = async()=>{
        try {
            const {data} = await axios.get(backendUrl + '/api/doctor/appointments',{headers:{dToken}});
            if(data.success){
                console.log(data.appointments);
                setAppointements(data.appointments.reverse());
            }else{
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
        }
    }


    const value = {
        backendUrl,
        dToken,setDToken,
        getAppointments,
        appointments,setAppointements
    }
    return (
        <DoctorContext.Provider  value={value}>
            {props.children}
        </DoctorContext.Provider>
    )
}

export default DoctorContextProvider;