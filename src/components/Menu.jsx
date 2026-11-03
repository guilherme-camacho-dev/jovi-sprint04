import { useState } from 'react'
import logo from '../assets/logo-jovi.avif'

const links = [
  { href: '#solucao', texto: 'Solução' },
  { href: '#recursos', texto: 'Recursos' },
  { href: '#publico', texto: 'Público' },
  { href: '#galeria', texto: 'Galeria' },
  { href: '#equipe', texto: 'Equipe' },
  { href: '#contato', texto: 'Contato' },
]

export default function Menu() {
  const [aberto, setAberto] = useState(false)

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-preto/90">
      <div className="flex items-center justify-between px-[4%] py-5">
        <img src={logo} alt="Logo JOVI" className="w-32" />

        <ul className="hidden gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm hover:text-azul">
                {link.texto}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="text-3xl lg:hidden"
          onClick={() => setAberto(!aberto)}
        >
          {aberto ? '✕' : '☰'}
        </button>
      </div>

      {aberto && (
        <ul className="flex flex-col gap-4 px-[4%] pb-5 lg:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setAberto(false)}
                className="text-sm hover:text-azul"
              >
                {link.texto}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
