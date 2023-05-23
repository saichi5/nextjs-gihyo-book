import { Meta, StoryFn } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import CartProduct from './index'
import { theme } from 'themes'

const meta: Meta<typeof CartProduct> = {
  title: 'Organisms/CartProduct',
  component: CartProduct,
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: { type: 'number' },
      description: '商品ID',
      table: {
        type: { summary: 'number' },
      },
    },
    title: {
      control: { type: 'text' },
      description: '商品タイトル',
      table: {
        type: { summary: 'string' },
      },
    },
    imageUrl: {
      control: { type: 'text' },
      description: '商品画像URL',
      table: {
        type: { summary: 'string' },
      },
    },
    price: {
      control: { type: 'number' },
      description: '商品価格',
      table: {
        type: { summary: 'number' },
      },
    },
    onBuyButtonClick: {
      description: '購入ボタンを押した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
    onRemoveButtonClick: {
      description: '削除ボタンを押した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
}

export default meta

const Template: StoryFn<typeof CartProduct> = (args) => (
  <ThemeProvider theme={theme}>
    <CartProduct {...args} />
  </ThemeProvider>
)

export const NiceShoes = Template.bind({})
NiceShoes.args = {
  id: 1,
  imageUrl: '/images/sample/1.jpg',
  title: 'ナイスシューズ',
  price: 3200,
}
