import { IranSvg } from "./components/IranSvg";
import disableSvg from "./assets/disable.svg";
import IranFlag from "./assets/Flag.png";
import React, { HTMLAttributes } from "react";
import { getPlaqueInfo } from "./helper";
import FreeImage from "./components/FreeImage";
import { SpinnerSvg } from "./components/Spinner";

interface LicenseNumberProp extends HTMLAttributes<HTMLDivElement> {
  serial?: string;
  isLoading?: boolean;
  isUnknown?: boolean;
}
export const IranLicensePlate = ({
  serial,
  className,
  style,
  isLoading,
  isUnknown,
}: LicenseNumberProp) => {
  const iranRegularRGX =
    /(?<region>\w{2})(?<CityNumber>\d{2})-(?<Section2>\d{3})(?<Letter>\w)(?<Section4>\d{2})(-(?<Expire>\d{4}))?/;

  const iranFreeRGX = /(?<region>\w*)(?<CityNumber>\d{2})-(?<Section2>\d{5})/;

  if (!serial || isUnknown || isLoading) {
    return (
      <>
        <div
          dir="rtl"
          className={
            (isLoading ? " ip-animate-pulse ip-duration-100" : "") +
            " ip-grid ip-min-w-[175px] ip-bg-red-600 ip-text-white ip-border-black ip-border-2 ip-rounded-lg ip-relative ip-overflow-hidden ip-grid-cols-12 ip-w-full ip-aspect-[18/4] ip-text-[1em] " +
            className
          }
          style={{
            fontFamily: "IranSansNumber",
            backgroundColor: "#ffffff",
            color: "#000000",
            minWidth: "175px",
            ...style,
          }}
        >
          <div className="ip-col-span-11 ip-flex ip-min-h-0">
            <div className="ip-aspect-square   ip-border-black  ip-border-l-2 ip-h-full ip-grid ip-text-[1.2em]">
              <IranSvg className="ip-w-full ip-h-full ip-aspect-[0.5/1] ip-px-2 ip-pt-0.5 " />
              <div className="ip-grid ip-aspect-[1.5/1] ip-h-fit ip-px-1">
                <p className="ip-text-[1.2em] ip-grid ip-items-center ip-leading-none ip-font-semibold  ip-text-center">
                  --
                </p>
              </div>
            </div>
            <div className=" ip-grow ip-text-[2.2em] ip-font-semibold ip-flex ip-items-center ip-justify-around">
              <p> --- </p>
              <div className="ip-flex ip-flex-col ip-h-full ip-leading-none ip-justify-center">
                <p className="ip-leading-[0.6em]">
                  {isLoading ? (
                    <SpinnerSvg width={"1.2em"} height={"1.2em"} />
                  ) : (
                    "؟"
                  )}
                </p>
              </div>
              <p> -- </p>
            </div>
          </div>
          <div className="ip-col-span-1 ip-p-0.5  ip-bg-[#003399] ip-flex ip-flex-col ip-text-[1em] ">
            <img
              src={IranFlag}
              alt="Flag"
              className="p-[0.1rem] pt-[0.2rem] "
            />
            <div
              dir="ltr"
              className="ip-w-full  ip-flex ip-flex-col ip-text-[0.43em] ip-items-start ip-mt-auto ip-text-white"
            >
              <p className="">I.R.</p>
              <p className="">IRAN</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (serial.match(iranRegularRGX)) {
    const matches = iranRegularRGX.exec(serial);
    const info = getPlaqueInfo(matches?.groups?.Letter);
    return (
      <>
        <div
          dir="rtl"
          className={
            "ip-grid ip-min-w-[175px] ip-bg-red-600 ip-text-white ip-border-black ip-border-2 ip-rounded-lg ip-relative ip-overflow-hidden ip-grid-cols-12 ip-w-full ip-aspect-[18/4] ip-text-[1em] " +
            className
          }
          style={{
            fontFamily: "IranSansNumber",
            backgroundColor: info.bg,
            color: info.text,
            minWidth: "175px",
            ...style,
          }}
        >
          <div className="ip-col-span-11 ip-flex ip-min-h-0">
            <div className="ip-aspect-square   ip-border-black  ip-border-l-2 ip-h-full ip-grid ip-text-[1.2em]">
              <IranSvg className="ip-w-full ip-h-full ip-aspect-[0.5/1] ip-px-2 ip-pt-0.5 " />
              <div className="ip-grid ip-aspect-[1.5/1] ip-h-fit ip-px-1">
                <p className="ip-text-[1.2em] ip-grid ip-items-center ip-leading-none ip-font-semibold  ip-text-center">
                  {matches?.groups?.CityNumber}
                </p>

                {matches?.groups?.Expire ? (
                  <p
                    style={{ borderColor: info.text }}
                    className="ip-text-[0.8em] ip-leading-none ip-border-t-2 ip-pt-1 ip-font-semibold ip-text-center"
                  >
                    {[
                      matches?.groups?.Expire.slice(0, 2),
                      matches?.groups?.Expire.slice(2),
                    ].join("/")}
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className=" ip-grow ip-text-[2.2em] ip-font-semibold ip-flex ip-items-center ip-justify-around">
              <p> {matches?.groups?.Section2}</p>
              <div className="ip-flex ip-flex-col ip-h-full ip-leading-none ip-justify-center">
                <p
                  className="ip-w-full ip-font-extralight ip-text-[0.4em]"
                  style={{
                    fontFamily: "sans-serif",
                  }}
                >
                  {info.type === "taxi" ? "TAXI" : ""}
                </p>
                {info.type === "handicapped" ? (
                  <img src={disableSvg} className="ip-w-[1em] ip-h-[1em]  " />
                ) : (
                  <p className="ip-leading-[0.6em]">{info.letter}</p>
                )}
              </div>
              <p> {matches?.groups?.Section4}</p>
            </div>
          </div>
          <div className="ip-col-span-1 ip-p-0.5  ip-bg-[#003399] ip-flex ip-flex-col ip-text-[1em] ">
            <img
              src={IranFlag}
              alt="Flag"
              className="p-[0.1rem] pt-[0.2rem] "
            />
            <div
              dir="ltr"
              className="ip-w-full  ip-flex ip-flex-col ip-text-[0.43em] ip-items-start ip-mt-auto ip-text-white"
            >
              <p className="">I.R.</p>
              <p className="">IRAN</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  //   Azad

  if (serial.match(iranFreeRGX)) {
    const matches = iranFreeRGX.exec(serial);
    const isPublic = matches?.groups?.CityNumber
      ? +matches?.groups?.CityNumber % 2 !== 0
      : true;
    return (
      <>
        <div
          dir="rtl"
          className={
            "ip-grid ip-min-w-[175px]  ip-border-black ip-border-2 ip-rounded-lg ip-relative ip-overflow-hidden ip-grid-cols-12 ip-w-full  ip-text-[1em] " +
            className
          }
          style={{
            backgroundColor: isPublic ? "#ffffff" : "#ffca0b",
            color: "#000000",
            minWidth: "175px",
            ...style,
          }}
        >
          <div className="ip-grid ip-aspect-[10/5] ip-w-full ip-col-span-9">
            <div
              className=" ip-grid ip-grid-cols-12 ip-aspect-[10/4] ip-tracking-widest "
              style={{
                fontFamily: "IranSansNumber",
              }}
            >
              <div className="ip-col-span-5   ip-border-black  ip-border-l-2 ip-h-full ip-grid ip-text-[1.2em]">
                <div className="ip-grid  ip-h-full ip-text-[1.7em]">
                  <p className="ip-text-[1.2em] ip-grid ip-items-center ip-leading-none ip-font-semibold  ip-text-center">
                    {matches?.groups?.CityNumber}
                  </p>
                </div>
              </div>
              <div className="ip-col-span-7 ip-grow ip-text-[2.5em] ip-font-semibold ip-flex ip-items-center ip-justify-around">
                <p> {matches?.groups?.Section2}</p>
              </div>
            </div>

            <div className=" ip-grid ip-grid-cols-12 ip-aspect-[11/2]  ip-border-black  ip-border-t-2">
              <div className="ip-col-span-5   ip-border-black  ip-border-l-2 ip-h-full ip-grid ip-text-[1.2em]">
                <div className="ip-grid  ip-h-full ip-text-[1.4em]">
                  <p className="ip-text-[1.2em] ip-grid ip-items-center ip-leading-none ip-font-semibold  ip-text-center">
                    {matches?.groups?.CityNumber}
                  </p>
                </div>
              </div>
              <div className="ip-col-span-7 ip-grow ip-text-[2.2em] ip-font-semibold ip-flex ip-items-center ip-justify-around">
                <p> {matches?.groups?.Section2}</p>
              </div>
            </div>
          </div>
          <div className="ip-col-span-3 ip-p-0.5  ip-bg-[#003399] ip-flex ip-flex-col ip-text-[1em] ">
            <div className="ip-flex ip-w-full ip-gap-2">
              <div
                dir="ltr"
                className="ip-w-full  ip-flex ip-flex-col ip-text-[0.43em] ip-items-start ip-mt-auto ip-text-white"
              >
                <p className="">I.R.</p>
                <p className="">IRAN</p>
              </div>
              <img
                src={IranFlag}
                alt="Flag"
                className="p-[0.1rem] pt-[0.2rem] ip-flex ip-w-1/2"
              />
            </div>
            <div className="ip-w-full  ip-h-full ip-flex ip-items-center ip-justify-center ip-p-4">
              <FreeImage region={matches?.groups?.region as any} />
            </div>
            <div
              dir="ltr"
              className="ip-w-full ip-text-center ip-text-[1em] ip-items-center ip-mt-auto ip-text-white"
            >
              <p className="ip-text-center">
                {matches?.groups?.region === "CHFZ"
                  ? "CH.F.Z"
                  : matches?.groups?.region}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <>Wrong Serial?</>;
};

export default IranLicensePlate;
