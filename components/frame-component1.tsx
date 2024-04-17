import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

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
    <div
      className="ml-[-1px] w-[123px] flex flex-col items-start justify-start gap-[32.2px] text-left text-2xs text-black font-montserrat"
      style={frameDiv1Style}
    >
      <div className="self-stretch h-[3px] relative bg-black" />
      <div className="w-[111.9px] box-border flex flex-row items-start justify-start pt-px pb-0.5 pr-3 pl-4 border-[2px] border-solid border-black">
        <div className="relative tracking-[1px] leading-[23px] uppercase font-semibold inline-block min-w-[80.3px]">
          Read More
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
