import Secao from './Secao'
import icone from '../assets/icone-prancheta.png'

const lista = [
  'Usuários iniciantes que precisam de orientação.',
  'Pessoas que fotografam e editam no dia a dia.',
  'Usuários que precisam traduzir informações rapidamente.',
  'Pessoas que procuram praticidade em tarefas rápidas.',
]

export default function Publico() {
  return (
    <Secao id="publico">
      <div className="grid items-center gap-10 text-center lg:grid-cols-[1fr_250px] lg:text-left">
        <div>
          <h2 className="mb-6 text-2xl text-azul lg:text-3xl">PÚBLICO-ALVO</h2>
          <h3 className="mb-4 text-lg text-roxo lg:text-2xl">
            Feito para quem quer APROVEITAR mais.
          </h3>

          <ul className="list-disc pl-5 text-left marker:text-azul">
            {lista.map((item) => (
              <li key={item} className="mb-3 text-base leading-7 text-texto">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <img src={icone} alt="Ícone de objetivos" className="mx-auto w-40" />
      </div>
    </Secao>
  )
}
