import React from "react";
import loaderImg from "../../assets/loader.gif";
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <img src={loaderImg} alt="Loading..." />
      </div>
    </div>
  );
};

export default Loader;