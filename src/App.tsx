// libs
import { ThemeProvider } from "styled-components"

// components
import { Header, Sidebar } from "./components"

// styles
import theme from "./styles/theme"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Sidebar />
    </ThemeProvider>
  )
}

export default App
