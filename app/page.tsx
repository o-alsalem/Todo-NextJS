import Image from "next/image";
import styles from "./page.module.css";

// pages/index.tsx
import React from "react";


const Home: React.FC = () => {
  return (
    <div className={styles.main}>
      <h1>Välkommen till min Next.js-app</h1>
      <img src="/path/to/your/image.jpg" alt="Bildbeskrivning" />
   
    </div>
  );
};

export default Home;
