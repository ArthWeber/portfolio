import { Titulo as TituloCSS } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Titulo = (props: Props) => (
  <TituloCSS fontSize={props.fontSize}>{props.children}</TituloCSS>
)

export default Titulo
