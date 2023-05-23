import { Meta, StoryFn } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import Input from './index'
import { theme } from 'themes'

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'プレースホルダー',
      table: {
        type: { summary: 'string' },
      },
    },
    hasBorder: {
      control: { type: 'boolean' },
      defaultValue: true,
      description: 'ボーダーフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
    hasError: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'バリデーションエラーフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
}

export default meta

const Template: StoryFn<typeof Input> = (args) => (
  <ThemeProvider theme={theme}>
    <Input {...args} />
  </ThemeProvider>
)

export const Normal = Template.bind({})

export const Error = Template.bind({})
Error.args = { hasError: true }
