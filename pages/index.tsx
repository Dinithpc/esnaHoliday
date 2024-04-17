import type { NextPage } from "next";
import DivtopHeaderArea from "../components/divtop-header-area";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import SectionSection from "../components/section-section";
import FrameComponent from "../components/frame-component";
import styles from "./index.module.css";

const MacBookPro16: NextPage = () => {
  return (
    <div className={styles.macbookPro1623}>
      <div className={styles.bottom} />
      <section className={styles.divtopHeaderAreaParent}>
        <DivtopHeaderArea />
        <FrameComponent4 />
      </section>
      <FrameComponent3 />
      <div className={styles.macbookPro1623Inner}>
        <div className={styles.frameParent}>
          <div className={styles.sectionSectionHeading1Parent}>
            <h1 className={styles.sectionSection}>
              Sri Lanka with Esna Holidays
            </h1>
            <div className={styles.sectionSectionTheJadePParent}>
              <div className={styles.sectionSection1}>
                The jade pendant of the Indian Ocean was dubbed by Conde Nast
                Traveller in 2017, as the 12
              </div>
              <div className={styles.sectionSectionContainer}>
                <p className={styles.countryInThe}>
                  country in the world to visit. Discover Sri Lanka and its
                  tranquil charms with experts in the field;
                </p>
                <p className={styles.walkThroughAncient}>
                  walk through ancient cities, hike to the tallest peaks and
                  embark on adventures of love, nature
                </p>
                <p className={styles.andCultureEsna}>
                  and culture. Esna Holidays believes in an extraordinary
                  quality of life, where every journey should
                </p>
                <p className={styles.beAStory}>
                  be a story worth telling. Our specialist travel agents in Sri
                  Lanka are equipped to provide you with
                </p>
                <p className={styles.aTourOf}>
                  a tour of the island to suit your needs, whether you choose
                  one of our pre-designed tours or like to
                </p>
                <p className={styles.craftOneYourself}>craft one yourself.</p>
              </div>
            </div>
          </div>
          <button className={styles.sectionSectionLink}>
            <b className={styles.exploreTours}>Explore Tours</b>
          </button>
        </div>
      </div>
      <section className={styles.macbookPro1623Child}>
        <div className={styles.sectionSectionParent}>
          <SectionSection />
          <FrameComponent />
        </div>
      </section>
    </div>
  );
};

export default MacBookPro16;
