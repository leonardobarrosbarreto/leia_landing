const passos = [
  {
    numero: '01',
    titulo: 'Você manda uma mensagem',
    descricao: 'Texto ou voz: "Emite nota para a Maria, R$ 250". É só isso.',
  },
  {
    numero: '02',
    titulo: 'LéIA confirma com você',
    descricao: 'Ela mostra os dados e pede sua aprovação antes de emitir.',
  },
  {
    numero: '03',
    titulo: 'Nota emitida automaticamente',
    descricao: 'PDF gerado, salvo e enviado para o paciente. Sem você abrir portal nenhum.',
  },
]

export default function ComoFunciona() {
  return (
    <section className="px-6 py-20 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <p className="text-brand-muted uppercase tracking-widest text-sm font-semibold text-center mb-4">
          Simples assim
        </p>
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16">
          Como a LéIA funciona
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {passos.map((passo) => (
            <div key={passo.numero} className="flex flex-col items-start p-6 rounded-2xl border border-white/10 bg-white/5">
              <span className="gradient-text text-4xl font-black mb-4">
                {passo.numero}
              </span>
              <h3 className="text-xl font-bold mb-2">{passo.titulo}</h3>
              <p className="text-brand-muted leading-relaxed">{passo.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
