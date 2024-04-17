import type { NextPage } from "next";
import FrameComponent2 from "./frame-component2";

const SectionSection: NextPage = () => {
  return (
    <div className="self-stretch bg-whitesmoke box-border flex flex-col items-start justify-start pt-[30px] pb-[67px] pr-[72px] pl-[121px] gap-[64px] max-w-full text-center text-5xl text-black font-playfair-display border-t-[1px] border-solid border-gainsboro mq800:pb-[29px] mq800:box-border mq450:gap-[16px] mq450:pl-5 mq450:box-border mq1125:gap-[32px] mq1125:pt-5 mq1125:pb-11 mq1125:pr-9 mq1125:pl-[60px] mq1125:box-border">
      <div className="w-[1500px] flex flex-row items-start justify-center max-w-full">
        <div className="w-[924px] flex flex-col items-end justify-start gap-[11px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <h1 className="m-0 w-[220.7px] relative text-inherit tracking-[0.22px] leading-[48px] capitalize font-normal font-inherit flex items-center justify-center shrink-0 mq450:text-lgi mq450:leading-[38px]">
              Get lost in Paradise
            </h1>
          </div>
          <div className="self-stretch relative text-2xs tracking-[0.22px] leading-[23px] font-montserrat text-dimgray">
            <p className="m-0">
              Our island is the ideal place to lose and find yourself. Unravel
              the mysteries behind an ancient fortress in the sky, spend your
              day building sandcastles on a golden
            </p>
            <p className="m-0">
              beach or dive into the island’s wilderness. The choice is yours
              with Esna Holidays, one of the most sought-after tour operators in
              Sri Lanka.
            </p>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[54px] max-w-full text-sm text-white font-montserrat mq800:gap-[27px]">
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
