import React from "react";
import {
  AnzaliSVG,
  ArasSVG,
  ArvandSVG,
  CHfzSVG,
  KishSVG,
  MakuSVG,
  QeshmSVG,
} from "./images";

interface IFreeImage {
  region?: "KISH" | "QESHM" | "MAKU" | "ARVAND" | "ANZALI" | "ARAS" | "CHFZ";
}
const FreeImage = ({ region }: IFreeImage) => {
  switch (region) {
    case "ANZALI":
      return <AnzaliSVG width={"100%"} height={"100%"} />;
    case "ARAS":
      return <ArasSVG width={"100%"} height={"100%"} />;
    case "ARVAND":
      return <ArvandSVG width={"100%"} height={"100%"} />;
    case "CHFZ":
      return <CHfzSVG width={"70%"} height={"70%"} />;
    case "KISH":
      return <KishSVG width={"100%"} height={"100%"} />;
    case "MAKU":
      return <MakuSVG width={"100%"} height={"100%"} />;
    case "QESHM":
      return <QeshmSVG width={"100%"} height={"100%"} />;
    default:
      return <></>;
  }
};

export default FreeImage;
