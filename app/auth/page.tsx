"use client";
import { useEffect, useState } from "react";
import styles from "./Auth.module.scss";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/loginForm/loginform";
import axios from "axios";

export default function AuthPage() {
  const [userData, setUserData] = useState("");
  const [phone, setPhone] = useState("");
  const [loadingAuthentication, setLoadingAuthentication] = useState(false);
  const [error, setError] = useState({
    errorInput: "",
    logIn: "",
  });
  const router = useRouter();

  const handleLogin = () => {
    const phoneRegex = /^(\+98|0)?9\d{9}$/;
    if (!phoneRegex.test(phone)) {
      setError((prev) => ({
        ...prev,
        errorInput: "Enter phone number (9*********)",
      }));
      return;
    }
    setLoadingAuthentication(true);
    axios
      .get("https://randomuser.me/api/?results=1&nat=us")
      .then((response) => {
        const user = response.data.results[0];
        setUserData(user);
        localStorage.setItem("user", JSON.stringify(user));
        router.push("/dashboard");
      })
      .catch((error) => {
        console.error("Error retrieving user information:", error);
        setError((prev) => ({
          ...prev,
          logIn: "There was a problem signing in. Please try again.",
        }));
        setLoadingAuthentication(false);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setError((prev) => ({ ...prev, errorInput: "", logIn: "" }));
    }, 6000);
  }, [error]);

  return (
    <div className={styles.container}>
      <LoginForm
        errorLogin={error.logIn}
        headTitle={"Authentication Form"}
        placeholder={"please enter your phone "}
        inputTitle="Phone"
        phone={phone}
        setPhone={setPhone}
        error={error.errorInput}
        buttonTitle={"Login"}
        handleLogin={handleLogin}
        loading={loadingAuthentication}
      />
    </div>
  );
}
