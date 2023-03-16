  import { useRouter } from 'next/router';
import { useState } from 'react'
import useNotify from './usePopup';
import axios from "axios";
import { setCookie } from "cookies-next";
import { url } from "../utils/url";
  
  export default function useLogin() {
    const router=useRouter()
    const { successMessage, errorMessage } = useNotify();
    const [userData,setUserData]=useState({})
    const handleChange = (e) => {
        e.preventDefault();
        setUserData({...userData,[e.target.name]:e.target.value.toLowerCase()})
        console.log(userData);
    }

      const handleSubmit=async ()=>{
        e.preventDefault();
    try {
      setProgress(true);
      const { data: res } = await axios.post(`${url}api/login`, data);
      if (res.success) {
        setCookie("token", res.token, { maxAge: 60 * 60 * 24 * 30 });
        localStorage.setItem("user", JSON.stringify(res.data));
        await router.push(`/dashboard`);
        successMessage(res.message);
      } else {
        errorMessage(res.message);
      }
    } catch (error) {
      errorMessage(error.message);
    }
    setProgress(false);
        
      }

return { handleChange,handleSubmit,userData}
   
  }




  