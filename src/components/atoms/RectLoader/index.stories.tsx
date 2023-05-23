import { Meta, StoryFn } from '@storybook/react'
import RectLoader from './index'

const meta: Meta<typeof RectLoader> = {
  title: 'Atoms/RectLoader',
  component: RectLoader,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '縦幅',
      defaultValue: 320,
      table: {
        type: { summary: 'number' },
      },
    },
  },
}

export default meta

const Template: StoryFn<typeof RectLoader> = (args) => <RectLoader {...args} />

export const Normal = Template.bind({})
