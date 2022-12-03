import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {BaseHeading} from "../../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/Headings/BaseHeading",
    component: BaseHeading,
} as ComponentMeta<typeof BaseHeading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseHeading> = (args) => <BaseHeading {...args}/>

export const BaseHeadingBrand = Template.bind({});
BaseHeadingBrand.args = {
    fontCSSVar: "--font1",
    children: "Base Heading",
    margin: "0.5rem 1.5rem"
}

export const BaseHeadingBrandLight1 = Template.bind({});
BaseHeadingBrandLight1.args = {
    fontCSSVar: "--font1",
    colorCSSVar: "--brand-light1-color",
    children: "Base Heading"
}

export const BaseHeadingBrandLight2 = Template.bind({});
BaseHeadingBrandLight2.args = {
    fontCSSVar: "--font1",
    colorCSSVar: "--brand-light2-color",
    children: "Base Heading"
}

export const BaseHeadingBrandLight3 = Template.bind({});
BaseHeadingBrandLight3.args = {
    fontCSSVar: "--font1",
    colorCSSVar: "--brand-light3-color",
    children: "Base Heading"
}

//Typography

export const BaseHeadingFont1 = Template.bind({});
BaseHeadingFont1.args = {
    fontCSSVar: "--font1",
    children: "Base Heading"
}

export const BaseHeadingFont2 = Template.bind({});
BaseHeadingFont2.args = {
    fontCSSVar: "--font2",
    headingType: "h2",
    children: "Base Heading"
}

export const BaseHeadingFont3 = Template.bind({});
BaseHeadingFont3.args = {
    fontCSSVar: "--font3",
    headingType: "h3",
    children: "Base Heading"
}

export const BaseHeadingFont4 = Template.bind({});
BaseHeadingFont4.args = {
    fontCSSVar: "--font4",
    headingType: "h4",
    children: "Base Heading"
}
