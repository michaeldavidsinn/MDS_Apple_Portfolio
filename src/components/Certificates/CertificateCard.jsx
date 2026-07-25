import React from "react";
import { motion } from "framer-motion";
import { getImageurl } from "../../utils";
import styles from "./CertificateCard.module.css";

export const CertificateCard = ({
  certificate: { title, issuer, date, description, logoSrc, pdfUrl },
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div className={styles.container} variants={cardVariants}>
      {/* Bagian Atas: Logo & Tanggal */}
      <div className={styles.headerArea}>
        <div className={styles.logoWrapper}>
          <img
            src={getImageurl(logoSrc)}
            alt={`${issuer} Logo`}
            className={styles.logo}
          />
        </div>
        <span className={styles.dateBadge}>{date}</span>
      </div>
      
      {/* Bagian Tengah: Teks Deskripsi */}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.issuer}>{issuer}</span>
        <p className={styles.description}>{description}</p>
      </div>

      {/* Bagian Bawah: Tombol Download Menggunakan Tag <a> */}
      <div className={styles.footer}>
        <a 
          href={getImageurl(pdfUrl)} /* <-- PERUBAHANNYA DI SINI */
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.downloadBtn}
          download
        >
          View & Download PDF
        </a>
      </div>
    </motion.div>
  );
};