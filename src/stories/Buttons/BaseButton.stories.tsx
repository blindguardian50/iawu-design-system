import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BaseButton} from "../../components/Buttons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/Buttons/BaseButton",
    component: BaseButton,
} as ComponentMeta<typeof BaseButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseButton> = (args) => <BaseButton {...args} />;

export const BaseButtonBrand = Template.bind({});
BaseButtonBrand.args = {
    children: "Base Text"
}

export const BaseButtonBrandLight1 = Template.bind({});
BaseButtonBrandLight1.args = {
    children: "Base Text",
    backgroundCSSVar: "--brand-light1-color",
}

export const BaseButtonBrandLight2 = Template.bind({});
BaseButtonBrandLight2.args = {
    children: "Base Text",
    backgroundCSSVar: "--brand-light2-color",
}

export const BaseButtonBrandLight3 = Template.bind({});
BaseButtonBrandLight3.args = {
    children: "Base Text",
    backgroundCSSVar: "--brand-light3-color",
    colorCSSVar: "--dark-color",
}