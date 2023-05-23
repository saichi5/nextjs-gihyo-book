import { Meta } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import Footer from './'
import { theme } from 'themes'

const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer',
  component: Footer,
  tags: ['autodocs'],
}
export default meta

export const Standard = () => (
  <ThemeProvider theme={theme}>
    <Footer />
  </ThemeProvider>
)
