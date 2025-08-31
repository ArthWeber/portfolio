import Sidebar from './Containers/Sidebar'
import Sobre from './Containers/Sobre'
import Projetos from './Containers/Projetos'
import GlobalStyled, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyled />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
