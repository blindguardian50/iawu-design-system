import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProgressBarCircle from "../ProgressBarCircle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/ProgressBarCircle",
    component: ProgressBarCircle,
} as ComponentMeta<typeof ProgressBarCircle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProgressBarCircle> = (args) => <ProgressBarCircle {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
    label: "Hello world!",
};

export const ClickMe = Template.bind({});
ClickMe.args = {
    label: "Click me!",
};
