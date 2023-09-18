import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { UserIssesProvider } from './contexts/UserIssesContext'

import { Router } from './router'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <UserIssesProvider>
          <Router />
        </UserIssesProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
