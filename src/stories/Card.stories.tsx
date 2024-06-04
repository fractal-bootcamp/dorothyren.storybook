import type { Meta, StoryObj } from '@storybook/react';
import Card from '../components/Card';


const meta = {
    title: "DisplayItems/Card",
    component: Card,
    parameters: {
        layout: "centered",
    },
    tags: ['autodocs'],

    argTypes: {
        backgroundColor: { control: 'color' },
    },

} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Primary',
        image: 'test.jpg',
        link: 'https://sample.com',
        description: "example of description",
    },
};

