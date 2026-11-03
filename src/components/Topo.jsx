import fundo from '../assets/hero-bg.avif'

export default function Topo() {
  return (
    <header
      className="flex h-screen items-center justify-center bg-cover bg-center bg-fixed px-5 text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(5,8,22,0.3), rgba(5,8,22,0.8)), url(${fundo})`,
      }}
    >
      <div className="max-w-3xl">
        <h2 className="text-3xl leading-tight text-azul sm:text-5xl lg:text-6xl">
          Transforme sua Câmera em um Assistente Inteligente
        </h2>

        <p className="mt-6 text-base leading-8 text-texto lg:text-lg">
          Uma inteligência artificial integrada ao aplicativo de câmera para
          explicar modos, traduzir textos, remover objetos indesejados e até
          resolver cálculos.
        </p>

        <a
          href="#solucao"
          className="mt-8 inline-block rounded-lg bg-azul px-8 py-3 text-preto hover:bg-roxo hover:text-branco"
        >
          Explorar Sistema
        </a>
      </div>
    </header>
  )
}
