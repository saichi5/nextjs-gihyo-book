import { Meta, StoryFn } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import Button from './index'
import { theme } from 'themes'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
      defaultValue: 'primary',
      // docsに表示する内容を設定
      description: 'ボタンバリアント',
      table: {
        type: { summary: 'primary | secondary' },
        defaultValue: { summary: 'primary' },
      },
    },
    children: {
      control: { type: 'text' },
      defaultValue: 'Button',
      description: 'ボタンテキスト',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Disabledフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
    width: {
      control: { type: 'number' },
      description: 'ボタンの横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: 'ボタンの縦幅',
      table: {
        type: { summary: 'number' },
      },
    },
    onClick: {
      description: 'onClickイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
}

export default meta

const Template: StoryFn<typeof Button> = (args) => (
  <ThemeProvider theme={theme}>
    <Button {...args} />
  </ThemeProvider>
)

// Primaryボタン
export const Primary = Template.bind({})
Primary.args = { variant: 'primary', children: 'Primary Button' }

// Secondaryボタン
export const Secondary = Template.bind({})
Secondary.args = { variant: 'secondary', children: 'Secondary Button' }

// Disabledボタン
export const Disabled = Template.bind({})
Disabled.args = { disabled: true, children: 'Disabled Button' }
