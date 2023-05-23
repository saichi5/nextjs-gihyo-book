import { Meta } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import BreadcrumbItem from './index'
import { theme } from 'themes'

const meta: Meta<typeof BreadcrumbItem> = {
  title: 'Atoms/BreadcrumbItem',
  component: BreadcrumbItem,
  tags: ['autodocs'],
}

export default meta

export const Standard = () => (
  <ThemeProvider theme={theme}>
    <div>
      <BreadcrumbItem>Item 1</BreadcrumbItem>
      <BreadcrumbItem>Item 2</BreadcrumbItem>
      <BreadcrumbItem>Item 3</BreadcrumbItem>
    </div>
  </ThemeProvider>
)
