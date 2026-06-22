import React from "react";
import { motion } from "framer-motion";
import styles from "./ClientProjects.module.css";
import clientsData from "../../data/clients.json";

export const ClientProjects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Freelance & Client Portfolios</h3>
      
      <motion.div 
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {clientsData.map((client, id) => (
          <motion.div key={id} className={styles.card} variants={cardVariants}>
            <div className={styles.cardHeader}>
              <div className={styles.folderIcon}>📁</div>
              <a href={client.link} target="_blank" rel="noopener noreferrer" className={styles.linkIcon}>
                ↗
              </a>
            </div>
            
            <h4 className={styles.clientName}>{client.name}</h4>
            <p className={styles.category}>{client.category}</p>
            
            <ul className={styles.skills}>
              {client.skills.map((skill, index) => (
                <li key={index} className={styles.skillBadge}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
