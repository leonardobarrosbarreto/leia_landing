import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://agentrika.com.br'),
  title: 'LéIA — Emita NFS-e por mensagem. Sem burocracia.',
  description: 'Psicólogo, você não formou para ficar emitindo nota fiscal. A LéIA faz isso pra você — por mensagem de texto ou voz. Garanta sua vaga na lista de espera.',
  openGraph: {
    title: 'LéIA — Emita NFS-e por mensagem. Sem burocracia.',
    description: 'Psicólogo, você não formou para ficar emitindo nota fiscal. A LéIA faz isso pra você — por mensagem ou voz.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'LéIA · Agentrika',
    images: [{ url: '/logo-leia.png', width: 1024, height: 400, alt: 'LéIA' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LéIA — Emita NFS-e por mensagem. Sem burocracia.',
    description: 'Psicólogo, você não formou para ficar emitindo nota fiscal. A LéIA faz isso pra você.',
    images: ['/logo-leia.png'],
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
