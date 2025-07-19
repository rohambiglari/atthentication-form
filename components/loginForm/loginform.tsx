import React from "react";
import styles from "./loginform.module.css";
import Input from "../input/input";
import Button from "../button/button";
import { motion } from "framer-motion";

type Props = {
  errorLogin: string;
  headTitle: string;
  inputTitle: string;
  phone: string;
  setPhone: (value: string) => void;
  error?: string;
  placeholder?: string;
  buttonTitle: string;
  handleLogin: () => void;
  loading: boolean;
};

export const LoginForm: React.FC<Props> = ({
  errorLogin,
  headTitle,
  inputTitle,
  phone,
  setPhone,
  error,
  placeholder,
  buttonTitle,
  handleLogin,
  loading,
}) => {
  return (
    <motion.div
      className={styles.container}
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <motion.div
        key={error ? "shake" : "no-shake"}
        animate={error ? { x: [0, -10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.6, ease: "easeInOut", type: "tween" }}
      >
        <p className={styles.headTitle}>{headTitle}</p>
        {errorLogin && <p className={styles.error}>*{errorLogin}</p>}
        <Input
          title={inputTitle}
          value={phone}
          onChange={setPhone}
          placeholder={placeholder}
          error={error}
        />
        <Button onClick={handleLogin} label={buttonTitle} loading={loading} />
      </motion.div>
    </motion.div>
  );
};

export default LoginForm;
