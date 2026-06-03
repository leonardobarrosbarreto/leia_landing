/**
 * Mockup de celular com a conversa da LéIA emitindo uma nota.
 * Construído em HTML/CSS — nítido em qualquer resolução e com as cores da marca.
 */
export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[300px] sm:w-[330px]">
      {/* Glow atrás do aparelho */}
      <div className="glow-blob animate-pulse-glow -inset-10 bg-brand-cyan/25" />

      {/* Aparelho */}
      <div className="relative animate-float rounded-[2.6rem] border border-white/15 bg-[#0E1018] p-2.5 shadow-2xl shadow-black/60">
        <div className="overflow-hidden rounded-[2rem] bg-[#0B141A]">
          {/* Barra de topo do chat */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-[#1f2733] to-[#161d27] px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-teal text-sm font-black text-[#0B141A]">
              Lé
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-white">LéIA</p>
              <p className="text-[11px] text-brand-cyan">online agora</p>
            </div>
          </div>

          {/* Corpo da conversa */}
          <div className="flex flex-col gap-2.5 px-3 py-4 text-[13px]">
            {/* Mensagem do psicólogo (áudio) */}
            <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-[#005C4B] px-3 py-2 text-white shadow">
              <div className="flex items-center gap-2">
                <span className="text-base">🎤</span>
                <span className="h-1.5 flex-1 rounded-full bg-white/30">
                  <span className="block h-full w-2/3 rounded-full bg-white/70" />
                </span>
                <span className="text-[11px] text-white/70">0:06</span>
              </div>
              <p className="mt-1 text-white/90">&ldquo;Emite uma nota pra Maria Silva, R$ 250.&rdquo;</p>
              <span className="mt-1 block text-right text-[10px] text-white/50">09:14</span>
            </div>

            {/* Resposta da LéIA — confirmação */}
            <div className="mr-auto max-w-[85%] rounded-2xl rounded-tl-sm bg-[#1f2733] px-3 py-2 text-white shadow">
              <p>Confirma os dados? 👇</p>
              <div className="mt-2 rounded-lg border border-white/10 bg-black/30 p-2 text-[12px] leading-relaxed">
                <p><span className="text-brand-muted">Cliente:</span> Maria Silva</p>
                <p><span className="text-brand-muted">Valor:</span> R$ 250,00</p>
                <p><span className="text-brand-muted">Serviço:</span> Sessão de psicologia</p>
              </div>
              <span className="mt-1 block text-[10px] text-white/40">09:14</span>
            </div>

            {/* Aprovação do psicólogo */}
            <div className="ml-auto max-w-[70%] rounded-2xl rounded-tr-sm bg-[#005C4B] px-3 py-2 text-white shadow">
              <p>Pode emitir ✅</p>
              <span className="mt-1 block text-right text-[10px] text-white/50">09:15</span>
            </div>

            {/* Nota emitida */}
            <div className="mr-auto max-w-[88%] rounded-2xl rounded-tl-sm bg-[#1f2733] px-3 py-2 text-white shadow">
              <p className="font-semibold text-brand-cyan">Nota emitida! 🎉</p>
              <div className="mt-2 flex items-center gap-2 rounded-lg border border-brand-teal/30 bg-brand-teal/10 p-2">
                <span className="text-xl">📄</span>
                <div className="leading-tight">
                  <p className="text-[12px] font-semibold">NFS-e_MariaSilva.pdf</p>
                  <p className="text-[10px] text-brand-muted">Enviada pra paciente · 18 KB</p>
                </div>
              </div>
              <span className="mt-1 block text-[10px] text-white/40">09:15</span>
            </div>
          </div>
        </div>
      </div>

      {/* Selo flutuante */}
      <div className="absolute -right-4 -top-3 rotate-3 rounded-xl border border-white/10 bg-white/95 px-3 py-2 shadow-xl backdrop-blur">
        <p className="text-[11px] font-bold leading-none text-[#14161F]">⏱️ 6 segundos</p>
        <p className="text-[10px] leading-tight text-[#5a6470]">vs. 12 min no portal</p>
      </div>
    </div>
  )
}
