import { Meta, StoryFn } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import SigninForm from './index'
import { theme } from 'themes'

const meta: Meta<typeof SigninForm> = {
  title: 'Organisms/SigninForm',
  component: SigninForm,
  tags: ['autodocs'],
  argTypes: {
    onSignin: {
      description: 'サインインボタンを押した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
}

export default meta

const Template: StoryFn<typeof SigninForm> = (args) => (
  <ThemeProvider theme={theme}>
    <SigninForm {...args} />
  </ThemeProvider>
)
export const Form = Template.bind({})
