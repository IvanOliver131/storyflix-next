/* eslint-disable react/jsx-key */
import { Meta, StoryObj } from '@storybook/react';
import { TextInput, RootProps } from "./index";
import { Envelope } from 'phosphor-react';

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon>
                <Envelope/>
            </TextInput.Icon>,
            <TextInput.Input placeholder="Type your email" type="email"/>
        ],
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
    }
} as Meta<RootProps>

export const Default: StoryObj<RootProps> = {}

export const Disabled: StoryObj<RootProps> = {
    args: {
        children: [
            <TextInput.Icon>
                <Envelope/>
            </TextInput.Icon>,
            <TextInput.Input placeholder="Type your email" type="email" disabled />
        ],
    }
}

export const WithoutIcon: StoryObj<RootProps> = {
    args: {
        children: <TextInput.Input placeholder="Type your email" type="email"/>,
    },

}