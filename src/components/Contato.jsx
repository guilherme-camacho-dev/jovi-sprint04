import { useState } from 'react'

export default function Contato() {
  const [enviado, setEnviado] = useState(false)

  function enviar(evento) {
    evento.preventDefault()
    setEnviado(true)
    evento.target.reset()
  }

  return (
    <section
      id="contato"
      className="bg-preto px-[8%] py-24 lg:min-h-[70vh] lg:px-[10%]"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <p className="mb-3 text-sm tracking-widest text-azul">
            ENTRE EM CONTATO
          </p>
          <h2 className="mb-4 text-3xl text-azul lg:text-4xl">
            Fale com nossa equipe
          </h2>
          <p className="font-poppins text-base font-normal leading-8 text-cinza">
            Tem alguma dúvida, sugestão ou quer saber mais sobre a nossa
            solução? Entre em contato conosco.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="mb-6 font-poppins font-normal text-cinza">
            <h3 className="mb-1 font-orbitron text-base font-bold text-branco">
              Telefone
            </h3>
            <p>+55 11 95887-2367</p>
            <p className="mb-5">De Seg. a Sex. das 12h às 12:01h</p>

            <h3 className="mb-1 font-orbitron text-base font-bold text-branco">
              WhatsApp
            </h3>
            <p className="mb-5">De Seg. a Sex. das 12h às 12:01h</p>

            <h3 className="mb-1 font-orbitron text-base font-bold text-branco">
              E-mail
            </h3>
            <p>fefenovaissp@gmail.com</p>
          </div>

          <form
            onSubmit={enviar}
            className="flex flex-col gap-3 border-t border-white/10 pt-6 font-poppins font-normal"
          >
            <input
              type="text"
              placeholder="Seu nome"
              required
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              required
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm"
            />
            <textarea
              placeholder="Sua mensagem"
              rows="4"
              required
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm"
            ></textarea>
            <button
              type="submit"
              className="rounded-lg bg-azul px-6 py-3 font-orbitron font-bold text-preto hover:bg-roxo hover:text-branco"
            >
              Enviar
            </button>

            {enviado && (
              <p className="text-center text-sm text-green-400">
                Mensagem enviada!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
