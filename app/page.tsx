import Header from '@/components/Header'
import Hero from '@/components/Hero'
import DorSection from '@/components/DorSection'
import ComoFunciona from '@/components/ComoFunciona'
import LeadForm from '@/components/LeadForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DorSection />
        <ComoFunciona />
        <LeadForm />
        <Footer />
      </main>
    </>
  )
}
