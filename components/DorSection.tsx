import Reveal from './Reveal'

const etapas = [
  'entrar no portal',
  'digitar os dados',
  'revisar',
  'emitir a nota',
  'salvar o PDF',
  'enviar ao paciente',
]

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
          <div className="mb-3 text-7xl font-black leading-none gradient-text md:text-9xl">
            12 minutos
          </div>
        </Reveal>

        {/* Linha discreta: por que dá 12 minutos */}
        <Reveal delay={140}>
          <p className="mx-auto mb-7 flex max-w-xl flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-brand-muted/60">
            {etapas.map((etapa, i) => (
              <span key={etapa} className="inline-flex items-center gap-2">
                {etapa}
                {i < etapas.length - 1 && <span className="text-brand-cyan/40">·</span>}
              </span>
            ))}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mb-8 text-xl font-medium leading-relaxed text-brand-text md:text-2xl">
            É o que você perde com <span className="text-white">uma única</span> NFS-e no portal.
            Multiplique por cada paciente, todo mês.
            <br className="hidden sm:block" />
            <span className="text-brand-muted"> Quanto isso já te custou?</span>
          </p>
        </Reveal>

        <Reveal delay={280}>
          <div className="inline-flex items-center gap-3 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-6 py-3">
            <span className="text-lg">⚡</span>
            <span className="text-lg font-semibold text-white">
              A LéIA faz em <span className="gradient-text font-black">segundos</span> — sem você abrir portal nenhum.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
