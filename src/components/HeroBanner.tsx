import { useEffect, useRef, useState } from "react";
import myImg from "../assets/myimg.jpeg";
import styles from "../styles/HeroBanner.module.css";
import { HoverGradientButton } from "./global/HoverGradientButton/hoverGradientButton";
import { StackOverflow } from "./MainHero/StackOverflow";

export const HeroBanner = () => {
  const bannerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
        // threshold: 0.1,
      }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = () => {
    const element = document.getElementById("tool-tech");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      element.focus(); // Optional: Set focus for accessibility
    }
  };

  const url =
    "https://drive.google.com/file/d/1zbs9BucuaU0Xxknizrs02oqo83SFQgUg/view?usp=sharing";

  return (
    <div className={styles.topMain}>
      <div ref={bannerRef} className={styles.mainBann}>
        <section
          className={`${styles.heroBanner} ${isVisible ? styles.slideIn : ""}`}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 0.5,
            }}
          >
            <span className={`jersey15Font ${styles.introText}`}>React</span>
            <span className={`jersey15Font ${styles.introText}`}>
              React Native
            </span>
            <span className={`jersey15Font ${styles.introText}`}>
              Arsenal ❤️
            </span>
            <span className={styles.basicInfoText}>
              Hey there! Gaurav roy here, ive worked on multiple startups,
              product based companies as both web developer and mobile app
              developer
            </span>
            <section className={styles.buttonRow}>
              <div className={styles.buttonWraps}>
                <HoverGradientButton
                  onClick={() => {
                    scrollToSection();
                  }}
                  text="My tech stack"
                />
              </div>
              <div className={styles.buttonWraps}>
                <HoverGradientButton
                  onClick={() => {
                    window.open(url, "_blank");
                  }}
                  text="My resume"
                />
              </div>
            </section>
          </div>
        </section>
        <img
          src={myImg}
          className={`${styles.logo} ${isVisible ? styles.slideIn : ""}`}
          alt="Vite logo"
        />
      </div>
      <StackOverflow />
    </div>
  );
};
