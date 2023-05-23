import { Meta, StoryFn } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import ProductForm from './index'
import { theme } from 'themes'

const meta: Meta<typeof ProductForm> = {
  title: 'Organisms/ProductForm',
  component: ProductForm,
  tags: ['autodocs'],
  argTypes: {
    onProductSave: {
      description: '出品ボタンを押した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
}

export default meta

const Template: StoryFn<typeof ProductForm> = (args) => (
  <ThemeProvider theme={theme}>
    <ProductForm {...args} />
  </ThemeProvider>
)
export const Form = Template.bind({})
