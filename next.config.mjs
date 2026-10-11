/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // A landing e as páginas legais são HTML estático em public/.
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', destination: '/landing.html' },
        { source: '/termos-de-uso', destination: '/termos-de-uso.html' },
        { source: '/privacy-policy', destination: '/politica-de-privacidade.html' },
        { source: '/politica-de-privacidade', destination: '/politica-de-privacidade.html' },
      ],
    }
  },
}

export default nextConfig
