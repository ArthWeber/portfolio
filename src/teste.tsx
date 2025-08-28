import styled from 'styled-components'

type BttnProps = {
  primary?: boolean
  fontSize?: string
}

const Bttn = styled.button<BttnProps>`
  background-color: ${(props) => (props.primary ? 'blue' : 'gray')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BttnDanger = styled(Bttn)`
  background-color: red;
  color: #fff;

  span {
    font-weight: bold;
  }
`

function Teste() {
  return (
    <>
      <Bttn primary>Botão</Bttn>
      <Bttn fontSize="20px">Botão 2</Bttn>
      <BttnDanger>
        <span>Botão Perigoso</span>
      </BttnDanger>
      <BttnDanger as="a" href="#">
        <span>Botão Perigoso</span>
      </BttnDanger>
    </>
  )
}

export default Teste
