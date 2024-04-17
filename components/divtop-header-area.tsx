import type { NextPage } from "next";

const DivtopHeaderArea: NextPage = () => {
  return (
    <div className="self-stretch bg-whitesmoke flex flex-row items-start justify-between pt-[17px] pb-[18px] pr-[118px] pl-[119px] shrink-0 [debug_commit:1de1738] text-left text-smi text-black font-montserrat border-b-[1px] border-solid border-gainsboro mq450:pl-5 mq450:pr-5 mq450:box-border mq1125:pl-[59px] mq1125:pr-[59px] mq1125:box-border">
      <div className="overflow-hidden flex flex-row items-start justify-start pt-[3.5px] pb-[4.5px] pr-4 pl-0">
        <div className="flex flex-row items-start justify-start gap-[5px] z-[1]">
          <img
            className="h-4 w-[18px] relative object-cover min-h-[16px]"
            loading="lazy"
            alt=""
            src="/list--item--link@2x.png"
          />
          <img
            className="h-4 w-[18px] relative object-cover min-h-[16px]"
            loading="lazy"
            alt=""
            src="/list--item--link-1@2x.png"
          />
          <img
            className="h-4 w-[18px] relative object-cover min-h-[16px]"
            loading="lazy"
            alt=""
            src="/list--item--link-2@2x.png"
          />
          <img
            className="h-4 w-[18px] relative object-cover min-h-[16px]"
            loading="lazy"
            alt=""
            src="/list--item--link-3@2x.png"
          />
          <img
            className="h-4 w-[18px] relative object-cover min-h-[16px]"
            loading="lazy"
            alt=""
            src="/list--item--link-4@2x.png"
          />
          <img
            className="h-4 w-[18px] relative object-cover min-h-[16px]"
            loading="lazy"
            alt=""
            src="/list--item--link-5@2x.png"
          />
          <img
            className="h-4 w-[18px] relative object-cover min-h-[16px]"
            loading="lazy"
            alt=""
            src="/list--item--link-6@2x.png"
          />
          <img
            className="h-4 w-[18px] relative object-cover min-h-[16px]"
            loading="lazy"
            alt=""
            src="/list--item--link-7@2x.png"
          />
        </div>
      </div>
      <div className="w-[297px] flex flex-row items-start justify-start gap-[24px] mq800:hidden">
        <b className="relative tracking-[0.22px] leading-[23px] uppercase inline-block min-w-[44px]">
          Home
        </b>
        <b className="flex-1 relative tracking-[0.22px] leading-[23px] uppercase inline-block min-w-[73px] whitespace-nowrap">
          About Us
        </b>
        <b className="relative tracking-[0.22px] leading-[23px] uppercase inline-block min-w-[40px]">
          Blog
        </b>
        <b className="flex-1 relative tracking-[0.22px] leading-[23px] uppercase inline-block min-w-[68px]">
          Contact
        </b>
      </div>
    </div>
  );
};

export default DivtopHeaderArea;
