export default function Secao({ id, children }) {
  return (
    <section
      id={id}
      className="flex flex-col justify-center border-t border-white/10 bg-white/5 px-[8%] py-24 lg:min-h-screen lg:px-[10%]"
    >
      {children}
    </section>
  )
}
