import { Meta, StoryObj } from "@storybook/react";
import { Heading, IHeadingProps } from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Heading h1",
    size: "md",
  },
} as Meta<IHeadingProps>;

export const Default: StoryObj<IHeadingProps> = {};
export const Small: StoryObj<IHeadingProps> = {
  args: {
    size: "sm",
  },
};
export const Large: StoryObj<IHeadingProps> = {
  args: {
    size: "lg",
  },
};
export const CustomComponent: StoryObj<IHeadingProps> = {
  args: {
    asChild: true,
    children: <h1>Testando</h1>,
  },
  argTypes:{
    children:{
      tabble:{
        disable:true,
      }
    },
    asChild:{
    tabble:{
      disable:true,
    }
  }
  },
};
