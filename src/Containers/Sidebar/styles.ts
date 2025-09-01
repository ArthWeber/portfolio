import styled from 'styled-components'
import { P } from '../../Components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-bottom: 40px;
  margin-top: 24px;
`

export const BotaoTema = styled.button`
  border-radius: 8px;
  color: #eee;
  font-size: 16px;
  font-weight: bold;
  background-color: #282a35;
  padding: 8px 12px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #3c4048;
  }
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
