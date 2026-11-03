import Secao from './Secao'
import icone from '../assets/icone-camera.webp'

export default function Solucao() {
  return (
    <Secao id="solucao">
      <div className="grid items-center gap-10 text-center lg:grid-cols-[1fr_250px] lg:text-left">
        <div>
          <h2 className="mb-6 text-2xl text-azul lg:text-3xl">NOSSA SOLUÇÃO</h2>
          <h3 className="mb-4 text-lg text-roxo lg:text-2xl">
            MAIS DO QUE FOTOGRAFAR. ENTENDER, CRIAR e EDITAR.
          </h3>
          <p className="text-base leading-8 text-texto lg:text-lg">
            A proposta integra uma inteligência artificial diretamente ao
            aplicativo de câmera. O usuário pode conversar com a IA e receber
            respostas simples, rápidas e úteis enquanto fotografa ou edita suas
            imagens.
          </p>
        </div>

        <img src={icone} alt="Ícone App Câmera" className="mx-auto w-40" />
      </div>
    </Secao>
  )
}
