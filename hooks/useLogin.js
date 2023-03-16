import { useRouter } from "next/router";
import { useState } from "react";
import useNotify from "./usePopup";
import axios from "axios";
import { setCookie } from "cookies-next";
import { url } from "../utils/url";

export default function useLogin() {
  const router = useRouter();
  const { successMessage, errorMessage } = useNotify();
  const [userData, setUserData] = useState({});

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value.toLowerCase() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    try {
      const { data: res } = await axios.post(`${url}api/login`, userData);
    console.log('res');

      if (res.success) {
        setCookie("token", res.token, { maxAge: 60 * 60 * 24 * 30 });
        localStorage.setItem("user", JSON.stringify(res.data));
        await router.push(`/dashboard`);
        successMessage(res.msg);
      } else {
        errorMessage(res.msg);
      }
    } catch (error) {
      errorMessage(error.msg);
    }
  };

  return { handleChange, handleSubmit, userData };
}
