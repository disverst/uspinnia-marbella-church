import React from 'react';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.heading}>
        <h1 className={styles.headingOne}>УПЦ</h1>
        <p className={styles.headingTwo}>
          Парафія на честь Успіння Божої Матері в Марбеї
        </p>
        {/* <p className={styles.headingThree}>Успіння Божої Матері в Марбеї</p> */}
      </div>
    </main>
  );
}
