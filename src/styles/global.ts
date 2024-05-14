import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: transparent;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.green_500};
  }
  
  body {
    background-color: ${({ theme }) => theme.colors.gray_900};
    color: ${({ theme }) => theme.colors.gray_300};
    -webkit-font-smoothing: antialised;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  ::-webkit-scrollbar {
    width: 0.25rem;
    border-radius: 8px;
    background: none;
  }

  ::-webkit-scrollbar-track {
    margin: 0;
    border-radius: 8px;
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.green_500};
    height: 3rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.green_300};
  }
`