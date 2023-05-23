import { Meta, StoryFn } from '@storybook/react'
import ShapeImage from './index'

const meta: Meta<typeof ShapeImage> = {
  title: 'Atoms/ShapeImage',
  component: ShapeImage,
  tags: ['autodocs'],
  argTypes: {
    shape: {
      options: ['circle', 'square'],
      control: { type: 'radio' },
      defaultValue: 'square',
      description: '画像の形',
      table: {
        type: { summary: 'circle | square' },
        defaultValue: { summary: 'square' },
      },
    },
    src: {
      control: { type: 'text' },
      description: '画像URL',
      table: {
        type: { summary: 'string' },
      },
    },
    width: {
      control: { type: 'number' },
      defaultValue: 160,
      description: '横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '縦幅',
      defaultValue: 160,
      table: {
        type: { summary: 'number' },
      },
    },
  },
}

export default meta

const Template: StoryFn<typeof ShapeImage> = (args) => <ShapeImage {...args} />

export const Circle = Template.bind({})
Circle.args = {
  src: '/images/sample/1.jpg',
  shape: 'circle',
  width: 160,
  height: 160,
}

export const Square = Template.bind({})
Square.args = {
  src: '/images/sample/1.jpg',
  shape: 'square',
  width: 160,
  height: 160,
}
