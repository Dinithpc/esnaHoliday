import type { NextPage } from "next";

const FrameComponent3: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[495px] box-border max-w-full text-left text-xl text-white font-montserrat mq800:pb-[322px] mq800:box-border">
      <div className="w-[648px] flex flex-col items-start justify-start gap-[95px] max-w-full mq800:gap-[47px] mq450:gap-[24px]">
        <div className="flex flex-col items-start justify-start gap-[30px]">
          <div className="flex flex-row items-start justify-start py-0 pr-[33px] pl-[33.5px]">
            <h2 className="m-0 h-[23px] relative text-inherit tracking-[6.22px] leading-[23px] uppercase font-bold font-inherit flex items-center z-[1] mq450:text-base mq450:leading-[18px]">
              EXPLORE LOCAL MYTHS AND LEGEND
            </h2>
          </div>
          <div className="flex flex-row items-start justify-start relative text-25xl">
            <img
              className="h-[1094px] w-[1724px] absolute !m-[0] bottom-[-612px] left-[calc(50%_-_862px)] object-cover"
              loading="lazy"
              alt=""
              src="/banner@2x.png"
            />
            <h1 className="m-0 h-[23px] relative text-inherit tracking-[6.22px] leading-[23px] uppercase font-bold font-inherit flex items-center z-[1] mq800:text-16xl mq800:leading-[18px] mq450:text-7xl mq450:leading-[14px]">
              OFF THE BEATEN PATH
            </h1>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-center text-base font-poppins">
          <h3 className="m-0 w-[68px] relative text-inherit font-semibold font-inherit inline-block min-w-[68px] z-[1]">
            EXPLORE
          </h3>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
