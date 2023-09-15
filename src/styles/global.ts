import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.BLUE};
  }

  body {
    background-color: ${(props) => props.theme.colors.BASE_BACKGROUND};
    color: ${(props) => props.theme.colors.BASE_TEXT};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 ${(props) => props.theme.size.M} Nunito, sans-serif;
  }
`
