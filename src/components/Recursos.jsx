import Secao from './Secao'

const recursos = [
  {
    titulo: 'ASSISTENTE INTELIGENTE',
    texto:
      'Pergunte o que cada modo faz e descubra qual configuração combina melhor com cada situação.',
  },
  {
    titulo: 'TRADUÇÃO',
    texto:
      'Aponte a câmera para um texto e receba a tradução para outro idioma.',
  },
  {
    titulo: 'CÁLCULOS',
    texto:
      'Fotografe uma expressão matemática e deixe a inteligência artificial interpretar e resolver.',
  },
  {
    titulo: 'REMOÇÃO INTELIGENTE',
    texto:
      'Remova objetos ou pessoas indesejadas das fotos utilizando inteligência artificial.',
  },
]

export default function Recursos() {
  return (
    <Secao id="recursos">
      <h2 className="mb-8 text-2xl text-azul lg:text-3xl">RECURSOS</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {recursos.map((item) => (
          <div
            key={item.titulo}
            className="rounded-2xl border border-white/10 bg-white/5 p-7 hover:border-azul"
          >
            <h3 className="mb-3 text-lg text-roxo">{item.titulo}</h3>
            <p className="text-sm leading-7 text-cinza">{item.texto}</p>
          </div>
        ))}
      </div>
    </Secao>
  )
}
