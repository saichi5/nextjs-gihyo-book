import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import FilterGroup from './index'
import { theme } from 'themes'

const meta: Meta<typeof FilterGroup> = {
  title: 'Molecules/FilterGroup',
  component: FilterGroup,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'タイトル',
      table: {
        type: { summary: 'string' },
      },
    },
    items: {
      control: { type: 'array' },
      description: 'オプション',
      table: {
        type: { summary: 'array' },
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

const Template: StoryFn<typeof FilterGroup> = (args) => {
  const [value, setValue] = useState<string[]>([])
  const handleChange = (value: string[]) => {
    setValue(value)
    args && args.onChange && args.onChange(value)
  }

  return (
    <ThemeProvider theme={theme}>
      <FilterGroup value={value} onChange={handleChange} {...args} />
    </ThemeProvider>
  )
}

export const Standard = Template.bind({})
Standard.args = {
  title: 'All categories',
  items: [
    { label: 'Clothes', name: 'clothes' },
    { label: 'Books', name: 'books' },
    { label: 'Shoes', name: 'shoes' },
  ],
}
