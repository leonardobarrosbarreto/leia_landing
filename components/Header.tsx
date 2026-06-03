import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2.5 backdrop-blur-xl">
          <Image
            src="/logo-leia.png"
            alt="LéIA"
            width={92}
            height={36}
            className="h-8 w-auto"
            priority
          />
          <a
            href="#formulario"
            className="btn-gradient hidden rounded-xl px-5 py-2 text-sm font-bold text-white sm:inline-block"
          >
            Entrar na lista
          </a>
        </div>
      </div>
    </header>
  )
}
