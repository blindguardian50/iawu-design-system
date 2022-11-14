import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {BaseAlert} from "../../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Alerts/BaseAlert",
  component: BaseAlert,
} as ComponentMeta<typeof BaseAlert>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseAlert> = (args) => <BaseAlert {...args}/>

export const BaseAlertBrand = Template.bind({});
BaseAlertBrand.args = {
  children: "Base Alert. This placeholder message replaces a real alert message.",
  opacity: "0.15"
}

export const BaseAlertBrandLight1 = Template.bind({});
BaseAlertBrandLight1.args = {
  children: "Base Alert. This placeholder message replaces a real alert message.",
  backgroundCSSVarRGB: "--brand-light1-color-rgb",
  // colorCSSVar: "--dark-color",
  opacity: "0.15"
}

export const BaseAlertBrandLight2 = Template.bind({});
BaseAlertBrandLight2.args = {
  children: "Base Alert. This placeholder message replaces a real alert message.",
  backgroundCSSVarRGB: "--brand-light2-color-rgb",
  // colorCSSVar: "--dark-color",
  opacity: "0.3"
}

export const BaseAlertBrandLight3 = Template.bind({});
BaseAlertBrandLight3.args = {
  children: "Base Alert. This placeholder message replaces a real alert message.",
  backgroundCSSVarRGB: "--brand-light3-color-rgb",
  // colorCSSVar: "--dark-color",
  opacity: "0.3"
}