import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getImageurl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  // 1. PERBAIKAN: Menambahkan 'detail' ke dalam destructuring
  project: { title, badge, imageSrc, description, skills, demo, source, detail },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // STATE BARU: Untuk menyimpan gambar mana yang sedang diperbesar
  const [selectedImage, setSelectedImage] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // PERBAIKAN: Menambahkan pengecekan aman (detail &&) agar tidak error jika detail kosong
  const hasModalDetail = detail && typeof detail === "object" && detail.isModal;

  return (
    <>
      {/* 1. KARTU PROYEK UTAMA */}
      <motion.div className={styles.container} variants={cardVariants}>
        <div className={styles.imageWrapper}>
          <img
            src={getImageurl(imageSrc)}
            alt={`Thumbnail of ${title}`}
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          {/* Render Badge HANYA jika properti badge ada di JSON */}
          {badge && <div className={styles.specialBadge}>{badge}</div>}
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
            {hasModalDetail ? (
              <button
                onClick={() => setIsModalOpen(true)}
                className={styles.demoBtn}
              >
                View Details
              </button>
            ) : (
              // 2. PERBAIKAN: Mengubah href={detail} menjadi href={demo}
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.demoBtn}
              >
                Live Demo
              </a>
            )}
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sourceBtn}
            >
              Source Code
            </a>
          </div>
        </div>
      </motion.div>

      {/* 2. POP-UP MODAL (DETAIL PROYEK) */}
      <AnimatePresence>
        {isModalOpen && hasModalDetail && (
          <div
            className={styles.modalOverlay}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className={styles.closeBtn}
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>

              <div className={styles.modalLayout}>
                <div className={styles.modalSidebar}>
                  <h2 className={styles.modalTitle}>{title}</h2>
                  <div className={styles.modalMeta}>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Year</span>
                      <span className={styles.metaValue}>{detail.year}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Role</span>
                      <span className={styles.metaValue}>{detail.role}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.modalMain}>
                  <p className={styles.modalDesc}>{detail.longDescription}</p>

                  <div className={styles.imageGrid}>
                    {detail.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={getImageurl(img)}
                        alt={`${title} Preview ${idx + 1}`}
                        className={styles.gridImage}
                        // AKSI BARU: Saat gambar diklik, set sebagai selectedImage
                        onClick={() => setSelectedImage(getImageurl(img))}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 3. FITUR BARU: LIGHTBOX UNTUK ZOOM GAMBAR */}
      <AnimatePresence>
        {selectedImage && (
          // Jika overlay hitam diklik, gambar akan tertutup (selectedImage kembali null)
          <div
            className={styles.lightboxOverlay}
            onClick={() => setSelectedImage(null)}
          >
            <button
              className={styles.lightboxCloseBtn}
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <motion.img
              src={selectedImage}
              alt="Enlarged view"
              className={styles.lightboxImage}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              // Mencegah gambar tertutup saat gambar itu sendiri yang diklik
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </AnimatePresence>
    </>
  );
};