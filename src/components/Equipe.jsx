import Secao from './Secao'
import icone from '../assets/icone-engrenagem.png'

const integrantes = [
  'Felipe Cordeiro - RM 569581',
  'Enzo Cesarino - RM 569437',
  'Felipe Novais - RM 573411',
  'Guilherme Camacho - RM 571051',
  'Gustavo Palhares - RM 573190',
]

export default function Equipe() {
  return (
    <Secao id="equipe">
      <div className="grid items-center gap-10 text-center lg:grid-cols-[1fr_250px] lg:text-left">
        <div>
          <h2 className="mb-6 text-2xl text-azul lg:text-3xl">EQUIPE</h2>

          <ul className="list-disc pl-5 text-left marker:text-azul">
            {integrantes.map((nome) => (
              <li key={nome} className="mb-3 text-base leading-7 text-texto">
                {nome}
              </li>
            ))}
          </ul>
        </div>

        <img src={icone} alt="Ícone de engrenagem" className="mx-auto w-36" />
      </div>
    </Secao>
  )
}
