import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  /** Style props */
  propMarginLeft?: CSSProperties["marginLeft"];
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ propMarginLeft }) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  return (
    <div className={styles.divhcodeBlogSeparatorParent} style={frameDiv1Style}>
      <div className={styles.divhcodeBlogSeparator} />
      <div className={styles.link}>
        <div className={styles.readMore}>Read More</div>
      </div>
    </div>
  );
};

export default FrameComponent1;
