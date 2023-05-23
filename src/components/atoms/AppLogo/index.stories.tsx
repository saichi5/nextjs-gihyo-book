import { Meta } from '@storybook/react'
import AppLogo from './index'

const meta: Meta<typeof AppLogo> = {
  title: 'Atoms/AppLogo',
  component: AppLogo,
  tags: ['autodocs'],
}

export default meta
export const Logo = () => <AppLogo />
