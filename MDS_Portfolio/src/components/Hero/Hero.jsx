import React from "react";
import { getImageurl } from "../../utils";

import styles from "./Hero.module.css";

export const Hero = () => {

    const handleDownloadCV = () => {
        const cvUrl = "/MDS_Portfolio/assets/cv/Michael David Sin_CV.jpg"; 
        window.open(cvUrl, "_blank");
        const link = document.createElement("a");
        link.href = cvUrl;
        link.download = "Michael David Sin_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return ( 
    <section className = {styles.container}>
        <div className = {styles.content}>
            <h1 className = {styles.title} >Hi, I'm Michael 👋</h1>
            <p className = {styles.description} >I'm currently a Semester 6 Informatics student with 3 years of experience in Universitas Ciputra Surabaya. Reach out if you like to know more about me</p>
            <p className = {styles.description} >I've made a portfolio website using React.js that I've learned for months to deepen my coding knowledge and skills</p>
            <div className={styles.buttonContainer}>
                <a href = "mailto:michaelsin04@gmail.com" className = {styles.contactBtn}>Contact Me</a>
                <a href="#" onClick={handleDownloadCV} className={styles.contactBtn}>Download CV</a>
            </div>
        </div>

        <img src = {getImageurl("hero/heroImage.png")} alt = "Hero image of me" className = {styles.heroImg}/>
        <div className= {styles.topBlur}/>
        <div className= {styles.bottomBlur}/>
    </section>
    );
};