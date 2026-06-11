import { motion } from "framer-motion";
import PropTypes from "prop-types"; // Ditambahkan untuk validasi propTypes (Bebas error ESLint)
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageurl } from "../../utils";
import styles from "./Experience.module.css";

export const Experience = () => {
    // Varian animasi untuk efek stagger (muncul bergantian)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>EXPERIENCE & SKILLS</h2>
            
            <div className={styles.content}>
                {/* Bagian Kiri: Skills Grid */}
                <motion.div 
                    className={styles.skillsContainer}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Kelompok 1: Languages */}
                    <h3 className={styles.subTitle}>Languages</h3>
                    <div className={styles.skills} style={{ marginBottom: "2.5rem" }}>
                        {skills
                            .filter(skill => skill.category === "language")
                            .map((skill, id) => (
                                <motion.div key={id} className={styles.skillCard} variants={itemVariants}>
                                    <div className={styles.skillImageContainer}> 
                                        <img src={getImageurl(skill.imageSrc)} alt={skill.title} />
                                    </div>
                                    <p>{skill.title}</p>
                                </motion.div>
                            ))}
                    </div>

                    {/* Kelompok 2: Frameworks & Databases */}
                    <h3 className={styles.subTitle}>Frameworks & Databases</h3>
                    <div className={styles.skills}>
                        {skills
                            .filter(skill => skill.category !== "language")
                            .map((skill, id) => (
                                <motion.div key={id} className={styles.skillCard} variants={itemVariants}>
                                    <div className={styles.skillImageContainer}> 
                                        <img src={getImageurl(skill.imageSrc)} alt={skill.title} />
                                    </div>
                                    <p>{skill.title}</p>
                                </motion.div>
                            ))}
                    </div>
                </motion.div>

                {/* Bagian Kanan: Timeline History */}
                <motion.div 
                    className={styles.historyContainer}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h3 className={styles.subTitle}>Journey</h3>
                    <ul className={styles.history}>
                        {history.map((historyItem, id) => (
                            <motion.li key={id} className={styles.historyItem} variants={itemVariants}>
                                {/* Titik pada garis waktu */}
                                <div className={styles.timelineDot}></div>
                                
                                <div className={styles.historyCard}>
                                    <div className={styles.historyHeader}>
                                        <img
                                            src={getImageurl(historyItem.imageSrc)}
                                            alt={`${historyItem.organisation} Logo`}
                                            className={styles.companyLogo}
                                        />
                                        <div className={styles.historyItemDetails}>
                                            <h3>{historyItem.role}</h3>
                                            <h4>{historyItem.organisation}</h4>
                                            <p className={styles.date}>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                        </div>
                                    </div>
                                    
                                    <ul className={styles.achievements}>
                                        {historyItem.experiences.map((experience, idx) => (
                                            <li key={idx}>{experience}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

// Validasi PropTypes untuk memastikan kompilasi berjalan mulus tanpa peringatan linter
Experience.propTypes = {
    skills: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            imageSrc: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
        })
    ),
    history: PropTypes.arrayOf(
        PropTypes.shape({
            role: PropTypes.string.isRequired,
            organisation: PropTypes.string.isRequired,
            startDate: PropTypes.string.isRequired,
            endDate: PropTypes.string.isRequired,
            imageSrc: PropTypes.string.isRequired,
            experiences: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
    )
};