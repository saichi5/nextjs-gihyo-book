import { Meta } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import Breadcrumb from './index'
import BreadcrumbItem from 'components/atoms/BreadcrumbItem'
import { theme } from 'themes'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Molecules/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
}

export default meta

export const Standard = () => (
  <ThemeProvider theme={theme}>
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="#">Top</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="#">Clothes</a>
      </BreadcrumbItem>
      <BreadcrumbItem>Item</BreadcrumbItem>
    </Breadcrumb>
  </ThemeProvider>
)
