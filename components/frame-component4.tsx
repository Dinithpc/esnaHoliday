import type { NextPage } from "next";
import styles from "./frame-component4.module.css";

const FrameComponent4: NextPage = () => {
  return (
    <header className={styles.frameWrapper}>
      <div className={styles.logoDarkDefault1Parent}>
        <img
          className={styles.logoDarkDefault1Icon}
          loading="lazy"
          alt=""
          src="/logodarkdefault-1@2x.png"
        />
        <div className={styles.navListLinkSriLankaParent}>
          <b className={styles.navList}>Sri Lanka Guide</b>
          <b className={styles.navList1}>Maldives Guide</b>
          <b className={styles.navList2}>Multi-Day Tours</b>
          <b className={styles.navList3}>Explore in a Day</b>
          <b className={styles.navList4}>Tailormade</b>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent4;
