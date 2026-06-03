'use client'

import { useState } from 'react'

function formatTelefone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 11) return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  return value
}

export default function LeadForm() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [erro, setErro] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    if (name === 'telefone') {
      setForm(prev => ({ ...prev, telefone: formatTelefone(value) }))
    } else {
      setForm(prev => ({ ...prev, [name]: value }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErro('')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Erro ao enviar')
      }
      setStatus('success')
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Erro inesperado. Tente novamente.'
      setErro(message)
      setStatus('error')
    }
  }

  return (
    <section id="formulario" className="relative overflow-hidden px-6 py-24">
      {/* Glows de ambiente */}
      <div className="glow-blob animate-pulse-glow left-[15%] top-[10%] h-[360px] w-[360px] bg-brand-cyan/15" aria-hidden />
      <div className="glow-blob animate-pulse-glow right-[15%] bottom-[5%] h-[320px] w-[320px] bg-brand-teal/15" aria-hidden />

      <div className="relative z-10 mx-auto max-w-md rounded-3xl border border-white/10 bg-brand-form/80 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl md:p-10">
        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold mb-2">Vaga garantida!</h3>
            <p className="text-brand-muted">
              Você está na lista. Vamos te avisar quando a LéIA estiver pronta para você.
            </p>
          </div>
        ) : (
          <>
            <p className="text-brand-muted uppercase tracking-widest text-sm font-semibold text-center mb-4">
              Lista de espera
            </p>
            <h2 className="text-3xl font-black text-center mb-2">
              Quero ser um dos <span className="gradient-text">primeiros</span>
            </h2>
            <p className="text-brand-muted text-center mb-8">
              Garanta sua vaga antes do lançamento. Sem custo, sem compromisso.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                name="nome"
                type="text"
                placeholder="Nome completo"
                required
                value={form.nome}
                onChange={handleChange}
                className="bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder:text-brand-muted/70 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/30 transition"
              />
              <input
                name="email"
                type="email"
                placeholder="Seu melhor email"
                required
                value={form.email}
                onChange={handleChange}
                className="bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder:text-brand-muted/70 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/30 transition"
              />
              <input
                name="telefone"
                type="tel"
                placeholder="(11) 99999-9999"
                required
                value={form.telefone}
                onChange={handleChange}
                className="bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder:text-brand-muted/70 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/30 transition"
              />
              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">{erro}</p>
              )}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-gradient text-white font-bold text-lg py-4 rounded-xl mt-2 disabled:opacity-60"
              >
                {status === 'loading' ? 'Enviando...' : 'Garantir minha vaga'}
              </button>
            </form>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-brand-muted">
              <span className="inline-flex items-center gap-1.5">🔒 Seus dados protegidos</span>
              <span className="inline-flex items-center gap-1.5">✉️ Sem spam</span>
              <span className="inline-flex items-center gap-1.5">🚪 Saia quando quiser</span>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
