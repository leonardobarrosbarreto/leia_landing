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
    <section id="formulario" className="px-6 py-20 border-t border-white/10">
      <div className="max-w-md mx-auto bg-brand-form rounded-2xl p-8 md:p-10">
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
              Quero ser um dos primeiros
            </h2>
            <p className="text-brand-muted text-center mb-8">
              Garanta sua vaga antes do lançamento.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                name="nome"
                type="text"
                placeholder="Nome completo"
                required
                value={form.nome}
                onChange={handleChange}
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-brand-muted focus:outline-none focus:border-brand-cyan transition"
              />
              <input
                name="email"
                type="email"
                placeholder="Seu melhor email"
                required
                value={form.email}
                onChange={handleChange}
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-brand-muted focus:outline-none focus:border-brand-cyan transition"
              />
              <input
                name="telefone"
                type="tel"
                placeholder="(11) 99999-9999"
                required
                value={form.telefone}
                onChange={handleChange}
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-brand-muted focus:outline-none focus:border-brand-cyan transition"
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
          </>
        )}
      </div>
    </section>
  )
}
