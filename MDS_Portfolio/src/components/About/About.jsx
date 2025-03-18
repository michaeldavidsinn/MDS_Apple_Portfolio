import React from "react";
import { getImageurl } from "../../utils";

import styles from "./About.module.css";


export const About = () => {

    return (

        <section className = {styles.container}>

            <h2 className = {styles.title}>About</h2>
            <div className = {styles.content}>
               

                <ul className = {styles.aboutItems}>
                    <li className = {styles.aboutItem}>
                        <img src = {getImageurl("about/cursorIcon.png")} alt = "cursor Icon"/>
                        <div className = {styles.aboutItemText}>
                            <h3>Full Name</h3>
                            <p> Michael David Sin</p>
                        </div>
                    </li>

                    <li className = {styles.aboutItem}>
                        <img src = {getImageurl("about/cursorIcon.png")} alt = "cursor Icon"/>
                        <div className = {styles.aboutItemText}>
                            <h3>Born Date</h3>
                            <p>17 November 2024 (Balikpapan)</p>
                        </div>
                    </li>

                    <li className = {styles.aboutItem}>
                        <img src = {getImageurl("about/cursorIcon.png")} alt = "cursor Icon"/>
                        <div className = {styles.aboutItemText}>
                            <h3>Education</h3>
                            <p> Universitas Ciputra Surabaya</p>
                        </div>
                    </li>

                    <li className = {styles.aboutItem}>
                        <img src = {getImageurl("about/cursorIcon.png")} alt = "cursor Icon"/>
                        <div className = {styles.aboutItemText}>
                            <h3>Organization Experience</h3>
                            <p>Mentoring Department 2023-2024</p>
                        </div>
                    </li>

                    <li className = {styles.aboutItem}>
                        <img src = {getImageurl("about/serverIcon.png")} alt = "cursor Icon"/>
                        <div className = {styles.aboutItemText}>
                            <p>  I'm a fullstack & AI developer with experience in building responsive and optimized sites & developing a well-built AI, and an experience of developing fast and optimised back-end systems and APIs</p>
                        </div>
                    </li>
                 </ul>
            </div>

        </section>
    );
};