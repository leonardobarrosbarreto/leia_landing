import Reveal from './Reveal'

const passos = [
  {
    numero: '01',
    icone: '💬',
    titulo: 'Você manda uma mensagem',
    descricao: 'Texto ou voz: "Emite nota para a Maria, R$ 250". É só isso.',
  },
  {
    numero: '02',
    icone: '✅',
    titulo: 'LéIA confirma com você',
    descricao: 'Ela mostra os dados e pede sua aprovação antes de emitir.',
  },
  {
    numero: '03',
    icone: '📄',
    titulo: 'Nota emitida automaticamente',
    descricao: 'PDF gerado, salvo e enviado para o paciente. Sem você abrir portal nenhum.',
  },
]

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-muted">
            Simples assim
          </p>
          <h2 className="mb-16 text-3xl font-black tracking-tight md:text-5xl">
            Como a <span className="gradient-text">LéIA</span> funciona
          </h2>
        </Reveal>

        <div className="relative grid gap-6 md:grid-cols-3">
          {/* Linha de conexão entre os passos (desktop) */}
          <div
            className="absolute left-0 right-0 top-[3.2rem] hidden h-px bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent md:block"
            aria-hidden
          />
          {passos.map((passo, i) => (
            <Reveal key={passo.numero} delay={i * 120}>
              <div className="gradient-border group relative h-full rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl">
                    {passo.icone}
                  </span>
                  <span className="text-4xl font-black gradient-text opacity-60">
                    {passo.numero}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold">{passo.titulo}</h3>
                <p className="leading-relaxed text-brand-muted">{passo.descricao}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
