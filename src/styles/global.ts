import { css, createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html, body {
    height: 100%;
  }

  button {
    cursor: pointer;
    border: 0;
    background: transparent;
  }

  [disabled] {
    opacity: 0.7;
    cursor: not-allowed
  }

  ${({ theme }) => css`
    :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${theme.color['gray-600']};
    }

    body {
      color: ${theme.color.white};
      background: ${theme.color.black};
    }

    body,
    input,
    textarea,
    button {
      font-family: ${theme.font.family};
    }
  `}
`
