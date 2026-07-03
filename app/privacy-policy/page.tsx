import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Política de Privacidade — LéIA',
  description: 'Como a LéIA (Agentrika) coleta, usa e protege seus dados pessoais, em conformidade com a LGPD.',
  robots: { index: true, follow: true },
}

function Secao({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-3 text-xl font-bold text-brand-text md:text-2xl">{titulo}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-brand-muted md:text-base">{children}</div>
    </section>
  )
}

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden px-6 pb-24 pt-36">
        <div className="glow-blob left-[10%] top-[5%] h-[300px] w-[300px] bg-brand-cyan/10" aria-hidden />
        <div className="glow-blob right-[10%] top-[30%] h-[280px] w-[280px] bg-brand-teal/10" aria-hidden />

        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-cyan">
            Política de Privacidade
          </p>
          <h1 className="mb-4 text-3xl font-black text-brand-text md:text-4xl">
            Como cuidamos dos seus dados na <span className="gradient-text">LéIA</span>
          </h1>
          <p className="mb-12 text-sm text-brand-muted">Última atualização: 3 de julho de 2026</p>

          <Secao titulo="1. Quem somos">
            <p>
              A LéIA é um produto da <strong className="text-brand-text">Agentrika</strong>, operado por{' '}
              <strong className="text-brand-text">BARRETO E SCHAEFER TREINAMENTOS LTDA</strong>, inscrita no
              CNPJ sob o nº <strong className="text-brand-text">27.419.182/0001-96</strong> (&ldquo;LéIA&rdquo;,
              &ldquo;Agentrika&rdquo;, &ldquo;nós&rdquo;).
            </p>
            <p>
              Esta política explica quais dados pessoais coletamos, para quê, com quem compartilhamos e quais
              direitos você tem sobre eles, em conformidade com a Lei Geral de Proteção de Dados (Lei nº
              13.709/2018 — LGPD).
            </p>
          </Secao>

          <Secao titulo="2. A quem esta política se aplica">
            <p>Esta política cobre dois contextos diferentes, com tratamentos diferentes:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong className="text-brand-text">Visitantes do site</strong> agentrika.com.br, que deixam
                nome, e-mail e telefone no formulário de contato.
              </li>
              <li>
                <strong className="text-brand-text">Profissionais que usam a LéIA</strong> (nossos clientes) e
                os dados que eles inserem sobre os tomadores dos seus serviços, necessários para emitir Notas
                Fiscais de Serviço (NFS-e) pelo WhatsApp ou Telegram.
              </li>
            </ul>
          </Secao>

          <Secao titulo="3. Quais dados coletamos">
            <p>
              <strong className="text-brand-text">3.1 — Se você preenche o formulário do site:</strong> nome,
              e-mail e telefone, apenas para entrarmos em contato sobre a LéIA.
            </p>
            <p>
              <strong className="text-brand-text">3.2 — Se você é profissional cliente da LéIA:</strong> seu
              nome, identificador do WhatsApp/Telegram, dados da sua empresa (razão social, CNPJ, regime
              tributário e demais informações exigidas para emissão de nota fiscal) e o conteúdo das mensagens
              de texto ou voz que você envia para operar o sistema (ex.: &ldquo;emite uma nota pra Maria, R$
              250&rdquo;). Se você ativar os módulos opcionais de agenda ou e-mail, também acessamos essas
              informações, em modo somente leitura, exclusivamente para exibir o que você pedir.
            </p>
            <p>
              Para assinar digitalmente suas notas fiscais, você também nos fornece seu{' '}
              <strong className="text-brand-text">certificado digital (e-CNPJ/e-CPF) e a respectiva senha</strong>.
              Esse é um dado extremamente sensível: ele é usado exclusivamente pelo sistema, de forma
              automatizada, para assinar as notas fiscais que você manda emitir — ninguém da nossa equipe acessa
              ou lê esse arquivo manualmente, e ele é removido quando você encerra a conta.
            </p>
            <p>
              <strong className="text-brand-text">3.3 — Dados dos tomadores de serviço</strong> (as pessoas ou
              empresas para quem você presta serviço): nome, CPF ou CNPJ, e-mail e endereço, que você mesmo
              insere para que a nota fiscal seja emitida corretamente. Coletamos apenas o que a legislação fiscal
              exige para emitir a NFS-e —{' '}
              <strong className="text-brand-text">
                a LéIA não acessa nem armazena prontuário, histórico clínico ou qualquer dado sobre o
                atendimento em si
              </strong>
              , apenas o necessário para a nota fiscal.
            </p>
          </Secao>

          <Secao titulo="4. Para que usamos os dados">
            <ul className="ml-5 list-disc space-y-2">
              <li>Entrar em contato com quem se cadastrou no site sobre a LéIA;</li>
              <li>Emitir, cancelar e gerenciar NFS-e em nome do profissional cliente, conforme instruído por ele;</li>
              <li>Enviar a nota fiscal por e-mail ao tomador do serviço, quando aplicável;</li>
              <li>Manter o histórico necessário para consultas, correções e obrigações fiscais;</li>
              <li>Garantir a segurança, prevenir fraudes e cumprir obrigações legais e regulatórias.</li>
            </ul>
          </Secao>

          <Secao titulo="5. Quem é o controlador dos dados, em cada caso">
            <p>
              Para os dados de visitantes do site e dos profissionais que contratam a LéIA, a Agentrika atua
              como <strong className="text-brand-text">Controladora</strong>.
            </p>
            <p>
              Para os dados dos tomadores de serviço, inseridos pelo profissional para emissão da nota fiscal,
              a Agentrika atua como <strong className="text-brand-text">Operadora</strong>: tratamos esses dados
              em nome e sob instrução do profissional, que é o Controlador dessa informação perante seus
              próprios clientes/pacientes, estritamente para a finalidade de emitir e gerenciar a nota fiscal
              exigida por lei.
            </p>
          </Secao>

          <Secao titulo="6. Base legal (LGPD)">
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong className="text-brand-text">Execução de contrato e procedimentos preliminares</strong>{' '}
                (art. 7º, V) — para atender ao pedido de contato do formulário e prestar o serviço da LéIA.
              </li>
              <li>
                <strong className="text-brand-text">Cumprimento de obrigação legal ou regulatória</strong> (art.
                7º, II) — a emissão de NFS-e é uma exigência fiscal, e os dados dos tomadores são coletados por
                essa razão.
              </li>
              <li>
                <strong className="text-brand-text">Legítimo interesse</strong> (art. 7º, IX) — para contato
                comercial com quem demonstrou interesse na LéIA.
              </li>
            </ul>
          </Secao>

          <Secao titulo="7. Com quem compartilhamos os dados">
            <p>
              Não vendemos dados pessoais a terceiros. Compartilhamos dados apenas com os fornecedores que
              operam a infraestrutura da LéIA, na medida necessária para o serviço funcionar:
            </p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong className="text-brand-text">Governo Federal (Emissor Nacional de NFS-e)</strong> —
                recebe os dados necessários para emitir a nota fiscal, por exigência legal.
              </li>
              <li>
                <strong className="text-brand-text">WhatsApp Business Platform (Meta) e Telegram</strong> —
                canais de mensagem usados para você conversar com a LéIA.
              </li>
              <li>
                <strong className="text-brand-text">Provedores de inteligência artificial</strong> (como
                Anthropic e Google) — processam o conteúdo das suas mensagens para interpretar o que você pediu
                e transcrever áudios em texto.
              </li>
              <li>
                <strong className="text-brand-text">Google Drive</strong> — armazenamento dos PDFs e XMLs das
                notas fiscais emitidas.
              </li>
              <li>
                <strong className="text-brand-text">Hostinger</strong> — hospedagem do servidor e envio de
                e-mails com a nota fiscal ao tomador.
              </li>
            </ul>
            <p>
              Esses fornecedores só recebem o dado necessário para prestar o serviço contratado por nós e estão
              contratualmente obrigados a proteger essa informação.
            </p>
          </Secao>

          <Secao titulo="8. Como protegemos os dados">
            <p>
              Adotamos medidas técnicas e organizacionais para proteger os dados, como conexões criptografadas
              (HTTPS/TLS), controle de acesso restrito à nossa equipe e isolamento dos dados de cada cliente da
              LéIA entre si. Continuamos aprimorando essas medidas à medida que o produto evolui.
            </p>
          </Secao>

          <Secao titulo="9. Por quanto tempo guardamos os dados">
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong className="text-brand-text">Leads do site:</strong> até você pedir a exclusão ou até 24
                meses sem contato.
              </li>
              <li>
                <strong className="text-brand-text">Dados fiscais</strong> (notas, tomadores): pelo prazo mínimo
                exigido pela legislação tributária, atualmente 5 anos.
              </li>
              <li>
                <strong className="text-brand-text">Certificado digital:</strong> apenas enquanto sua conta
                estiver ativa; é removido quando você encerra o serviço.
              </li>
            </ul>
          </Secao>

          <Secao titulo="10. Seus direitos como titular dos dados">
            <p>De acordo com a LGPD, você pode, a qualquer momento:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>Confirmar se tratamos seus dados e acessá-los;</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
              <li>Pedir a anonimização, o bloqueio ou a eliminação de dados desnecessários;</li>
              <li>Pedir a portabilidade dos seus dados;</li>
              <li>Revogar o consentimento e se opor a um tratamento;</li>
              <li>Saber com quem compartilhamos seus dados.</li>
            </ul>
            <p>
              Para exercer qualquer um desses direitos, escreva para{' '}
              <a href="mailto:contato@agentrika.com.br" className="text-brand-cyan hover:underline">
                contato@agentrika.com.br
              </a>
              .
            </p>
          </Secao>

          <Secao titulo="11. Cookies">
            <p>
              O site agentrika.com.br não utiliza cookies de rastreamento, publicidade ou analytics hoje. Se
              isso mudar, atualizaremos esta política antes de qualquer coleta desse tipo.
            </p>
          </Secao>

          <Secao titulo="12. Crianças e adolescentes">
            <p>
              A LéIA é destinada a profissionais liberais maiores de 18 anos. Não coletamos intencionalmente
              dados de crianças ou adolescentes.
            </p>
          </Secao>

          <Secao titulo="13. Alterações nesta política">
            <p>
              Podemos atualizar esta política para refletir mudanças no produto ou na legislação. A data no
              topo desta página sempre indica a versão mais recente.
            </p>
          </Secao>

          <Secao titulo="14. Fale conosco">
            <p>
              Dúvidas sobre esta política ou sobre como tratamos seus dados? Escreva para{' '}
              <a href="mailto:contato@agentrika.com.br" className="text-brand-cyan hover:underline">
                contato@agentrika.com.br
              </a>
              .
            </p>
          </Secao>
        </div>
      </main>
      <Footer />
    </>
  )
}
