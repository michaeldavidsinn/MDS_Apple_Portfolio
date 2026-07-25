import React from "react";
import { motion } from "framer-motion";
import styles from "./Certificates.module.css";
import certificates from "../../data/certificates.json";
import { CertificateCard } from "./CertificateCard.jsx";

export const Certificates = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section className={styles.container} id="certificates">
      <div className={styles.header}>
        <h2 className={styles.title}>Certifications</h2>
        <p className={styles.subtitle}>
          Official credentials validating my technical expertise and professional communication skills.
        </p>
      </div>

      <motion.div 
        className={styles.certGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {certificates.map((cert, id) => (
          <CertificateCard key={id} certificate={cert} />
        ))}
      </motion.div>
    </section>
  );
};