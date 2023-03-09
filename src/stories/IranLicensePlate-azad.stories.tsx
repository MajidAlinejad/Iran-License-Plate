import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import IranLicensePlate from "../IranLicensePlate";

export default {
  title: "Majid Alinejad/Iran License Plate/Free Cities",
  component: IranLicensePlate,
  args: {
    serial: "KISH11-78654",
    isLoading: false,
    isUnknown: false,
    style: { width: "400px", fontSize: "1.3rem" },
  },
  argTypes: {},
} as ComponentMeta<typeof IranLicensePlate>;

const Primary: ComponentStory<typeof IranLicensePlate> = (args) => (
  <IranLicensePlate {...args} />
);

export const Kish = Primary.bind({});
Kish.args = {
  serial: "KISH11-78654",
};
export const KishPublic = Primary.bind({});
KishPublic.args = {
  serial: "KISH12-78654",
};
export const maku = Primary.bind({});
maku.args = {
  serial: "MAKU51-45223",
};
export const makuPublic = Primary.bind({});
makuPublic.args = {
  serial: "MAKU52-45223",
};
export const Arvand = Primary.bind({});
Arvand.args = {
  serial: "ARVAND61-55436",
};
export const ArvandPublic = Primary.bind({});
ArvandPublic.args = {
  serial: "ARVAND62-55436",
};
export const Aras = Primary.bind({});
Aras.args = {
  serial: "ARAS71-77124",
};
export const ArasPublic = Primary.bind({});
ArasPublic.args = {
  serial: "ARAS72-77124",
};
export const Anzali = Primary.bind({});
Anzali.args = {
  serial: "ANZALI31-33425",
};
export const AnzaliPublic = Primary.bind({});
AnzaliPublic.args = {
  serial: "ANZALI32-33425",
};
export const Qeshm = Primary.bind({});
Qeshm.args = {
  serial: "QESHM61-98746",
};
export const QeshmPublic = Primary.bind({});
QeshmPublic.args = {
  serial: "QESHM62-98746",
};
export const Chahbahar = Primary.bind({});
Chahbahar.args = {
  serial: "CHFZ91-87985",
};
export const ChahbaharPublic = Primary.bind({});
ChahbaharPublic.args = {
  serial: "CHFZ92-87985",
};
