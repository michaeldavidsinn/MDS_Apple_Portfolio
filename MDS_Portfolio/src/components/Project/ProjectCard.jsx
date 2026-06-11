import React from "react";
import { motion } from "framer-motion";
import { getImageurl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, detail, source },
}) => {
  // Varian animasi untuk masing-masing kartu
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div className={styles.container} variants={cardVariants}>
      {/* Wrapper untuk gambar agar bisa diberi efek hover (zoom) */}
      <div className={styles.imageWrapper}>
        <img
          src={getImageurl(imageSrc)}
          alt={`Thumbnail of ${title}`}
          className={styles.image}
        />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        <ul className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            );
          })}
        </ul>
        
        <div className={styles.links}>
          <a href={detail} target="_blank" rel="noopener noreferrer" className={styles.demoBtn}>
            Live Demo
          </a>
          <a href={source} target="_blank" rel="noopener noreferrer" className={styles.sourceBtn}>
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};