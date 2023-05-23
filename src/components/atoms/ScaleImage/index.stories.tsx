import { Meta, StoryFn } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import ScaleImage from './index'
import { theme } from 'themes'

const meta: Meta<typeof ScaleImage> = {
  title: 'Atoms/ScaleImage',
  component: ScaleImage,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: { type: 'text' },
      description: '画像URL',
      table: {
        type: { summary: 'string' },
      },
    },
    width: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '画像の横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '画像の縦幅',
      defaultValue: 320,
      table: {
        type: { summary: 'number' },
      },
    },
    containerWidth: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    containerHeight: {
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

const Template: StoryFn<typeof ScaleImage> = (args) => (
  <ThemeProvider theme={theme}>
    <ScaleImage {...args} />
  </ThemeProvider>
)

export const Normal = Template.bind({})
Normal.args = { src: '/images/sample/1.jpg' }
