import { DetailedHTMLProps, HTMLAttributes, ImgHTMLAttributes } from "react";

import anzali from "../assets/images/anzali.svg";
import maku from "../assets/images/maku.svg";
import aras from "../assets/images/aras.svg";
import arvand from "../assets/images/arvand.svg";
import cHfz from "../assets/images/chfz.svg";
import kish from "../assets/images/kish.svg";
import qeshm from "../assets/images/qeshm.svg";

export const AnzaliSVG = (
  props: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) => {
  return <img src={anzali} alt="" {...props} />;
};

export const MakuSVG = (
  props: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) => {
  return <img src={maku} alt="" {...props} />;
};

export const ArasSVG = (
  props: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) => {
  return <img src={aras} alt="" {...props} />;
};

export const ArvandSVG = (
  props: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) => {
  return <img src={arvand} alt="" {...props} />;
};

export const CHfzSVG = (
  props: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) => {
  return <img src={cHfz} alt="" {...props} />;
};

export const KishSVG = (
  props: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) => {
  return <img src={kish} alt="" {...props} />;
};

export const QeshmSVG = (
  props: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) => {
  return <img src={qeshm} alt="" {...props} />;
};
