import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getImageurl } from "../../utils";

export const Navbar = ({ onOpenCommandPalette }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Efek untuk mendeteksi scroll layar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Kunci scroll body saat drawer mobile sedang terbuka
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [menuOpen]);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <a className={styles.title} href="/">
                &lt;MDS&gt;
            </a>
            
            <div className={styles.menu}>
                {/* Backdrop overlay saat drawer mobile aktif */}
                <div 
                    className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`} 
                    onClick={() => setMenuOpen(false)}
                    aria-hidden="true"
                />

                {/* Drawer navigasi (horizontal di desktop, slide-in sheet di mobile) */}
                <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}>
                        {/* Header khusus drawer mobile */}
                        <div className={styles.drawerHeader}>
                            <span className={styles.drawerBrand}>&lt;MDS&gt;</span>
                            <button 
                                className={styles.drawerCloseBtn}
                                onClick={() => setMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                ×
                            </button>
                        </div>

                        {/* Link Navigasi Utama */}
                        <ul className={styles.menuItems} onClick={() => setMenuOpen(false)}>
                            <li>
                                <a href="#about">
                                    <span>About</span>
                                    <span className={styles.chevron}>›</span>
                                </a>
                            </li>
                            <li>
                                <a href="#experience">
                                    <span>Experience</span>
                                    <span className={styles.chevron}>›</span>
                                </a>
                            </li>
                            <li>
                                <a href="#projects">
                                    <span>Projects</span>
                                    <span className={styles.chevron}>›</span>
                                </a>
                            </li>
                            <li>
                                <a href="#certificates">
                                    <span>Certifications</span>
                                    <span className={styles.chevron}>›</span>
                                </a>
                            </li>
                            <li>
                                <a href="#contact">
                                    <span>Contact</span>
                                    <span className={styles.chevron}>›</span>
                                </a>
                            </li>
                        </ul>

                        {/* Footer khusus drawer mobile: Quick Actions & Socials */}
                        <div className={styles.drawerFooter}>
                            <button 
                                className={styles.drawerSearchBtn} 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setMenuOpen(false);
                                    onOpenCommandPalette?.();
                                }}
                                title="Command Palette (Cmd+K)"
                                aria-label="Open Command Palette"
                            >
                                <span className={styles.searchBtnText}>
                                    <span>Search</span>
                                </span>
                                <kbd className={styles.cmdKbd}>⌘K</kbd>
                            </button>

                            <a 
                                href={getImageurl("cv/Michael DS_CV 2026.pdf")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.drawerResumeBtn}
                                onClick={() => setMenuOpen(false)}
                            >
                                View Resume ↗
                            </a>

                            <div className={styles.drawerSocials}>
                                <a 
                                    href="https://www.github.com/michaeldavidsinn" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className={styles.socialIcon}
                                    aria-label="GitHub"
                                >
                                    <img src={getImageurl("contact/githubIcon.png")} alt="GitHub" />
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/michaeldavidsinn" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className={styles.socialIcon}
                                    aria-label="LinkedIn"
                                >
                                    <img src={getImageurl("contact/linkedinIcon.svg.png")} alt="LinkedIn" />
                                </a>
                                <a 
                                    href="mailto:michaelsin04@gmail.com" 
                                    className={styles.socialIcon}
                                    aria-label="Email"
                                >
                                    <img src={getImageurl("contact/emailIcon.png")} alt="Email" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Tombol Search Command Palette Khusus Desktop */}
                    <button 
                        className={styles.desktopCmdBtn} 
                        onClick={(e) => {
                            e.stopPropagation();
                            onOpenCommandPalette?.();
                        }}
                        title="Command Palette (Cmd+K)"
                        aria-label="Open Command Palette"
                    >
                        <span>Search</span>
                        <kbd className={styles.cmdKbd}>⌘K</kbd>
                    </button>

                    {/* Hamburger Button untuk Mobile */}
                    <button
                        className={styles.menuToggleBtn}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                        <img 
                            className={styles.menuBtn} 
                            src={menuOpen ? getImageurl("nav/closeIcon.png") : getImageurl("nav/menuIcon.png")}
                            alt="menu-button"
                        />
                    </button>
                </div>
            </nav>
    );
};