import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from "./index";

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create account',
    },
    argTypes: {
    }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}


export const Disabled: StoryObj<ButtonProps> = {
    args: {
        className: "disabled:bg-gray-400",
        disabled: true
    }
}