import { Meta, StoryFn } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import TextArea from './index'
import { theme } from 'themes'

const meta: Meta<typeof TextArea> = {
  title: 'Atoms/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'プレースホルダー',
      table: {
        type: { summary: 'string' },
      },
    },
    rows: {
      control: { type: 'number' },
      defaultValue: 5,
      description: '行数',
      table: {
        type: { summary: 'number' },
      },
    },
    minRows: {
      control: { type: 'number' },
      defaultValue: 5,
      description: '最小行数',
      table: {
        type: { summary: 'number' },
      },
    },
    maxRows: {
      control: { type: 'number' },
      defaultValue: 10,
      description: '最大行数',
      table: {
        type: { summary: 'number' },
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
    onChange: {
      description: 'onChangeイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
}

export default meta

const Template: StoryFn<typeof TextArea> = (args) => (
  <ThemeProvider theme={theme}>
    <TextArea {...args} />
  </ThemeProvider>
)

export const Normal = Template.bind({})

export const Error = Template.bind({})
Error.args = { hasError: true }
