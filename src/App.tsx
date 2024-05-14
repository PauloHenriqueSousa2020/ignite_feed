// libs
import { ThemeProvider } from "styled-components"

// components
import { Header, Post, Sidebar } from "./components"

// styles
import * as S from "./styles";
import theme from "./styles/theme"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <S.Container>

        <Sidebar />
        <main>
          <Post />
          <Post />
          <Post />
        </main>
      </S.Container>
    </ThemeProvider>
  )
}

export default App
