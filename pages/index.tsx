import type { NextPage } from "next";
import DivtopHeaderArea from "../components/divtop-header-area";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import SectionSection from "../components/section-section";
import FrameComponent from "../components/frame-component";

const MacBookPro16: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[851px] box-border gap-[49px] leading-[normal] tracking-[normal] text-left text-[28px] text-black font-playfair-display mq450:gap-[24px]">
      <div className="self-stretch hidden" />
      <section className="self-stretch flex flex-col items-end justify-start pt-0 pb-[353.1px] px-0 box-border max-w-full mq800:pb-[230px] mq800:box-border">
        <DivtopHeaderArea />
        <FrameComponent4 />
      </section>
      <FrameComponent3 />
      <div className="w-[838.4px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="flex flex-col items-start justify-start gap-[36px] max-w-full mq800:gap-[18px]">
          <div className="flex flex-col items-start justify-start gap-[33px] max-w-full mq800:gap-[16px]">
            <h1 className="m-0 relative text-inherit tracking-[1px] leading-[45px] capitalize font-normal font-inherit inline-block max-w-full mq450:text-[22px] mq450:leading-[36px]">
              Sri Lanka with Esna Holidays
            </h1>
            <div className="flex flex-col items-start justify-start max-w-full text-2xs text-dimgray font-montserrat">
              <div className="w-[522.9px] relative tracking-[0.22px] leading-[23px] flex items-center max-w-full">
                The jade pendant of the Indian Ocean was dubbed by Conde Nast
                Traveller in 2017, as the 12
              </div>
              <div className="relative tracking-[0.22px] leading-[23px]">
                <p className="m-0">
                  country in the world to visit. Discover Sri Lanka and its
                  tranquil charms with experts in the field;
                </p>
                <p className="m-0">
                  walk through ancient cities, hike to the tallest peaks and
                  embark on adventures of love, nature
                </p>
                <p className="m-0">
                  and culture. Esna Holidays believes in an extraordinary
                  quality of life, where every journey should
                </p>
                <p className="m-0">
                  be a story worth telling. Our specialist travel agents in Sri
                  Lanka are equipped to provide you with
                </p>
                <p className="m-0">
                  a tour of the island to suit your needs, whether you choose
                  one of our pre-designed tours or like to
                </p>
                <p className="m-0">craft one yourself.</p>
              </div>
            </div>
          </div>
          <button className="cursor-pointer py-[3px] px-[15px] bg-[transparent] w-[145px] box-border flex flex-row items-center justify-center border-[2px] border-solid border-black hover:bg-darkslategray-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-darkslategray-100">
            <b className="w-[110px] relative text-2xs tracking-[1px] leading-[23px] uppercase flex font-montserrat text-black text-center items-center justify-center min-w-[110px]">
              Explore Tours
            </b>
          </button>
        </div>
      </div>
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
        <div className="flex-1 flex flex-col items-end justify-start gap-[32px] max-w-full mq450:gap-[16px]">
          <SectionSection />
          <FrameComponent />
        </div>
      </section>
    </div>
  );
};

export default MacBookPro16;
