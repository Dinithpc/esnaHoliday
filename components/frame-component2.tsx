import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  linkCulture300x300jpeg?: string;
  figureCultureHeritage?: string;
  linkCulture300x300jpeg1?: string;
  figureCultureHeritage1?: string;
  linkCulture300x300jpeg2?: string;
  figureCultureHeritage2?: string;
  linkCulture300x300jpeg3?: string;
  figureCultureHeritage3?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propWidth2?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
  propWidth3?: CSSProperties["width"];
  propDisplay1?: CSSProperties["display"];
  propWidth4?: CSSProperties["width"];
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({
  linkCulture300x300jpeg,
  figureCultureHeritage,
  linkCulture300x300jpeg1,
  figureCultureHeritage1,
  linkCulture300x300jpeg2,
  figureCultureHeritage2,
  linkCulture300x300jpeg3,
  figureCultureHeritage3,
  propAlignSelf,
  propWidth,
  propWidth1,
  propWidth2,
  propDisplay,
  propWidth3,
  propDisplay1,
  propWidth4,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const figureCultureStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const figureCulture1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
      display: propDisplay,
    };
  }, [propWidth2, propDisplay]);

  const figureCulture2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth3,
      display: propDisplay1,
    };
  }, [propWidth3, propDisplay1]);

  const figureCulture3Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth4,
    };
  }, [propWidth4]);

  return (
    <div className={styles.divtravelAdventureParent} style={frameDivStyle}>
      <div className={styles.divtravelAdventure}>
        <img
          className={styles.linkCulture300x300jpeg}
          loading="lazy"
          alt=""
          src={linkCulture300x300jpeg}
        />
        <b className={styles.figureCulture} style={figureCultureStyle}>
          {figureCultureHeritage}
        </b>
      </div>
      <div className={styles.divtravelAdventure1}>
        <img
          className={styles.linkCulture300x300jpeg1}
          loading="lazy"
          alt=""
          src={linkCulture300x300jpeg1}
        />
        <b className={styles.figureCulture1} style={figureCulture1Style}>
          {figureCultureHeritage1}
        </b>
      </div>
      <div className={styles.divtravelAdventure2}>
        <img
          className={styles.linkCulture300x300jpeg2}
          loading="lazy"
          alt=""
          src={linkCulture300x300jpeg2}
        />
        <b className={styles.figureCulture2} style={figureCulture2Style}>
          {figureCultureHeritage2}
        </b>
      </div>
      <div className={styles.divtravelAdventure3}>
        <img
          className={styles.linkCulture300x300jpeg3}
          loading="lazy"
          alt=""
          src={linkCulture300x300jpeg3}
        />
        <b className={styles.figureCulture3} style={figureCulture3Style}>
          {figureCultureHeritage3}
        </b>
      </div>
    </div>
  );
};

export default FrameComponent2;
