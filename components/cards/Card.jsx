import React from "react";
import Image from "next/image";
import styles from "./Card.module.css";

const Card = ({ title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>
        <h2>{title}</h2>
      </div>
      <div className={styles.cardUpload}>
        <Image
          src="/upload-icon.png"
          alt="Upload"
          width={100}
          height={100}
          className={styles.uploadIcon}
        />
      </div>
    </div>
  );
};

export default Card;