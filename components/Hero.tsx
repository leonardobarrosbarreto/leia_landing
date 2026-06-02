import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
      <Image
        src="/logo-leia.png"
        alt="LéIA"
        width={180}
        height={72}
        className="mb-10"
        priority
      />
      <h1 className="text-4xl md:text-6xl font-black leading-tight max-w-3xl mb-6">
        Você formou em Psicologia.{' '}
        <span className="gradient-text">Não em burocracia.</span>
      </h1>
      <p className="text-brand-muted text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
        LéIA emite suas notas fiscais automaticamente — por mensagem de texto ou de voz.
        Sem portal, sem formulário, sem complicação.
      </p>
      <a
        href="#formulario"
        className="btn-gradient text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg"
      >
        Quero ser um dos primeiros
      </a>
    </section>
  )
}
