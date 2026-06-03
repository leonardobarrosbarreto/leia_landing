import Reveal from './Reveal'
import PhoneMockup from './PhoneMockup'

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-36 pb-20 md:pt-44 md:pb-28">
      {/* Camada de fundo: grid + glows */}
      <div className="bg-grid absolute inset-0 z-0" aria-hidden />
      <div className="glow-blob animate-pulse-glow left-[-10%] top-[-5%] h-[420px] w-[420px] bg-brand-cyan/20" aria-hidden />
      <div className="glow-blob animate-pulse-glow right-[-10%] top-[20%] h-[460px] w-[460px] bg-brand-teal/20" aria-hidden />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        {/* Coluna de texto */}
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-brand-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cyan opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-cyan" />
              </span>
              Lista de espera aberta · Vagas limitadas
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
              Você se formou em Psicologia.{' '}
              <span className="gradient-text">Não em burocracia.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-brand-muted lg:mx-0 md:text-xl">
              A LéIA emite suas notas fiscais automaticamente — por mensagem de
              texto ou de voz. Sem portal, sem formulário, sem complicação.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:items-start lg:justify-start">
              <a
                href="#formulario"
                className="btn-gradient w-full rounded-xl px-8 py-4 text-lg font-bold text-white sm:w-auto"
              >
                Quero ser um dos primeiros
              </a>
              <a
                href="#como-funciona"
                className="w-full rounded-xl border border-white/15 px-8 py-4 text-center text-lg font-semibold text-white transition hover:bg-white/5 sm:w-auto"
              >
                Ver como funciona
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
              <div className="flex -space-x-2">
                {['#00D4FF', '#00A896', '#5A8BFF', '#8B7FFF'].map((c) => (
                  <span
                    key={c}
                    className="h-8 w-8 rounded-full border-2 border-[#14161F]"
                    style={{ background: `linear-gradient(135deg, ${c}, #1f2733)` }}
                  />
                ))}
              </div>
              <p className="text-sm text-brand-muted">
                <span className="font-semibold text-white">Psicólogos</span> já estão entrando na lista
              </p>
            </div>
          </Reveal>
        </div>

        {/* Coluna do mockup */}
        <Reveal delay={200} className="flex justify-center lg:justify-end">
          <PhoneMockup />
        </Reveal>
      </div>
    </section>
  )
}
