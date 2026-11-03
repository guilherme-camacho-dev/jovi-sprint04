import Menu from './components/Menu'
import Topo from './components/Topo'
import Solucao from './components/Solucao'
import Recursos from './components/Recursos'
import Publico from './components/Publico'
import Galeria from './components/Galeria'
import Equipe from './components/Equipe'
import Contato from './components/Contato'
import Rodape from './components/Rodape'

export default function App() {
  return (
    <>
      <Menu />
      <Topo />
      <main>
        <Solucao />
        <Recursos />
        <Publico />
        <Galeria />
        <Equipe />
        <Contato />
      </main>
      <Rodape />
    </>
  )
}
