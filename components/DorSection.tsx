import Reveal from './Reveal'

export default function DorSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="glow-blob right-[10%] top-[30%] h-[300px] w-[300px] bg-brand-teal/10" aria-hidden />
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-brand-muted">
            A conta que ninguém faz
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mb-2 text-7xl font-black leading-none gradient-text md:text-9xl">
            12 min
          </div>
        </Reveal>

        <Reveal delay={160}>
          <p className="mb-8 text-xl font-medium leading-relaxed text-brand-text md:text-2xl">
            É quanto tempo um psicólogo perde para emitir uma NFS-e.
            <br className="hidden sm:block" />
            <span className="text-brand-muted"> Por nota. Todo mês. Para cada paciente.</span>
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="inline-flex items-center gap-3 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-6 py-3">
            <span className="text-lg">⚡</span>
            <span className="text-lg font-semibold text-white">
              A LéIA faz isso em <span className="gradient-text font-black">segundos</span>.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
