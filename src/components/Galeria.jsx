import Secao from './Secao'
import imagem1 from '../assets/galeria-1.png'
import imagem2 from '../assets/galeria-2.jpg'
import imagem3 from '../assets/galeria-3.png'
import imagem4 from '../assets/galeria-4.png'

const imagens = [
  { src: imagem1, alt: 'Tela do aplicativo' },
  { src: imagem2, alt: 'Tela do aplicativo' },
  { src: imagem3, alt: 'Calculadora' },
  { src: imagem4, alt: 'Tela do aplicativo' },
]

export default function Galeria() {
  return (
    <Secao id="galeria">
      <h2 className="mb-8 text-2xl text-azul lg:text-3xl">GALERIA</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {imagens.map((imagem) => (
          <div
            key={imagem.src}
            className="rounded-2xl border border-white/10 bg-preto/70 p-4"
          >
            <img
              src={imagem.src}
              alt={imagem.alt}
              className="mx-auto h-80 w-full object-contain"
            />
          </div>
        ))}
      </div>
    </Secao>
  )
}
