import { Meta } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import GlobalSpinner from './index'
import Button from 'components/atoms/Button'
import GlobalSpinnerContextProvider, {
  useGlobalSpinnerActionsContext,
} from 'contexts/GlobalSpinnerContext'
import { theme } from 'themes'

const meta: Meta<typeof GlobalSpinner> = {
  title: 'organisms/GlobalSpinner',
  component: GlobalSpinner,
  tags: ['autodocs'],
}

export default meta

export const WithContextProvider = () => {
  const ChildComponent = () => {
    const setGlobalSpinner = useGlobalSpinnerActionsContext()
    const handleClick = () => {
      setGlobalSpinner(true)
      // 5秒後に閉じる
      setTimeout(() => {
        setGlobalSpinner(false)
      }, 5000)
    }

    return (
      <ThemeProvider theme={theme}>
        <GlobalSpinner />
        <Button onClick={handleClick}>スピナー表示</Button>
      </ThemeProvider>
    )
  }

  return (
    <GlobalSpinnerContextProvider>
      <ChildComponent />
    </GlobalSpinnerContextProvider>
  )
}
