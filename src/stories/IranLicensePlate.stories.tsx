import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import IranLicensePlate from "../IranLicensePlate";

export default {
  title: "Majid Alinejad/Iran License Plate/Regular",
  component: IranLicensePlate,
  args: {
    serial: "IR17-141b31",
    isLoading: false,
    isUnknown: false,
    style: { width: "400px", fontSize: "1.3rem" },
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          width: "100%",
          height: "100%",
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof IranLicensePlate>;

export const Primary: ComponentStory<typeof IranLicensePlate> = (args) => (
  <IranLicensePlate {...args} />
);

export const Loading = Primary.bind({});
Loading.args = {
  serial: "",
  isLoading: true,
};

export const Unknown = Primary.bind({});
Unknown.args = {
  serial: "",
  isUnknown: true,
};

export const RelativeResponsive = Primary.bind({});
RelativeResponsive.args = {
  serial: "IR17-141b31",
  style: { fontSize: "5vw" },
};

export const Taxi = Primary.bind({});
Taxi.args = {
  serial: "IR17-141T31",
};

export const Governmental = Primary.bind({});
Governmental.args = {
  serial: "IR17-141f31",
};

export const Personal = Primary.bind({});
Personal.args = {
  serial: "IR17-141h31",
};

export const Handicapped = Primary.bind({});
Handicapped.args = {
  serial: "IR17-141H31",
};

export const Public = Primary.bind({});
Public.args = {
  serial: "IR17-141A31",
};

export const Police = Primary.bind({});
Police.args = {
  serial: "IR17-141P31",
};

export const Sepah = Primary.bind({});
Sepah.args = {
  serial: "IR17-141C31",
};

export const Military = Primary.bind({});
Military.args = {
  serial: "IR17-141M31",
};

export const Ministry = Primary.bind({});
Ministry.args = {
  serial: "IR17-141Z31",
};

export const Headquarter = Primary.bind({});
Headquarter.args = {
  serial: "IR17-141F31",
};

export const Agriculture = Primary.bind({});
Agriculture.args = {
  serial: "IR17-141K31",
};

export const Temporary = Primary.bind({});
Temporary.args = {
  serial: "IR17-141G31-9902",
  style: { width: "400px", fontSize: "1.1rem" },
};

export const Diplomatic = Primary.bind({});
Diplomatic.args = {
  serial: "IR17-141D31",
};

export const Service = Primary.bind({});
Service.args = {
  serial: "IR17-141S31",
};
