import Titulo from '../../Components/Titulo'
import Paragrafo from '../../Components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Olá, eu sou Arthur Weber, um desenvolvedor front-end apaixonado por criar
      interfaces de usuário incríveis. Estou sempre em busca de novos desafios e
      oportunidades para aprender e crescer na área de tecnologia.
    </Paragrafo>
    <GithubSecao>
      <img src="https://arth-weber.vercel.app/api?username=ArthWeber&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ArthWeber&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
