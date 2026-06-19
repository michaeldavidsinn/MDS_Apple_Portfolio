import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getImageurl } from "../../utils";

export const Navbar = () => {
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

    return (
        // Menggabungkan class default dengan class 'scrolled' jika halaman digulir
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <a className={styles.title} href="/">
                &lt;MDS&gt; {/* Branding logo yang lebih tech-savvy */}
            </a>
            
            <div className={styles.menu}>
                <img 
                    className={styles.menuBtn} 
                    // Perbaikan Bug Logika: Jika open tampilkan Close, jika tidak tampilkan Menu
                    src={menuOpen ? getImageurl("nav/closeIcon.png") : getImageurl("nav/menuIcon.png")}
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />

                <ul   
                    className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}