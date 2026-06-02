import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LéIA — Emita NFS-e por mensagem. Sem burocracia.',
  description: 'Psicólogo, você não formou para ficar emitindo nota fiscal. LéIA faz isso pra você — por mensagem de texto ou voz. Garanta sua vaga na lista de espera.',
  openGraph: {
    title: 'LéIA — Emita NFS-e por mensagem. Sem burocracia.',
    description: 'Psicólogo, você não formou para ficar emitindo nota fiscal.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-brand-bg text-brand-text antialiased">
        {children}
      </body>
    </html>
  )
}
