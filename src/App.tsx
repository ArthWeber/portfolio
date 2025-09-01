import { ThemeProvider } from 'styled-components'
import Sidebar from './Containers/Sidebar'
import Sobre from './Containers/Sobre'
import Projetos from './Containers/Projetos'
import GlobalStyled, { Container } from './styles'
import temaLight from './Themes/light'
import temaDark from './Themes/dark'
import { useState } from 'react'

function App() {
  const [useDarkTheme, setUseDarkTheme] = useState(false)

  function toggleTheme() {
    setUseDarkTheme(!useDarkTheme)
  }

  return (
    <ThemeProvider theme={useDarkTheme ? temaDark : temaLight}>
      <GlobalStyled />
      <Container>
        <Sidebar toggleTheme={toggleTheme} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
