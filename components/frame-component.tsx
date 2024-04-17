import type { NextPage } from "next";
import FrameComponent1 from "./frame-component1";

const FrameComponent: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-6 box-border max-w-full text-center text-5xl text-black font-playfair-display">
      <div className="w-[1486px] flex flex-col items-start justify-start gap-[64.5px] max-w-full mq800:gap-[32px] mq450:gap-[16px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-6 pl-5 box-border max-w-full">
          <div className="w-[810.3px] flex flex-col items-start justify-start gap-[11.5px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <h1 className="m-0 w-[126.3px] relative text-inherit tracking-[0.22px] leading-[48px] capitalize font-normal font-inherit flex items-center justify-center shrink-0 min-w-[126.3px] mq450:text-lgi mq450:leading-[38px]">
                Be inspired
              </h1>
            </div>
            <div className="self-stretch relative text-2xs tracking-[0.22px] leading-[23px] font-montserrat text-dimgray">
              Our insider’s guide to the island. Get a glimpse of what awaits
              you on our island, discover more about local food, history and
              iconic attractions.
            </div>
          </div>
        </div>
        <div className="self-stretch grid flex-row items-end justify-start gap-[50px] max-w-full grid-cols-[repeat(4,_minmax(253px,_1fr))] text-left text-2xs text-gray font-montserrat mq800:gap-[25px] mq800:grid-cols-[minmax(253px,_1fr)] mq1300:justify-center mq1300:grid-cols-[repeat(2,_minmax(253px,_438px))]">
          <div className="h-[448px] overflow-hidden flex flex-col items-start justify-start pt-[223px] px-0 pb-[110.9px] box-border gap-[35px] max-w-full mq800:pt-[145px] mq800:pb-[72px] mq800:box-border mq450:gap-[17px] mq450:pt-[94px] mq450:pb-[47px] mq450:box-border">
            <div className="self-stretch h-[173px] relative overflow-hidden shrink-0 hidden" />
            <img
              className="mt-[-226px] self-stretch h-[191px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/link--9781562551-ac23d8e5cb-kjpg@2x.png"
            />
            <div className="ml-[-1px] flex flex-col items-start justify-start pt-0 px-0 pb-[9.9px] gap-[28px]">
              <div className="h-2.5 relative tracking-[1px] leading-[23px] uppercase flex items-center shrink-0 min-w-[58px]">
                | Travel
              </div>
              <div className="h-[13px] relative text-smi tracking-[2px] leading-[23px] uppercase text-black flex items-center shrink-0">
                Safari in Sri Lanka
              </div>
              <div className="h-[35.1px] relative tracking-[0.22px] leading-[23px] text-dimgray flex items-center shrink-0">
                <span>
                  <p className="m-0">
                    Sri Lanka is one of the best destinations for
                  </p>
                  <p className="m-0">
                    safari in Asia. It is one of 10 countries in the...
                  </p>
                </span>
              </div>
            </div>
            <FrameComponent1 />
          </div>
          <div className="h-[441.2px] flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border gap-[27.3px] max-w-full">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/-2033@2x.png"
            />
            <div className="flex flex-row items-start justify-start py-0 px-px">
              <div className="relative tracking-[1px] leading-[10px] uppercase inline-block min-w-[58px]">
                | Travel
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-px text-smi text-black">
              <div className="relative tracking-[2px] leading-[13px] uppercase">
                Things to do in Colombo
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-px text-dimgray">
              <div className="flex flex-col items-start justify-start gap-[31.2px] mq450:gap-[16px]">
                <div className="flex flex-col items-start justify-start gap-[21.9px]">
                  <div className="h-[58.1px] relative tracking-[0.22px] leading-[23px] flex items-center shrink-0 [debug_commit:1de1738]">
                    <span>
                      <p className="m-0">
                        Colombo is a great place to start a Sri Lankan
                      </p>
                      <p className="m-0">
                        tour. It became an attractive tourist
                      </p>
                      <p className="m-0">
                        destination that attracts tourists...
                      </p>
                    </span>
                  </div>
                  <div className="w-[123px] h-[3px] relative bg-black shrink-0 [debug_commit:1de1738]" />
                </div>
                <div className="w-[111.9px] box-border flex flex-row items-start justify-start pt-px pb-0.5 pr-3 pl-4 text-black border-[2px] border-solid border-black">
                  <div className="relative tracking-[1px] leading-[23px] uppercase font-semibold inline-block min-w-[80.3px]">
                    Read More
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border max-w-full text-black">
            <div className="self-stretch h-[448px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[211px] px-0 pb-0 box-border gap-[22px] mq800:pt-[137px] mq800:box-border">
              <div className="self-stretch h-[173px] relative overflow-hidden shrink-0 hidden" />
              <img
                className="mt-[-214px] self-stretch h-[191px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/-2033-1@2x.png"
              />
              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-5 text-gray">
                <div className="relative tracking-[1px] leading-[7px] uppercase inline-block min-w-[58px]">
                  | Travel
                </div>
              </div>
              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9px] text-smi">
                <div className="relative tracking-[2px] leading-[13px] uppercase">
                  Safari in Sri Lanka
                </div>
              </div>
              <div className="h-14 relative tracking-[0.22px] leading-[23px] text-dimgray flex items-center shrink-0">
                <span>
                  <p className="m-0">
                    Sri Lanka is a tropical exotic island in the
                  </p>
                  <p className="m-0">Indian Ocean, rich in sandy beaches,</p>
                  <p className="m-0">
                    untouched nature, jungle, vibrant culture...
                  </p>
                </span>
              </div>
              <div className="w-[123px] flex flex-row items-start justify-start pt-0 px-0 pb-2.5 box-border">
                <div className="h-[3px] flex-1 relative bg-black" />
              </div>
              <div className="w-[111.9px] box-border flex flex-row items-start justify-start pt-px pb-0.5 pr-3 pl-4 border-[2px] border-solid border-black">
                <div className="relative tracking-[1px] leading-[23px] uppercase font-semibold inline-block min-w-[80.3px]">
                  Read More
                </div>
              </div>
            </div>
          </div>
          <div className="h-[448px] overflow-hidden flex flex-col items-start justify-start pt-[260px] px-0 pb-0 box-border gap-[42px] max-w-full mq800:pt-[169px] mq800:box-border mq450:gap-[21px]">
            <div className="self-stretch h-[173px] relative overflow-hidden shrink-0 hidden" />
            <div className="mt-[-263px] self-stretch h-[221px] flex flex-col items-start justify-start gap-[22px] shrink-0 [debug_commit:1de1738]">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/-2033-2@2x.png"
              />
              <div className="h-2 relative tracking-[1px] leading-[23px] uppercase flex items-center shrink-0 min-w-[58px]">
                | Travel
              </div>
            </div>
            <div className="w-[266px] flex flex-col items-start justify-start gap-[31px] shrink-0 [debug_commit:1de1738] text-smi text-black mq450:gap-[15px]">
              <div className="h-[13px] relative tracking-[2px] leading-[23px] uppercase flex items-center shrink-0">
                Safari in Sri Lanka
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[43px] text-2xs text-dimgray mq450:gap-[21px]">
                <div className="self-stretch h-[35px] relative tracking-[0.22px] leading-[23px] flex items-center shrink-0">
                  <span>
                    <p className="m-0">
                      Sri Lanka is an island nation. That also means
                    </p>
                    <p className="m-0">
                      we are surrounded by the ocean and here in
                    </p>
                    <p className="m-0">South Asia,...</p>
                  </span>
                </div>
                <FrameComponent1 propMarginLeft="unset" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
