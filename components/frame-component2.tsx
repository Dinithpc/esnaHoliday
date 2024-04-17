import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

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
    <div
      className="self-stretch grid flex-row items-start justify-start gap-[54px] max-w-full grid-cols-[repeat(4,_minmax(248px,_1fr))] z-[1] text-center text-sm text-white font-montserrat mq800:gap-[27px] mq800:grid-cols-[minmax(248px,_1fr)] mq1300:justify-center mq1300:grid-cols-[repeat(2,_minmax(248px,_430px))]"
      style={frameDivStyle}
    >
      <div className="overflow-hidden flex flex-row items-start justify-start pt-[159px] px-[57px] pb-40 box-border relative max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src={linkCulture300x300jpeg}
        />
        <b
          className="w-[215px] relative tracking-[3px] leading-[24px] uppercase inline-block z-[1]"
          style={figureCultureStyle}
        >
          {figureCultureHeritage}
        </b>
      </div>
      <div className="overflow-hidden flex flex-row items-start justify-start pt-[159px] px-[47px] pb-40 box-border relative max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src={linkCulture300x300jpeg1}
        />
        <b
          className="w-[236px] relative tracking-[3px] leading-[24px] uppercase inline-block z-[1]"
          style={figureCulture1Style}
        >
          {figureCultureHeritage1}
        </b>
      </div>
      <div className="overflow-hidden flex flex-row items-start justify-center pt-[159px] pb-40 pr-5 pl-[21px] box-border relative max-w-full">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src={linkCulture300x300jpeg2}
        />
        <b
          className="w-[151px] relative tracking-[3px] leading-[24px] uppercase flex items-center justify-center z-[1]"
          style={figureCulture2Style}
        >
          {figureCultureHeritage2}
        </b>
      </div>
      <div className="overflow-hidden flex flex-row items-start justify-start pt-[159px] px-[61px] pb-40 box-border relative max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src={linkCulture300x300jpeg3}
        />
        <b
          className="w-52 relative tracking-[3px] leading-[24px] uppercase inline-block z-[1]"
          style={figureCulture3Style}
        >
          {figureCultureHeritage3}
        </b>
      </div>
    </div>
  );
};

export default FrameComponent2;
