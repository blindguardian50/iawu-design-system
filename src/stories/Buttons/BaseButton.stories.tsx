import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BaseButton} from "../../components";

// parameters: {
//     status: {
//         type: "beta"
//     }
// }

export default {
    title: "ReactComponentLibrary/Buttons/BaseButton",
    component: BaseButton,
} as ComponentMeta<typeof BaseButton>;

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

//Typography

export const BaseButtonFont1 = Template.bind({});
BaseButtonFont1.args = {
    children: "Base Text",
    fontCSSVar: "--font1"
}

export const BaseButtonFont2 = Template.bind({});
BaseButtonFont2.args = {
    children: "Base Text",
    fontCSSVar: "--font2"
}

export const BaseButtonFont3 = Template.bind({});
BaseButtonFont3.args = {
    children: "Base Text",
    fontCSSVar: "--font3"
}

export const BaseButtonFont4 = Template.bind({});
BaseButtonFont4.args = {
    children: "Base Text",
    fontCSSVar: "--font4"
}
