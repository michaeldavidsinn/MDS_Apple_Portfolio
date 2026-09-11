import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getImageurl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  // 1. PERBAIKAN: Menambahkan 'detail' dan 'appIcon' ke dalam destructuring
  project: { title, badge, imageSrc, appIcon, description, skills, demo, source, detail, appStoreUrl, status },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State untuk melacak indeks gambar yang sedang dibuka di lightbox
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Keyboard navigation untuk lightbox (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    if (selectedImageIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedImageIndex(null);
      } else if (e.key === "ArrowRight") {
        if (detail?.images?.length) {
          setSelectedImageIndex((prev) => (prev + 1) % detail.images.length);
        }
      } else if (e.key === "ArrowLeft") {
        if (detail?.images?.length) {
          setSelectedImageIndex((prev) => (prev - 1 + detail.images.length) % detail.images.length);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, detail]);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const hasModalDetail = detail && typeof detail === "object" && detail.isModal;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <>
      {/* 1. KARTU PROYEK UTAMA */}
      <motion.div 
        className={styles.container} 
        variants={cardVariants}
        onMouseMove={handleMouseMove}
      >
        {appIcon ? (
          <div className={styles.appHeaderWrapper}>
            <div className={styles.appIconAmbientGlow} />
            <img
              src={getImageurl(appIcon)}
              alt={`${title} App Icon`}
              className={styles.appIcon}
            />
          </div>
        ) : imageSrc ? (
          <div className={styles.imageWrapper}>
            <img
              src={getImageurl(imageSrc)}
              alt={`Thumbnail of ${title}`}
              className={styles.image}
            />
          </div>
        ) : null}

        <div className={styles.content}>
          <div className={styles.badgesWrapper}>
            {status === 'active' && (
              <div className={styles.activeBadge}>
                <span className={styles.pulsingDot}></span> Active Project
              </div>
            )}
            {badge && <div className={styles.specialBadge}>{badge}</div>}
          </div>
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
            {hasModalDetail && (
              <button
                onClick={() => setIsModalOpen(true)}
                className={styles.demoBtn}
              >
                View Details
              </button>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className={hasModalDetail ? styles.sourceBtn : styles.demoBtn}
              >
                Live Demo ↗
              </a>
            )}
            {appStoreUrl && (
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.appStoreBtn}
              >
                🍎 App Store
              </a>
            )}
            {Array.isArray(source) ? (
              source.map((srcItem, idx) => (
                <a
                  key={idx}
                  href={srcItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sourceBtn}
                >
                  {srcItem.label}
                </a>
              ))
            ) : (
              <a
                href={source}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sourceBtn}
              >
                Source Code
              </a>
            )}
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
                  {appIcon && (
                    <img
                      src={getImageurl(appIcon)}
                      alt={`${title} App Icon`}
                      className={styles.modalAppIcon}
                    />
                  )}
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
                  {demo && (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.demoBtn}
                      style={{ marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', width: '100%' }}
                    >
                      🌐 Visit Live Website ↗
                    </a>
                  )}
                  {appStoreUrl && (
                    <a
                      href={appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.appStoreBtn}
                      style={{ marginTop: demo ? '0.8rem' : '1.5rem', width: '100%', justifyContent: 'center' }}
                    >
                      🍎 Get on App Store
                    </a>
                  )}
                </div>

                <div className={styles.modalMain}>
                  <p className={styles.modalDesc}>{detail.longDescription}</p>

                  <div className={detail.portraitLayout ? styles.imageGridPortrait : styles.imageGrid}>
                    {detail.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={getImageurl(img)}
                        alt={`${title} Preview ${idx + 1}`}
                        className={styles.gridImage}
                        onClick={() => setSelectedImageIndex(idx)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 3. LIGHTBOX UNTUK ZOOM GAMBAR DENGAN NEXT / PREV & KEYBOARD SUPPORT */}
      <AnimatePresence>
        {selectedImageIndex !== null && detail?.images?.[selectedImageIndex] && (
          <div
            className={styles.lightboxOverlay}
            onClick={() => setSelectedImageIndex(null)}
          >
            <button
              className={styles.lightboxCloseBtn}
              onClick={() => setSelectedImageIndex(null)}
              aria-label="Close Lightbox"
            >
              ×
            </button>

            {detail.images.length > 1 && (
              <>
                <button
                  className={`${styles.lightboxNavBtn} ${styles.lightboxPrev}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex((prev) => (prev - 1 + detail.images.length) % detail.images.length);
                  }}
                  aria-label="Previous Image"
                >
                  ‹
                </button>
                <button
                  className={`${styles.lightboxNavBtn} ${styles.lightboxNext}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex((prev) => (prev + 1) % detail.images.length);
                  }}
                  aria-label="Next Image"
                >
                  ›
                </button>
                <div className={styles.lightboxCounter} onClick={(e) => e.stopPropagation()}>
                  {selectedImageIndex + 1} / {detail.images.length}
                </div>
              </>
            )}

            <motion.img
              key={selectedImageIndex}
              src={getImageurl(detail.images[selectedImageIndex])}
              alt={`${title} enlarged view ${selectedImageIndex + 1}`}
              className={styles.lightboxImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </AnimatePresence>
    </>
  );
};