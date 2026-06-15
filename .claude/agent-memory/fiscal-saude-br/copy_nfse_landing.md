---
name: copy-nfse-landing
description: Padrões fiscais aprovados/reprovados para a copy da landing da LéIA sobre emissão de NFS-e para psicólogos
metadata:
  type: project
---

Decisões de copy da landing da LéIA (foco MVP = emissão de NFS-e p/ psicólogos), validadas em 2026-06-15.

**Why:** Leonardo revisa copy recorrentemente e o mesmo conjunto de afirmações volta. Evitar promessa enganosa e imprecisão sobre nota fiscal/reembolso.

**How to apply:** Ao revisar copy de NFS-e, aplicar estes padrões já fechados:

- **"em segundos" (nota emitida/salva/enviada)** = OK fiscalmente. É promessa de DESEMPENHO (não fiscal); só garantir que o produto cumpre. Se houver latência variável, usar "em instantes"/"em poucos minutos".
- **"Sem portal / sem senha / sem abrir sistema"** = OK. Correto no modelo de emissão automatizada via certificado digital/API.
- **"12 minutos por nota"** = enquadrar como ESTIMATIVA ("uns 10 a 15 min", "fácil gastar uns 12 min"), nunca como fato exato/universal — varia por pessoa e volume.
- **"portal" / "site da prefeitura"** = trocar SEMPRE por "Emissor Nacional" (nfse.gov.br). Descrever a dor como prefeitura está factualmente errado. Ver [[nfse-emissor-nacional]].
- **Lista de etapas manuais** (abrir Emissor, preencher campo a campo, descrição, emitir, salvar, enviar) = factualmente correta, OK.
- **"a descrição certa do convênio" / promessa ligada a reembolso** = AJUSTAR. Cada operadora de plano tem exigência própria; não existe "descrição certa" universal e quem aprova o reembolso é o plano, não a LéIA. Redação segura: "descrição do serviço já preenchida" ou "com os dados que o paciente precisa para pedir reembolso". NUNCA sugerir garantia de aceitação/reembolso.
  - Dados que convênios normalmente pedem na nota: nome+CPF do paciente, descrição (consulta/psicoterapia), data(s), valor, dados do profissional incl. CRP; alguns pedem qtd de sessões.

Ver [[project-leia]] e [[fiscal-validation-agent]].
