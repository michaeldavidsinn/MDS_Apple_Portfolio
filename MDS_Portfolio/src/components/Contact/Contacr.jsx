import React from 'react';
import { getImageurl } from '../../utils';

import styles from "./Contact.module.css";

export const Contact = () => {

    return (
        <footer id = "contact" className = {styles.container}>
            <div className = {styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className = {styles.links}>
                <liv className = {styles.link}>
                    <img src = {getImageurl("contact/emailIcon.png")} alt = "Email icon" />
                    <a href = "mailto:michaelsin04@gmail.com">michaelsin04@gmail.com</a>
                </liv>
                <liv className = {styles.link}>
                    <img src = {getImageurl("contact/githubIcon.png")} alt = "Github icon" />
                    <a href = "https://www.github.com/michaeldavidsinn">michaeldavidsinn</a>
                </liv>
                {/* <liv>
                    <img src = {getImageurl("contact/emailIcon.png")} alt = "Email icon" />
                    <a href = "mailto:michaelsin04@gmail.com">michaelsin04@gmail.com</a>
                </liv>
                <liv>
                    <img src = {getImageurl("contact/emailIcon.png")} alt = "Email icon" />
                    <a href = "mailto:michaelsin04@gmail.com">michaelsin04@gmail.com</a>
                </liv> */}
            </ul>
        </footer>
    );
}