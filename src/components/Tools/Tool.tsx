import { useEffect, useRef, useState } from "react";
import styles from "../Tools/Tool.module.css";
import { TechIcons } from "./TechIcons";

export const Tool = () => {
  const bannerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  //   https://drive.google.com/file/d/1zbs9BucuaU0Xxknizrs02oqo83SFQgUg/view?usp=sharing
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("entry", entry);
          setIsVisible(true);
          observer.disconnect(); // Stops observing after first trigger
        }
      },
      {
        // root: document.querySelector("#root"),
      }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="tool-tech"
      className={`${styles.main} ${isVisible ? styles.slideIn : ""}`}
      ref={bannerRef}
    >
      <h1 className={`jersey15Font ${styles.t1}`}>Things ive worked with</h1>
      <span className={styles.t2}>
        Ive been tossed around multiple tech stack now. One thing remains common
        , to explore more into front end tech stack as of now, the whole
        umbrella, then after that probably proper backend , not just personal
        projects Backend
      </span>
      <TechIcons />
    </section>
  );
};
