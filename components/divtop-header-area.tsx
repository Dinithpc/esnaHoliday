import type { NextPage } from "next";
import styles from "./divtop-header-area.module.css";

const DivtopHeaderArea: NextPage = () => {
  return (
    <div className={styles.divtopHeaderArea}>
      <div className={styles.divflags}>
        <div className={styles.listItemLinkParent}>
          <img
            className={styles.listItemLink}
            loading="lazy"
            alt=""
            src="/list--item--link@2x.png"
          />
          <img
            className={styles.listItemLink1}
            loading="lazy"
            alt=""
            src="/list--item--link-1@2x.png"
          />
          <img
            className={styles.listItemLink2}
            loading="lazy"
            alt=""
            src="/list--item--link-2@2x.png"
          />
          <img
            className={styles.listItemLink3}
            loading="lazy"
            alt=""
            src="/list--item--link-3@2x.png"
          />
          <img
            className={styles.listItemLink4}
            loading="lazy"
            alt=""
            src="/list--item--link-4@2x.png"
          />
          <img
            className={styles.listItemLink5}
            loading="lazy"
            alt=""
            src="/list--item--link-5@2x.png"
          />
          <img
            className={styles.listItemLink6}
            loading="lazy"
            alt=""
            src="/list--item--link-6@2x.png"
          />
          <img
            className={styles.listItemLink7}
            loading="lazy"
            alt=""
            src="/list--item--link-7@2x.png"
          />
        </div>
      </div>
      <div className={styles.listItemLinkHomeParent}>
        <b className={styles.listItem}>Home</b>
        <b className={styles.listItem1}>About Us</b>
        <b className={styles.listItem2}>Blog</b>
        <b className={styles.listItem3}>Contact</b>
      </div>
    </div>
  );
};

export default DivtopHeaderArea;
