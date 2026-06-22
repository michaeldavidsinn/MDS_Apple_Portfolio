import React from "react";
import styles from "./ProjectArchive.module.css";
import archiveData from "../../data/archive.json";

export const ProjectArchive = () => {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Project Archive</h3>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Year</th>
              <th>Project Name</th>
              <th>Category</th>
              <th>Technologies</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {archiveData.map((item, id) => (
              <tr key={id}>
                <td>{item.year}</td>
                <td className={styles.projectName}>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.tech}</td>
                <td>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    Source
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};