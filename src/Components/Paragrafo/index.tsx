import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'primary' | 'secondary'
  fontSize?: number
}

const Paragrafo = ({ children, tipo = 'primary', fontSize }: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)

export default Paragrafo
