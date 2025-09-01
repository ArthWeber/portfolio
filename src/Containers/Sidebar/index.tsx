import Avatar from '../../Components/Avatar'
import Paragrafo from '../../Components/Paragrafo'
import Titulo from '../../Components/Titulo'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  toggleTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Arthur Weber</Titulo>
      <Paragrafo tipo="secondary">ArthWeber</Paragrafo>
      <Descricao tipo="primary" fontSize={12}>
        Programador Front-End
      </Descricao>
      <BotaoTema onClick={props.toggleTheme}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
