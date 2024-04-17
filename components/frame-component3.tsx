import type { NextPage } from "next";
import styles from "./frame-component3.module.css";

const FrameComponent3: NextPage = () => {
  return (
    <section className={styles.macbookPro1623Inner}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.exploreLocalMythsAndLegendWrapper}>
            <h2 className={styles.exploreLocalMyths}>
              EXPLORE LOCAL MYTHS AND LEGEND
            </h2>
          </div>
          <div className={styles.bannerParent}>
            <img
              className={styles.bannerIcon}
              loading="lazy"
              alt=""
              src="/banner@2x.png"
            />
            <h1 className={styles.offTheBeaten}>OFF THE BEATEN PATH</h1>
          </div>
        </div>
        <div className={styles.exploreWrapper}>
          <h3 className={styles.explore}>EXPLORE</h3>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
