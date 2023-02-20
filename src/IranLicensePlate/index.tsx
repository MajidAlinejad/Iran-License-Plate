import "./assets/font.css";
import "../styles/inputStyles.css";
import { ReactComponent as IranSvg } from "./assets/iran.svg";
import { ReactComponent as DisableSvg } from "./assets/disable.svg";
import IranFlag from "./assets/Flag.png";
import React, { HTMLAttributes } from "react";
import { getPlaqueInfo } from "./helper";
import FreeImage from "./components/FreeImage";
import { ReactComponent as SpinnerSvg } from "./assets/spinner.svg";

interface LicenseNumberProp extends HTMLAttributes<HTMLDivElement> {
  serial: string;
  isLoading?: boolean;
  isUnknown?: boolean;
}
const LicenseNumber = ({
  serial,
  className,
  style,
  isLoading,
  isUnknown,
}: LicenseNumberProp) => {
  const iranRegularRGX =
    /(?<region>\w{2})(?<CityNumber>\d{2})-(?<Section2>\d{3})(?<Letter>\w)(?<Section4>\d{2})(-(?<Expire>\d{4}))?/;

  const iranFreeRGX = /(?<region>\w*)(?<CityNumber>\d{2})-(?<Section2>\d{5})/;

  if (isUnknown || isLoading) {
    return (
      <>
        <div
          className={
            (isLoading ? " ifp-animate-pulse ifp-duration-100" : "") +
            " ifp-grid ifp-min-w-[175px] ifp-bg-red-600 ifp-text-white ifp-border-black ifp-border-2 ifp-rounded-lg ifp-relative ifp-overflow-hidden ifp-grid-cols-12 ifp-w-full ifp-aspect-[18/4] ifp-text-[1em] " +
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
          <div className="ifp-col-span-11 ifp-flex">
            <div className="ifp-aspect-square   ifp-border-black  ifp-border-l-2 ifp-h-full ifp-grid ifp-text-[1.2em]">
              <IranSvg className="ifp-w-full ifp-h-full ifp-aspect-[0.5/1] ifp-px-2 ifp-pt-0.5 " />
              <div className="ifp-grid ifp-aspect-[1.5/1] ifp-h-full ifp-px-1">
                <p className="ifp-text-[1.2em] ifp-grid ifp-items-center ifp-leading-none ifp-font-semibold  ifp-text-center">
                  --
                </p>
              </div>
            </div>
            <div className=" ifp-grow ifp-text-[2.2em] ifp-font-semibold ifp-flex ifp-items-center ifp-justify-around">
              <p> --- </p>
              <div className="ifp-flex ifp-flex-col ifp-h-full ifp-leading-none ifp-justify-center">
                <p className="ifp-leading-[0.6em]">
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
          <div className="ifp-col-span-1 ifp-p-0.5  ifp-bg-[#003399] ifp-flex ifp-flex-col ifp-text-[1em] ">
            <img
              src={IranFlag}
              alt="Flag"
              className="p-[0.1rem] pt-[0.2rem] "
            />
            <div
              dir="ltr"
              className="ifp-w-full  ifp-flex ifp-flex-col ifp-text-[0.43em] ifp-items-start ifp-mt-auto ifp-text-white"
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
          className={
            "ifp-grid ifp-min-w-[175px] ifp-bg-red-600 ifp-text-white ifp-border-black ifp-border-2 ifp-rounded-lg ifp-relative ifp-overflow-hidden ifp-grid-cols-12 ifp-w-full ifp-aspect-[18/4] ifp-text-[1em] " +
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
          <div className="ifp-col-span-11 ifp-flex">
            <div className="ifp-aspect-square   ifp-border-black  ifp-border-l-2 ifp-h-full ifp-grid ifp-text-[1.2em]">
              <IranSvg className="ifp-w-full ifp-h-full ifp-aspect-[0.5/1] ifp-px-2 ifp-pt-0.5 " />
              <div className="ifp-grid ifp-aspect-[1.5/1] ifp-h-full ifp-px-1">
                <p className="ifp-text-[1.2em] ifp-grid ifp-items-center ifp-leading-none ifp-font-semibold  ifp-text-center">
                  {matches?.groups?.CityNumber}
                </p>

                {matches?.groups?.Expire ? (
                  <p
                    style={{ borderColor: info.text }}
                    className="ifp-text-[0.8em] ifp-leading-none ifp-border-t-2 ifp-pt-1 ifp-font-semibold ifp-text-center"
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
            <div className=" ifp-grow ifp-text-[2.2em] ifp-font-semibold ifp-flex ifp-items-center ifp-justify-around">
              <p> {matches?.groups?.Section2}</p>
              <div className="ifp-flex ifp-flex-col ifp-h-full ifp-leading-none ifp-justify-center">
                <p
                  className="ifp-w-full ifp-font-extralight ifp-text-[0.4em]"
                  style={{
                    fontFamily: "sans-serif",
                  }}
                >
                  {info.type === "taxi" ? "TAXI" : ""}
                </p>
                {info.type === "handicapped" ? (
                  <DisableSvg className="ifp-w-[1em] ifp-h-[1em]  " />
                ) : (
                  <p className="ifp-leading-[0.6em]">{info.letter}</p>
                )}
              </div>
              <p> {matches?.groups?.Section4}</p>
            </div>
          </div>
          <div className="ifp-col-span-1 ifp-p-0.5  ifp-bg-[#003399] ifp-flex ifp-flex-col ifp-text-[1em] ">
            <img
              src={IranFlag}
              alt="Flag"
              className="p-[0.1rem] pt-[0.2rem] "
            />
            <div
              dir="ltr"
              className="ifp-w-full  ifp-flex ifp-flex-col ifp-text-[0.43em] ifp-items-start ifp-mt-auto ifp-text-white"
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
          className={
            "ifp-grid ifp-min-w-[175px]  ifp-border-black ifp-border-2 ifp-rounded-lg ifp-relative ifp-overflow-hidden ifp-grid-cols-12 ifp-w-full  ifp-text-[1em] " +
            className
          }
          style={{
            backgroundColor: isPublic ? "#ffffff" : "#ffca0b",
            color: "#000000",
            minWidth: "175px",
            ...style,
          }}
        >
          <div className="ifp-grid ifp-aspect-[10/5] ifp-w-full ifp-col-span-9">
            <div
              className=" ifp-grid ifp-grid-cols-12 ifp-aspect-[10/4] ifp-tracking-widest "
              style={{
                fontFamily: "IranSansNumber",
              }}
            >
              <div className="ifp-col-span-5   ifp-border-black  ifp-border-l-2 ifp-h-full ifp-grid ifp-text-[1.2em]">
                <div className="ifp-grid  ifp-h-full ifp-text-[1.7em]">
                  <p className="ifp-text-[1.2em] ifp-grid ifp-items-center ifp-leading-none ifp-font-semibold  ifp-text-center">
                    {matches?.groups?.CityNumber}
                  </p>
                </div>
              </div>
              <div className="ifp-col-span-7 ifp-grow ifp-text-[2.5em] ifp-font-semibold ifp-flex ifp-items-center ifp-justify-around">
                <p> {matches?.groups?.Section2}</p>
              </div>
            </div>

            <div className=" ifp-grid ifp-grid-cols-12 ifp-aspect-[11/2]  ifp-border-black  ifp-border-t-2">
              <div className="ifp-col-span-5   ifp-border-black  ifp-border-l-2 ifp-h-full ifp-grid ifp-text-[1.2em]">
                <div className="ifp-grid  ifp-h-full ifp-text-[1.4em]">
                  <p className="ifp-text-[1.2em] ifp-grid ifp-items-center ifp-leading-none ifp-font-semibold  ifp-text-center">
                    {matches?.groups?.CityNumber}
                  </p>
                </div>
              </div>
              <div className="ifp-col-span-7 ifp-grow ifp-text-[2.2em] ifp-font-semibold ifp-flex ifp-items-center ifp-justify-around">
                <p> {matches?.groups?.Section2}</p>
              </div>
            </div>
          </div>
          <div className="ifp-col-span-3 ifp-p-0.5  ifp-bg-[#003399] ifp-flex ifp-flex-col ifp-text-[1em] ">
            <div className="ifp-flex ifp-w-full ifp-gap-2">
              <div
                dir="ltr"
                className="ifp-w-full  ifp-flex ifp-flex-col ifp-text-[0.43em] ifp-items-start ifp-mt-auto ifp-text-white"
              >
                <p className="">I.R.</p>
                <p className="">IRAN</p>
              </div>
              <img
                src={IranFlag}
                alt="Flag"
                className="p-[0.1rem] pt-[0.2rem] ifp-flex ifp-w-1/2"
              />
            </div>
            <div className="ifp-w-full  ifp-h-full ifp-flex ifp-items-center ifp-justify-center ifp-p-4">
              <FreeImage region={matches?.groups?.region as any} />
            </div>
            <div
              dir="ltr"
              className="ifp-w-full ifp-text-center ifp-text-[1em] ifp-items-center ifp-mt-auto ifp-text-white"
            >
              <p className="ifp-text-center">
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

export default LicenseNumber;
