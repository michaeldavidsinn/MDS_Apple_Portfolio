
import React from "react";
import { getImageurl } from "../../utils";

import styles from "./Hero.module.css";

export const Hero = () => {

    return ( 
    
    <section className = {styles.container}>

        <div className = {styles.content}>

            <h1 className = {styles.title} >Hi, Im Michael</h1>
            <p className = {styles.description} >I'm currently a Semester 4 Informatics student with 2 years of experience in Universitas Ciputra Surabaya. Reach out if you like to know more about me</p>
            <p className = {styles.description} >I've made a portofolio website using React Js that i've learned for months that helps to deepen my coding knowledges and skills</p>
            <a href = "mailto:myemail@email.com" className = {styles.contactBtn}>Contact Me</a>
        </div>

        <img src = {getImageurl("hero/heroImage.png")} alt = "Hero image of me" className = {styles.heroImg}/>
        <div className= {styles.topBlur}/>
        <div className= {styles.bottomBlur}/>
        
    </section>
    );
};