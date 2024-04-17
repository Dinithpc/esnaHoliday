import type { NextPage } from "next";
import FrameComponent2 from "./frame-component2";
import styles from "./section-section.module.css";

const SectionSection: NextPage = () => {
  return (
    <div className={styles.sectionSection}>
      <div className={styles.sectionSectionInner}>
        <div className={styles.frameParent}>
          <div className={styles.heading2GetLostInParadiWrapper}>
            <h1 className={styles.heading2}>Get lost in Paradise</h1>
          </div>
          <div className={styles.ourIslandIsContainer}>
            <p className={styles.ourIslandIs}>
              Our island is the ideal place to lose and find yourself. Unravel
              the mysteries behind an ancient fortress in the sky, spend your
              day building sandcastles on a golden
            </p>
            <p className={styles.beachOrDive}>
              beach or dive into the island’s wilderness. The choice is yours
              with Esna Holidays, one of the most sought-after tour operators in
              Sri Lanka.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <FrameComponent2
          linkCulture300x300jpeg="/link--culture300x300jpeg@2x.png"
          figureCultureHeritage={`Culture & Heritage`}
          linkCulture300x300jpeg1="/link--culture300x300jpeg-1@2x.png"
          figureCultureHeritage1="ESCAPE TO THE WORLD"
          linkCulture300x300jpeg2="/link--culture300x300jpeg-2@2x.png"
          figureCultureHeritage2="BEACH-CATION"
          linkCulture300x300jpeg3="/link--culture300x300jpeg-3@2x.png"
          figureCultureHeritage3="ADVENTURE THRILLS"
        />
        <FrameComponent2
          linkCulture300x300jpeg="/link--culture300x300jpeg-4@2x.png"
          figureCultureHeritage="CELEBRATE LOVE"
          linkCulture300x300jpeg1="/link--culture300x300jpeg-5@2x.png"
          figureCultureHeritage1="EXCLUSIVE LUXURY"
          linkCulture300x300jpeg2="/link--culture300x300jpeg-6@2x.png"
          figureCultureHeritage2="OFF THE BEATEN PATH"
          linkCulture300x300jpeg3="/link--culture300x300jpeg-7@2x.png"
          figureCultureHeritage3="FUN FOR FAMILIES"
          propAlignSelf="unset"
          propWidth="1486px"
          propWidth1="173px"
          propWidth2="194px"
          propDisplay="flex"
          propWidth3="228px"
          propDisplay1="inline-block"
          propWidth4="187px"
        />
      </div>
    </div>
  );
};

export default SectionSection;
