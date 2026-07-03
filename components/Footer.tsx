import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
        <Image
          src="/logo-leia.png"
          alt="LéIA"
          width={80}
          height={32}
          className="h-7 w-auto opacity-80"
        />
        <p className="max-w-md text-sm text-brand-muted">
          A LéIA emite, salva e envia as suas notas fiscais — para você usar seu tempo com o que importa: seus pacientes.
        </p>
        <p className="text-xs text-brand-muted/70">
          Um produto <span className="font-semibold text-brand-muted">Agentrika</span> · © 2026 · Todos os direitos reservados. ·{' '}
          <a href="/privacy-policy" className="underline hover:text-brand-muted">
            Política de Privacidade
          </a>
        </p>
      </div>
    </footer>
  )
}
