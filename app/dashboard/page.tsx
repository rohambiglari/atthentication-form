"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Dashboard.module.scss";
import { motion } from "framer-motion";

export default function DashboardPage() {
  const [username, setUsername] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const userJson = localStorage.getItem("user");
    if (!userJson) {
      router.push("/auth");
    } else {
      const user = JSON.parse(userJson);
      setUsername(user.name.first);
    }
  }, []);

  return (
    <motion.div
      className={styles.container}
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      {username ? (
        <h1 className={styles.title}>
          Welcome to the Dashboard,
          <span className={styles.username}> {username}</span>
        </h1>
      ) : (
        <span className="loader"></span>
      )}
    </motion.div>
  );
}
