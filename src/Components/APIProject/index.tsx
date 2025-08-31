import Paragrafo from '../../Components/Paragrafo'
import Titulo from '../../Components/Titulo'
import { Card, LinkBotao } from './styles'

const APIProject = () => {
  return (
    <Card>
      <Titulo>Projeto Lista de Tarefas</Titulo>
      <Paragrafo tipo="secondary">Lista de tarefas feita com Vue.JS</Paragrafo>
      <LinkBotao href="#">Ver Projeto</LinkBotao>
    </Card>
  )
}

export default APIProject
